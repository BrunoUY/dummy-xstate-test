import { assign, createMachine, StateFrom } from 'xstate';
import { interpret } from 'xstate-ninja'
// import { raise } from 'xstate/lib/actions';

// function createFakeAudio ( duration ) {
//     let currentTime: any = 0;
//     let interval;
//     const observers = new Set();

//     const notify = () => {
//         observers.forEach( ( o ) => o() );
//     };

//     return {
//         addEventListener: ( event, fn ) => {
//             observers.add( fn );
//             fn();
//         },
//         play: () => {
//             interval = setInterval( () => {
//                 currentTime++;
//                 notify();
//             }, 1000 );
//         },
//         pause: () => {
//             clearInterval( interval );
//             notify();
//         },
//         get duration () {
//             return duration;
//         },
//         get currentTime () {
//             return currentTime;
//         },
//     };
// }

// // callback audio
// const invokeAudio = ( ctx: { duration: number } ) => ( sendBack, receive ) => {
//     const audio = createFakeAudio( ctx.duration );

//     audio.addEventListener( 'timeupdate', () => {
//         sendBack( {
//             type: 'AUDIO.TIME',
//             duration: parseInt( audio.duration ),
//             currentTime: parseInt( audio.currentTime ),
//         } );
//     } );

//     receive( ( event ) => {
//         switch ( event.type ) {
//             case 'PLAY':
//                 audio.play();
//                 break;
//             case 'PAUSE':
//                 audio.pause();
//                 break;
//             default:
//                 break;
//         }
//     } );
// };

// let songCounter = 0;
// function loadSong () {
//     return new Promise( ( res, rej ) => {
//         setTimeout( () => {
//             res( {
//                 title: `Random Song #${ songCounter++ }`,
//                 artist: `Random Group`,
//                 duration: Math.floor( Math.random() * 100 ),
//             } );
//         }, 1000 );
//     } );
// }


// /** @xstate-layout N4IgpgJg5mDOIC5QDcCWEwHsAKAbAhgJ5gBOAdAA4HEkDEEmAdmGbAC75stoY7WmV+JANoAGALqJQFTLFRtUTKSAAeiAIzqA7GQCcAZgBMh3eoBsu46LMAWfQBoQhRDYCsADjKuzh1-veu6jbu6rpmZgC+EY48WHhEAlQJdADKANIAkthikkggMnIKSnlqCIY2omSG7rrWZq7ePq6iWo7OCPreeqJune7uZvqDrlEx6HFCgsm0ADIZaQCiOcoF8oqMyqWDZlWuWiHuovrq7kZmbRrNZGbuWqK6YYbh1cGjILF8yVM0tAAiGSk5otlnlVkUNiVEIZ1IYqrobFozFoGkEtOoPBcEOp9DobGZRK4TD4bgcRtF3uNPjRvqRaABBACq-wA8mQACoZACySwkK1ka2KoFKNmhZB6JN07mM6K08Mx6MqNzuD2JPncIreH3i1KSPwZADkgTzctJ+eDNoh1eovPUFT5LFocfKrkr7o9nur3JrKdrEpNcJh8BBUIwoLNmXTfgtfiDTYV1haOvsyEYQvohq4RQZXJi3DprL4EbURciCd7eL7yLqBCQwEHCLRY-kzQnIVjDJVbjYHpKjB2QoZMUj9HpQsdRIddGiBuWJl9q+Ra-XKPgAK6wSC0bAzOkATSbYNbQstLTIQWs+kldlCrScLhCVRq938xnhokM+lnVL9XyXEEI3whmG2CMikxp8vGgqqIgso7AEBjqloSHeD0mJ+Na+ymKEU4nJeZJjBWkzIJguCrgAtmAtAAGrMjMDLcgeLZQaUpw2GQNSIYSpzqjmd4ILUnamEYL6ZpeNhfpWZDEaRFFkKujBkauXAQNRtH0Qs7LMgA4lpMzgaCTEQseHQPm42LVJKsrmLomKSrCRxuCK0LVEEkTklqREkeRLCKcpql0dymk6XpjGQUZ0EmdaZmppZpgWLZPRkHcmghA8mYGLoUTkowmAYPAeQeckEECuFpSigYr7WVYtj6DYua6Ho+JcZmRZ+OEEmTAuxXmm2Fh6H2cWWB2NWYk8DUVL0wQ9IYSFHB187+oGwaht1R4Rb41pHDCwSZshPi5rKSU1OoojWCc5T7G5BFzjqkx-u0cYlYmDQ6E0753NC5ghJiOKuF4l4TjUpgDN44nuT6nV3XW-4ruukCrcxiC1A1ojouEpzaCq7i5jU7FaOUzRPEEnR4vNt2-tDAG6kBCOlYgTXXL473vpoNzqLmgxigDWHdkYqNkz+1IAGYhqgsAABbwwZYWJper0VD41iIvCTznHxSKVDYY5yztSGfuDhFfNJ3m04mHYNT4fNPHiDQzQ4fEhDoHYwidAz4vcWgC+QxuyfJvlS49PXGb4r0fh21v1ISt7tKYlT7GZYQDFOaJe1JXmyf7ECm22ewjsltVDNioQIrZ2KPm4ewnCd-NZUAA */
// export const machineVideoPlayer =
    
// /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgAcAbdATzACcBiCAe0JNgBd0OwS0s8hUpRr0A2gAYAuolBlmsXB1ytZIAB6IArAHYAHCQDMAJgkBGAGx7DOgCyGttnQBoQ1bcdskdATjO+zPX8bQwBfUNd+HAJicipaRgBlAGkASQAFSRkkEHlFZVUczQQtCR8SLSCJWz1SrS0LQzNXdwQnctrK02s-PWqdcMiMaKE40UYAGVTkgFEstTylFXw1Yv9jCp1jbdsy+rNDRpbEbZ0SPQtbf30LU19rQZAowViRBIYAVQA5Kdn5nMWBRWRUQhiaRk8gWMTVstws-mOCFO50ulgs+ksfTCESewxewni9AYABFUolfnNpAsFEtCqBilpjFoSBILD4yv4-L5bojjGYvBcuWZAj5Ko5jI9njECeMGBSSAAVADyAHEVRNKdk5DSgatQRszGU+U4dIdGmZjBZEYbShUJA4JKYHI0fAMcVLRm8ifLlWqNWIzFrcjrlnqEIYJGdXb5jKaJOKEW5EDaJHaHU6GoZRZK8dKxu8AIIfUlKxWpACymup+VDIIQjVTeh0lWs1V0ppcSYQKbTpQzLrdQwEea9dBIFGY6AgBCgTFYvAIADdmABrXiwVhQCaTiDiKkAkN0jSIAC0hpZhzMPh2-PsB2MiJqqbBhy0EZ8tlsTL0OeHnsJY50GAU7UAw-zajWR7FDoBxGDC+iMuiuxWl2pqGCQTJXjU-J3OYv4jK8AEkEBIHkOgACusCQAw6QTAWACa4HBpBwL0qCrIkOiWg+H4aLNjonatGyZz8cYPgWOYjiOtiQ4ETKCTEcBEDUPmM40UWiRVgeLFhhGZgVGCOiNA6za2PUiIIUYDT1F+TRWF++H4iQy4UORqBgAwABqSoTB8lZMYCtZsfWJgkGYjjhY4Wy2K6PjWsYQScYEFiVA6DQWBYjl5i5bm8OR+CoORPAQF5Pl+TMiqquqWkQbSrHHki9Qsgleifno7L8Vo1qGGZ5wxZYZROPyJhZaMOXuSQhXFaVvmVpVfo1cxdVhkyzKOnorU1B1uiOPFookFcJg9TsFyOuEOL4Mwu7wDkHrENWy11meHH2vC16Qp+TSGPFFgkD4PWWE64n-Wyo2EeMD26k9lQXm9N6fQciIOucBz2Fmmboj+7q5v+4zjjuM6Q0FDVMr96ISaaEm3BInSPoYBh2K117iX0ugOGD8n0IpIFE1ByYOBUqJfRIkaMnFXYNBsdjVGy7VgtsMm4n+4MKSRylkZRkC8-VaztX9ItZh+3H8vCgmIAEB3+JUdh8nosaZdjyuc4BSkqW8hPaY9wWHRCuyRh+sYOIcFlsoL9rbI0zZNBKjtyfmXNqypeCcNrYaBOhDSHQcIvNmJiIXMyGUZSLHUxljslOaOJAAGYELgsDYFrntQ8FzapmJ9hxjLWwWX4SVW5+Oisr4Pgc85zCue5qd1q1YXCYyNimrUnjxZGB36NspR2CzDsV9lE+5SQ+VTU3tUtw195z66C8CfTjK2N15jr1+SHhQbthj+NvAnxA0-e5+nFWpaCvCLMog0UKtGzuhV0L87Bv3tB-c6QA */
// createMachine( {
//         predictableActionArguments: true,
//         //tsTypes: {},
//         initial: 'loading',
//         context: {
//             title: undefined,
//             artist: undefined,
//             duration: 0,
//             elapsed: 0,
//             likeStatus: 'unliked', // or 'liked' or 'disliked'
//             volume: 5,
//         },
//         type: 'parallel',
//         states: {
//             player: {
//                 initial: 'loading',
//                 states: {
//                     loading: {
//                         tags: [ 'loading' ],
//                         id: 'loading',
//                         invoke: {
//                             id: 'songLoader',
//                             src: loadSong,
//                             onDone: {
//                                 actions: 'assignSongData',
//                                 target: 'ready.hist',
//                             },
//                         },
//                     },
//                     ready: {
//                         invoke: {
//                             id: 'audio',
//                             src: invokeAudio,
//                         },
//                         initial: 'paused',
//                         states: {
//                             paused: {
//                                 on: {
//                                     PLAY: { target: 'playing' },
//                                 },
//                             },
//                             playing: {
//                                 entry: 'playAudio',
//                                 exit: 'pauseAudio',
//                                 on: {
//                                     PAUSE: { target: 'paused' },
//                                 },
//                             },
//                             hist: {
//                                 type: 'history',
//                             },
//                         },
//                         always: {
//                             cond: ( ctx ) => ctx.elapsed >=ac ctx.duration,
//                             target: 'finished',
//                         },
//                     },
//                     finished: {
//                         type: 'final',
//                     },
//                 },
//                 onDone: {
//                     target: '.loading',
//                 },
//                 on: {
//                     SKIP: {
//                         target: '.loading',
//                     },
//                     LIKE: {
//                         actions: 'likeSong',
//                     },
//                     UNLIKE: {
//                         actions: 'unlikeSong',
//                     },
//                     DISLIKE: {
//                         actions: [ 'dislikeSong', raise( 'SKIP' ) ],
//                     },
//                     'LIKE.TOGGLE': [
//                         {
//                             cond: ( ctx ) => ctx.likeStatus === 'liked',
//                             actions: raise( 'UNLIKE' ),
//                         },
//                         {
//                             cond: ( ctx ) => ctx.likeStatus === 'unliked',
//                             actions: raise( 'LIKE' ),
//                         },
//                     ],
//                     'AUDIO.TIME': {
//                         actions: 'assignTime',
//                     },
//                 },
//             },
//             volume: {
//                 initial: 'unmuted',
//                 states: {
//                     unmuted: {
//                         on: {
//                             'VOLUME.TOGGLE': 'muted',
//                         },
//                     },
//                     muted: {
//                         on: {
//                             'VOLUME.TOGGLE': 'unmuted',
//                         },
//                     },
//                 },
//                 on: {
//                     VOLUME: {
//                         cond: 'volumeWithinRange',
//                         actions: 'assignVolume',
//                     },
//                 },
//             },
//         },
//     } ).withConfig( {
//         actions: {
//             assignSongData: assign( {
//                 title: ( _, e ) => e.data.title,
//                 artist: ( _, e ) => e.data.artist,
//                 duration: ( ctx, e ) => e.data.duration,
//                 elapsed: 0,
//                 likeStatus: 'unliked',
//             } ),
//             likeSong: assign( {
//                 likeStatus: 'liked',
//             } ),
//             unlikeSong: assign( {
//                 likeStatus: 'unliked',
//             } ),
//             dislikeSong: assign( {
//                 likeStatus: 'disliked',
//             } ),
//             assignVolume: assign( {
//                 volume: ( _, e ) => e.level,
//             } ),
//             assignTime: assign( {
//                 elapsed: ( _, e ) => e.currentTime,
//             } ),
//             skipSong: () => {
//                 console.log( 'Skipping song' );
//             },
//             playAudio: send( { type: 'PLAY' }, { to: 'audio' } ),
//             pauseAudio: send( { type: 'PAUSE' }, { to: 'audio' } ),
//         },
//         guards: {
//             volumeWithinRange: ( _, e ) => {
//                 return e.level <= 10 && e.level >= 0;
//             },
//         },
//     } );

// export const serviceMachineVideoPlayer = interpret( machineVideoPlayer, { devTools: true } ).start();
// export type T_MachineVideoPlayerState = StateFrom<typeof machineVideoPlayer>;

// export type T_ArtistPayload = {
//     data: {
//         title: string;
//         artist: string;
//         duration: number;
//         elapsed: number;
//         currentTime: number;
//     }
// }



/********** */



export const machineDataSelection =
    /** @xstate-layout N4IgpgJg5mDOIC5QQIYBcUGUwBswGM0BLAewDsA6WXA48gYgDEBJAGQBUBRAJQH0BBTJk7tMAbQAMAXUSgADiVhE6ZWSAAeiAGwSKAJgCcRgBwB2CcYAsAVj2W9egDQgAnogC01yxWN7jARntTAGYJAy1Qg0sAX2jnVAxsPEJSSmpklXphVk4AYXZeAHV+dlyACVZmTFFJGSQQBSUVNU0EHX0jAzMLGzsHZzcEd39-YIpQ4MCQyyjTf1MYuJAErBoU8io1zOy8gtyAeQA5dn5mQ55xaTVG5VSW7V1DE3MrW3snVw95-wpTUwDrP5wqYuhJgoslmQSBA4GoVklaHd6jdmvVWu5gtZfhIcf5DP4vKZrP8Bh5waYKHiAlo-KYtEDjMEtLF4uhVhlUpsOeRropbjy0Yg8R1nj03nogaShnprAYKDZJsT3hYDEyWcs2Qj1mktpyAO7ofAACxwRFgaFgjBIACcALa8ppI0CtPzePTBImBYLGAx4gwSaxS4bC3z+H1WAzWCT+CL+dXw3UbdKIjYAMyIODQYGtRDIUCtdod-NUgoQrv0HsBlm9vsMAaDXnGli0Pu9dKjdK0i1ZiUTOu5lHw5Awuezlpt9uRfNRzsQ5fdnurPr99c+Q2+HS0-smozeBlisSAA */
    createMachine( {
        predictableActionArguments: true,
        //tsTypes: {} as import( "./machines.typegen" ).Typegen1,
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
            //tsTypes: {} as import( "./machines.typegen" ).Typegen2,
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


