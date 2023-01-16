import { assign, createMachine, StateFrom, raise } from 'xstate';
import { interpret } from 'xstate-ninja'

function loadSong () {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( {
                title: 'My Song',
                artist: 'Me',
                duration: 100
            } );
        }, 1000 );
    });
}

let songCounter = 0;
function invokeSongLoader () {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( {
                title: `My Song #${songCounter++}`,
                artist: 'Random Artist',
                duration: Math.floor( Math.random() * 100 ),
            } );
        }, 1000 );
    });
}

 const machineVideoPlayer = createMachine( {
    id: "videoPalyerMachine",
    tsTypes: {} as import("./videoPlayer.typegen").Typegen0,
    type: "parallel",
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
            | { type: "DISLIKE" }
            | { type: "AUDIO.TIME" }
            | { type: "LIKE.TOGGLE" }
            | { type: "LIKE" }
            | { type: "UNLIKE" }
            | { type: "PLAY" }
            | { type: "PAUSE" }
            | { type: "VOLUME.TOGGLE" }
            | { type: "VOLUME" },
    },
    context: {
        title: "undefined",
        artist: "undefined",
        duration: 0,
        elapsed: 0,
        likeStatus: "unliked",
        volume: 5,
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
    states: {
        player: {
            initial: "loading",
            states: {
                ready: {
                    initial: "paused",
                    states: {
                        paused: {
                            on: {
                                PLAY: {
                                    target: "playing",
                                },
                            },
                        },
                        playing: {
                            entry: "actionEntryPlayAudio",
                            exit: "actionExitPlayAudio",
                            on: {
                                PAUSE: {
                                    target: "paused",
                                },
                            },
                        },
                        hist: {
                            description: "preservamos el último estado",
                            history: "shallow",
                            type: "history",
                        },
                    },
                    always: {
                        target: "finished",
                        cond: "guardElapsedMoreThanDuration",
                        description: "Guard condition: ctx.elapsed >= ctx.duration",
                    },
                },
                loading: {
                    invoke: {
                        id: "songLoader",
                        src: invokeSongLoader,
                        onDone: [
                            {
                                target: "#videoPalyerMachine.player.ready.hist",
                                actions: "actionAssingSongData",
                            },
                        ],
                    },
                },
                finished: {
                    type: "final",
                },
            },
            onDone: {
                target: ".loading",
                description: "cuando finished se ejecuta ( termina la canción )",
                internal: false,
            },
            on: {
                DISLIKE: {
                    actions: [ "actionDislikeSong", raise( 'SKIP' ) ],
                },
                "AUDIO.TIME": {
                    actions: "actionAssignTime",
                },
                "LIKE.TOGGLE": [
                    {
                        cond: "guardIsLike",
                        actions: raise( 'UNLIKE' ),
                    },
                    {
                        cond: "guardIsUnlike",
                        actions: raise( 'LIKE' ),
                    },
                ],
                LIKE: {
                    actions: "actionLikeSong",
                },
                UNLIKE: {
                    actions: "actionUnlikeSong",
                },
            },
        },
        volume: {
            initial: "unmuted",
            states: {
                unmuted: {
                    on: {
                        "VOLUME.TOGGLE": {
                            target: "muted",
                        },
                    },
                },
                muted: {
                    on: {
                        "VOLUME.TOGGLE": {
                            target: "unmuted",
                        },
                    },
                },
            },
            on: {
                VOLUME: {
                    cond: "guardVolumeWithinRange",
                    actions: "actionAssignVolume",
                },
            },
        },
    },
    
} ).withConfig( {
    actions: {
        actionAssingSongData: assign( {
            artist: ( _, event: T_EventContext  ) => event.artist,
            title: ( _, event: T_EventContext ) => event.title,
            duration: ( _, event: T_EventContext ) => event.duration,
            elapsed: 0,
            likeStatus: "unliked",
        } ),
        actionUnlikeSong: assign( {
            likeStatus: "unliked",
        } ),
        actionLikeSong: assign( {
            likeStatus: "liked",
        } ),
        actionDislikeSong: assign( {
            likeStatus: "disliked",
        } ),
        actionAssignTime: assign( {
            elapsed: ( _, event: T_EventContext ) => event.elapsed,
        } ),
        actionEntryPlayAudio: () => {
            console.log( "actionEntryPlayAudio" );
        },
        actionExitPlayAudio: () => {
            console.log( "actionExitPlayAudio" );
        },
        actionAssignVolume: assign( {
            volume: ( _, event: T_EventContext ) => event.volume,
        } ),
    },
    /* guards: {
    }, */
} );
//type VolumeEvent = { type: 'VOLUME', volume: number };

type T_EventContext = {
        title: string;
        artist: string;
        duration: number;
        elapsed: number;
        likeStatus: string;
        volume: number;
};


export const serviceVideoPlayer =
    interpret( machineVideoPlayer, { devTools: true } )
        .start();
export type T_MachineVideoPlayer = StateFrom<typeof machineVideoPlayer>;