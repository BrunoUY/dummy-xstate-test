import { assign, createMachine, raise, StateFrom } from 'xstate';
import { interpret } from 'xstate-ninja';

interface Song {
  title: string;
  artist: string;
  duration: number;
}

function loadSong() {
  return new Promise<Song>(resolve => {
    setTimeout(() => {
      resolve({
        title: 'My Song',
        artist: 'Me',
        duration: 100,
      });
    }, 1000);
  });
}

let songCounter = 0;
function invokeSongLoader() {
  return new Promise<Song>(resolve => {
    setTimeout(() => {
      resolve({
        title: `My Song #${songCounter++}`,
        artist: 'Random Artist',
        duration: Math.floor(Math.random() * 100),
      });
    }, 1000);
  });
}

const machineVideoPlayer = createMachine({
  id: 'videoPalyerMachine',
  tsTypes: {} as import('./videoPlayer.typegen').Typegen0,
  type: 'parallel',
  schema: {
    context: {} as {
      title: string;
      artist: string;
      duration: number;
      elapsed: number;
      likeStatus: string;
      volume: number;
    },
    events: {} as
      | { type: 'DISLIKE' }
      | { type: 'AUDIO.TIME'; elapsed: number }
      | { type: 'LIKE.TOGGLE' }
      | { type: 'LIKE' }
      | { type: 'UNLIKE' }
      | { type: 'PLAY' }
      | { type: 'PAUSE' }
      | { type: 'VOLUME.TOGGLE' }
      | { type: 'VOLUME'; volume: number },
    services: {} as {
      songLoader: {
        data: Song;
      };
    },
  },
  context: {
    title: 'undefined',
    artist: 'undefined',
    duration: 0,
    elapsed: 0,
    likeStatus: 'unliked',
    volume: 5,
  },
  predictableActionArguments: true,
  preserveActionOrder: true,
  states: {
    player: {
      initial: 'loading',
      states: {
        ready: {
          initial: 'paused',
          states: {
            paused: {
              on: {
                PLAY: {
                  target: 'playing',
                },
              },
            },
            playing: {
              entry: 'actionEntryPlayAudio',
              exit: 'actionExitPlayAudio',
              on: {
                PAUSE: {
                  target: 'paused',
                },
              },
            },
            hist: {
              description: 'preservamos el último estado',
              history: 'shallow',
              type: 'history',
            },
          },
          always: {
            target: 'finished',
            cond: 'guardElapsedMoreThanDuration',
            description: 'Guard condition: ctx.elapsed >= ctx.duration',
          },
        },
        loading: {
          invoke: {
            src: 'songLoader',
            onDone: [
              {
                target: '#videoPalyerMachine.player.ready.hist',
                actions: 'actionAssingSongData',
              },
            ],
          },
        },
        finished: {
          type: 'final',
        },
      },
      onDone: {
        target: '.loading',
        description: 'cuando finished se ejecuta ( termina la canción )',
        internal: false,
      },
      on: {
        'DISLIKE': {
          actions: ['actionDislikeSong', raise('SKIP')],
        },
        'AUDIO.TIME': {
          actions: 'actionAssignTime',
        },
        'LIKE.TOGGLE': [
          {
            cond: 'guardIsLike',
            actions: raise('UNLIKE'),
          },
          {
            cond: 'guardIsUnlike',
            actions: raise('LIKE'),
          },
        ],
        'LIKE': {
          actions: 'actionLikeSong',
        },
        'UNLIKE': {
          actions: 'actionUnlikeSong',
        },
      },
    },
    volume: {
      initial: 'unmuted',
      states: {
        unmuted: {
          on: {
            'VOLUME.TOGGLE': {
              target: 'muted',
            },
          },
        },
        muted: {
          on: {
            'VOLUME.TOGGLE': {
              target: 'unmuted',
            },
          },
        },
      },
      on: {
        VOLUME: {
          cond: 'guardVolumeWithinRange',
          actions: 'actionAssignVolume',
        },
      },
    },
  },
}).withConfig({
  services: {
    songLoader: invokeSongLoader,
  },
  actions: {
    actionAssingSongData: assign((_, event) => {
      const { title, artist, duration } = event.data;
      return { title, artist, duration };
    }),
    actionUnlikeSong: assign({
      likeStatus: 'unliked',
    }),
    actionLikeSong: assign({
      likeStatus: 'liked',
    }),
    actionDislikeSong: assign({
      likeStatus: 'disliked',
    }),
    actionAssignTime: assign({
      elapsed: (_, event) => event.elapsed,
    }),
    actionEntryPlayAudio: () => {
      console.log('actionEntryPlayAudio');
    },
    actionExitPlayAudio: () => {
      console.log('actionExitPlayAudio');
    },
    actionAssignVolume: assign({
      volume: (_, event) => event.volume,
    }),
  },
  guards: {
    guardElapsedMoreThanDuration: (ctx, _) => ctx.elapsed > ctx.duration,
    guardIsLike: (ctx, _) => ctx.likeStatus === 'liked',
    guardIsUnlike: (ctx, _) => ctx.likeStatus === 'unliked',
    guardVolumeWithinRange: (_, event) => event.volume >= 0 && event.volume <= 10,
  },
});

export const serviceVideoPlayer = interpret(machineVideoPlayer, { devTools: true }).start();
export type T_MachineVideoPlayer = StateFrom<typeof machineVideoPlayer>;
