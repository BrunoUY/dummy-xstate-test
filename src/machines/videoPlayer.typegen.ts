// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'internalEvents': {
    '': { type: '' };
    'done.invoke.videoPalyerMachine.player.loading:invocation[0]': {
      type: 'done.invoke.videoPalyerMachine.player.loading:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
    'xstate.stop': { type: 'xstate.stop' };
  };
  'invokeSrcNameMap': {
    songLoader: 'done.invoke.videoPalyerMachine.player.loading:invocation[0]';
  };
  'missingImplementations': {
    actions:
      | 'actionAssignTime'
      | 'actionAssignVolume'
      | 'actionAssingSongData'
      | 'actionDislikeSong'
      | 'actionEntryPlayAudio'
      | 'actionExitPlayAudio'
      | 'actionLikeSong'
      | 'actionUnlikeSong';
    delays: never;
    guards: 'guardElapsedMoreThanDuration' | 'guardIsLike' | 'guardIsUnlike' | 'guardVolumeWithinRange';
    services: 'songLoader';
  };
  'eventsCausingActions': {
    actionAssignTime: 'AUDIO.TIME';
    actionAssignVolume: 'VOLUME';
    actionAssingSongData: 'done.invoke.videoPalyerMachine.player.loading:invocation[0]';
    actionDislikeSong: 'DISLIKE';
    actionEntryPlayAudio: 'PLAY';
    actionExitPlayAudio: '' | 'PAUSE' | 'done.state.videoPalyerMachine.player' | 'xstate.stop';
    actionLikeSong: 'LIKE';
    actionUnlikeSong: 'UNLIKE';
  };
  'eventsCausingDelays': {};
  'eventsCausingGuards': {
    guardElapsedMoreThanDuration: '';
    guardIsLike: 'LIKE.TOGGLE';
    guardIsUnlike: 'LIKE.TOGGLE';
    guardVolumeWithinRange: 'VOLUME';
  };
  'eventsCausingServices': {
    songLoader: 'done.state.videoPalyerMachine.player' | 'xstate.init';
  };
  'matchesStates':
    | 'player'
    | 'player.finished'
    | 'player.loading'
    | 'player.ready'
    | 'player.ready.paused'
    | 'player.ready.playing'
    | 'volume'
    | 'volume.muted'
    | 'volume.unmuted'
    | { player?: 'finished' | 'loading' | 'ready' | { ready?: 'paused' | 'playing' }; volume?: 'muted' | 'unmuted' };
  'tags': never;
}
