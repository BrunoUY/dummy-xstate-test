import { assign, createMachine, StateFrom } from 'xstate';
import { interpret } from 'xstate-ninja'
import { raise } from 'xstate/lib/actions';


export const machineVideoPlayer =

    /** @xstate-layout N4IgpgJg5mDOIC5QAoBuBLCYD2ACADgDYCGAnmAE4CUAxAMoDSAkgAoDaADALqKj7ax0AF3TYAdrxAAPRAFoATAA4AnADoArOsXr56gCwBmdco57FAGhClE8gxuMcAjAcMB2F-IBse+QF9flmiYOAQk5NQ0ADJMDACinDxIIPyCIuKSMgjyTqpmenr6+p7K2q6ultYIso7aGt6KHIoGnq6OPl7+gRhYeERklLQAIkx00XEJkinCohJJmS6qrk2KBRyeKmsG5VZyjiX22nqu6gaORdqdIEE9of0RAKoAcmPx3JMC0+lzuwZ2zT41TyNNp6RwVXa1dT1RrNVrtTyXa4hPrhWgANQA8pF7gBZV6JPgfNKzUCZWQGbKqeRlTwnZyuLzKAzgqo1dR1MwwlpteQdAJXbrIsIDVSEbDECDoMRQKIYgCCg1igwmSSmxIycnkZ1UnkcrmUrg4Bq0pRZbTsHEanmy3JqyihiMFvWF1FUKKlMpYcvudHx71SMw1CEc1sWjmyR1pNoMyjNUNUyj2FI4v2pii8BkdwWddyobuIAFdYJAaCxInKAJoqwkBr6kxAh1yqbQqRw1I3KPQmTws1yeVQcMocLT2qG-RSufz8sTYLDwJJInOo-2fEnSORbNQTxS69SuPS6ppHFmybyqNvGRQ8k4cJQI-mL26o0XiyXSlfq75VX6OZtLXf7oeLjbJUzjsu4KymPIPhXqmWY3CiIruu+qpEoGX7kr+8gmLy6yWuoZxXhYOzBthA63rCjgpkYyjwUKub5kWkAfuh9ZZIoiiLGUmhaF2MYUmatIaE03htJ4QJ7JOU5AA */
    createMachine( {
        predictableActionArguments: true,
        tsTypes: {} as import( "./machines.typegen" ).Typegen0,
        initial: 'loading',
        context: {
            title: '',
            artist: '',
            duration: 0,
            elapsed: 0,
            likeStatus: 'unliked',
            volume: 0.5,
        },
        states: {
            loading: {
                on: {
                    LOADED: {
                        actions: [ 'setSongData' ],
                        
                        // add an aciton to asing the song data
                        target: 'playing'
                    },
                },
            },
            playing: {
                entry: [ 'playAudio' ],
                exit: [ 'pauseAudio' ],
                // when this state is entered, add an action to play the audio
                // when this state is existed, add an action to pause the audio
                on: {
                    PAUSE: {
                        target: 'paused'
                    },
                },
            },
            paused: {
                on: {
                    PLAY: {
                        target: 'playing'
                    },
                },
            },
        },

        on: { // eventos que se van a ejecuar desde cualquier estado
            SKIP: {
                // add an action to skip the song
                actions: [ 'skipSong' ],
                target: 'loading'
            },
            LIKE: {
                // add an action to like the song
                actions: [ 'likeSong' ],
            },
            DISLIKE: {
                // add an action to dislike the song,AND RAISE THE SKIP EVENT
                actions: [
                    'dislikeSong',
                    raise( { type: 'SKIP' } )
                ],
            },
            UNLIKE: {
                // add an action to unlike the song
                actions: [ 'unlikeSong' ],
            },
            VOLUME: {
                // add an action to change the volume
                actions: [ 'changeVolume' ],
            },
        },

        id: "(video player)"
    } ).withConfig( {
        actions: {
            setSongData: assign( {
                title: ( context, event: T_ArtistPayload ) => event.data.title,
                artist: ( context, event: T_ArtistPayload ) => event.data.artist,
                duration: ( context, event: T_ArtistPayload ) => event.data.duration,
                elapsed: 0,
                likeStatus: 'unliked',
            } ),
            playAudio: () => { console.log( 'entry action: playAudio' ) },
            pauseAudio: () => { console.log( 'exit action: pauseAudio' ) },
            skipSong: () => { console.log( 'action: skipSong' ) },
            likeSong: assign( {
                likeStatus: 'liked'
            } ),
            dislikeSong: assign( {
                likeStatus: 'disliked'
            } ),
            unlikeSong: assign( {
                likeStatus: 'unliked'
            } ),
            changeVolume: assign( {
                volume: ( context ) => {
                    if ( context.volume < 1 ) {
                        return context.volume + 0.1;
                    }
                }
            }),
        },
    } );

export const serviceMachineVideoPlayer = interpret( machineVideoPlayer, { devTools: true } ).start();
export type T_MachineVideoPlayerState = StateFrom<typeof machineVideoPlayer>;

export type T_ArtistPayload = {
    data: {
        title: string;
        artist: string;
        duration: number;
    }
}


export const machineDataSelection =
    /** @xstate-layout N4IgpgJg5mDOIC5QQIYBcUGUwBswGM0BLAewDsA6WXA48gYgDEBJAGQBUBRAJQH0BBTJk7tMAbQAMAXUSgADiVhE6ZWSAAeiAGwSKAJgCcRgBwB2CcYAsAVj2W9egDQgAnogC01yxWN7jARntTAGYJAy1Qg0sAX2jnVAxsPEJSSmpklXphVk4AYXZeAHV+dlyACVZmTFFJGSQQBSUVNU0EHX0jAzMLGzsHZzcEd39-YIpQ4MCQyyjTf1MYuJAErBoU8io1zOy8gtyAeQA5dn5mQ55xaTVG5VSW7V1DE3MrW3snVw95-wpTUwDrP5wqYuhJgoslmQSBA4GoVklaHd6jdmvVWu5gtZfhIcf5DP4vKZrP8Bh5waYKHiAlo-KYtEDjMEtLF4uhVhlUpsOeRropbjy0Yg8R1nj03nogaShnprAYKDZJsT3hYDEyWcs2Qj1mktpyAO7ofAACxwRFgaFgjBIACcALa8ppI0CtPzePTBImBYLGAx4gwSaxS4bC3z+H1WAzWCT+CL+dXw3UbdKIjYAMyIODQYGtRDIUCtdod-NUgoQrv0HsBlm9vsMAaDXnGli0Pu9dKjdK0i1ZiUTOu5lHw5Awuezlpt9uRfNRzsQ5fdnurPr99c+Q2+HS0-smozeBlisSAA */
    createMachine( {
        predictableActionArguments: true,
        tsTypes: {} as import( "./machines.typegen" ).Typegen1,
        id: 'dataSelection',
        initial: 'selection',
        states: {
            selection: {
                states: {
                    watchlistsForm: {},
                    filteringForm: {},
                    containersForm: {},
                },

                on: {
                    SELECT_CONTAINERS: '.containersForm',
                    SELECT_WATCHLISTS: '.watchlistsForm',
                    FILTER_ASSETS: '.filteringForm',
                },
            },
        },
    } );

export const machineTestHandleData =
    /** @xstate-layout N4IgpgJg5mDOIC5QAsCGA7CAbMBBWsAlulACKoAuqAdIdmAMQDKuAagKID6puAKrgG0ADAF1EoAA4B7IhUJT04kAA9EARgBs1AOwAOAKwBONbu0a1a-UKH7tAGhABPRAFo1AJgDM1DdoAshsZ+2kLuhu7ufgC+MQ7oUhBwSmiYOPhEJORUStKy8opIKq6eatTuan5Cuh6euroBhn6eDs4ILp7lPn7lfiae2pr6GtFRDin06cRklDR0ODkyhHIKSqoIZtRCJe76La5e3oa+ap4atZ42GsOxIONpBFNZNLCoAG6QC3krhWte1AaGfq7JyITzeS7ufy9SoaHYxGJAA */
    createMachine(
        {
            predictableActionArguments: true,
            tsTypes: {} as import( "./machines.typegen" ).Typegen2,
            id: 'handleAssingData',
            initial: 'idle',
            schema: {
                context: {} as {
                    data: string;
                },
                events: {} as { type: 'SAVE_DATA'; text: 'data from parent component' },
            },
            context: {
                data: 'initial data',
            },
            states: {
                idle: {
                    on: {
                        SAVE_DATA: {
                            target: 'saved',
                            actions: 'saveData',
                        },
                    },
                },
                saved: {},
            },
        },
        {
            actions: {
                saveData: assign( {
                    data: ( _, event ) => event.text,
                } ),
            },
        },
    );

// We can start and share the machine here
export const testHandleDataService = interpret( machineTestHandleData );
testHandleDataService.start();

export type TestHandleDataState = StateFrom<typeof machineTestHandleData>;