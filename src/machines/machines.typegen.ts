
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
"xstate.stop": { type: "xstate.stop" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: "changeVolume" | "dislikeSong" | "likeSong" | "pauseAudio" | "playAudio" | "setSongData" | "skipSong" | "unlikeSong";
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "changeVolume": "VOLUME";
"dislikeSong": "DISLIKE";
"likeSong": "LIKE";
"pauseAudio": "PAUSE" | "SKIP" | "xstate.stop";
"playAudio": "LOADED" | "PLAY";
"setSongData": "LOADED";
"skipSong": "SKIP";
"unlikeSong": "UNLIKE";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "loading" | "paused" | "playing";
        tags: never;
      }

export interface Typegen1 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "selection" | "selection.containersForm" | "selection.filteringForm" | "selection.watchlistsForm" | { "selection"?: "containersForm" | "filteringForm" | "watchlistsForm"; };
        tags: never;
      }

export interface Typegen2 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "saveData": "SAVE_DATA";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "idle" | "saved";
        tags: never;
      }
  