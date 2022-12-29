import { createMachine, assign } from "xstate";

export const machineDataSelection = 
/** @xstate-layout N4IgpgJg5mDOIC5QQIYBcUGUwBswGM0BLAewDsA6WXA48gYgDEBJAGQBUBRAJQH0BBTJk7tMAbQAMAXUSgADiVhE6ZWSAAeiAGwSKAJgCcRgBwB2CcYAsAVj2W9egDQgAnogC01yxWN7jARntTAGYJAy1Qg0sAX2jnVAxsPEJSSmpklXphVk4AYXZeAHV+dlyACVZmTFFJGSQQBSUVNU0EHX0jAzMLGzsHZzcEd39-YIpQ4MCQyyjTf1MYuJAErBoU8io1zOy8gtyAeQA5dn5mQ55xaTVG5VSW7V1DE3MrW3snVw95-wpTUwDrP5wqYuhJgoslmQSBA4GoVklaHd6jdmvVWu5gtZfhIcf5DP4vKZrP8Bh5waYKHiAlo-KYtEDjMEtLF4uhVhlUpsOeRropbjy0Yg8R1nj03nogaShnprAYKDZJsT3hYDEyWcs2Qj1mktpyAO7ofAACxwRFgaFgjBIACcALa8ppI0CtPzePTBImBYLGAx4gwSaxS4bC3z+H1WAzWCT+CL+dXw3UbdKIjYAMyIODQYGtRDIUCtdod-NUgoQrv0HsBlm9vsMAaDXnGli0Pu9dKjdK0i1ZiUTOu5lHw5Awuezlpt9uRfNRzsQ5fdnurPr99c+Q2+HS0-smozeBlisSAA */
    createMachine( {
        predictableActionArguments: true,
        tsTypes: {} as import("./machines.typegen").Typegen0,
        id: 'dataSelection',
        initial: 'selection',
        states: {
            selection: {
                states: {
                    watchlistsForm: {},
                    filteringForm: {},
                    containersForm: {}
                },

                on: {
                    SELECT_CONTAINERS: ".containersForm",
                    SELECT_WATCHLISTS: ".watchlistsForm",
                    FILTER_ASSETS: ".filteringForm"
                }
            }
        }
    } );

export const machineTestHandleData =
    
/** @xstate-layout N4IgpgJg5mDOIC5QAsCGA7CAbMBBWsAlulACKoAuqAdIdmAMQDKuAagKID6puAKrgG0ADAF1EoAA4B7IhUJT04kAA9EARgBs1AOwAOAKwBONbu0a1a-UKH7tAGhABPRAFo1AJgDM1DdoAshsZ+2kLuhu7ufgC+MQ7oUhBwSmiYOPhEJORUStKy8opIKq6eatTuan5Cuh6euroBhn6eDs4ILp7lPn7lfiae2pr6GtFRDin06cRklDR0ODkyhHIKSqoIZtRCJe76La5e3oa+ap4atZ42GsOxIONpBFNZNLCoAG6QC3krhWte1AaGfq7JyITzeS7ufy9SoaHYxGJAA */
createMachine( {
    predictableActionArguments: true,
    tsTypes: {} as import("./machines.typegen").Typegen1,
    id: "handleAssingData",
    initial: "idle",
    context: {
        data: {}
    },
    states: {
        idle: {
            on: {
                SAVE_DATA: {
                    target: "saved",
                    actions: assign( {
                        data: ( context, event ) => {

                            console.log(event, context);
                            return event;
                        }
                    } )

                }
            }
        },
        saved: {
        }
    }
} );