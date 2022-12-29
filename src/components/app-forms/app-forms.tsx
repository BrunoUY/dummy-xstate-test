import { Element, Component, State, h } from '@stencil/core';
import { machineDataSelection } from '../../machines/machines'
import { interpret } from 'xstate';


@Component({
    tag: 'app-forms',
    styleUrl: 'app-forms.css'
})
export class AppForms {

    private _machineDataSelectionService = interpret( machineDataSelection );
    @State() state_machineDataSelection = machineDataSelection.initialState;
    @Element() el: HTMLElement;

    async componentWillLoad () {

        //@ts-ignore
        this._machineDataSelectionService.start();
        this._machineDataSelectionService.subscribe( state => {
            this.state_machineDataSelection = state;
        } );

    }

    componentDidRender() {
        console.log(this.state_machineDataSelection.value);
    }


    handleButtonClick = () => {
        const _ionSelectValue = ( this.el.querySelector( '.select-option ion-select' ) as HTMLSelectElement ).value;
        console.log( _ionSelectValue );
        // set always SELECTION first, so it could later send the value of _ionSelectValue
        // if not, the machine it will not work, check the machine configuration
        this._machineDataSelectionService.send( 'SELECTION' );
        this._machineDataSelectionService.send( _ionSelectValue );
    }

    async _onClickSelectAssets () {

        const _optionValue = ( this.el.querySelector( '.select-option ion-select' ) as HTMLIonSelectElement ).value;

        if ( _optionValue === 'SELECT_CONTAINERS' ) {
            this._machineDataSelectionService.send( "SELECT_CONTAINERS" );
        }


        // decide what to pass if there is a "watchlists only" selection or filter assets selection
        if ( _optionValue === 'SELECT_WATCHLISTS' ) {
            this._machineDataSelectionService.send( "SELECT_WATCHLISTS" );
        }


        // decide what to pass if the selection are only assets
        if ( _optionValue === 'FILTER_ASSETS' ) {
            this._machineDataSelectionService.send( "FILTER_ASSETS" );
        }
    }

    render() {
        return (
            <ion-content scrollEvents={ true }>

                <div class="container">
                    <div>

                        { this.state_machineDataSelection.matches( "selection" ) && (

                            <div>
                                <ion-item class="select-option">
                                    <ion-label>Select Option</ion-label>

                                    <ion-select>
                                        <ion-select-option value="SELECT_CONTAINERS">Select Containers</ion-select-option>
                                        <ion-select-option value="SELECT_WATCHLISTS">Select Watchlists</ion-select-option>
                                        <ion-select-option value="FILTER_ASSETS">Filter Assets</ion-select-option>
                                    </ion-select>
                                    <ion-button onClick={ () => this.handleButtonClick() }>Send Value</ion-button>

                                </ion-item>


                            </div>
                        ) }
                    </div>

                    <div>
                        { this.state_machineDataSelection.matches( "selection.containersForm" ) && (
                            // Render form for selecting containers
                            <div class="selection select-watchlists-container">
                                <div>
                                    Filter Watchlists Container
                                </div>
                                <ion-item class="select--watchlists-container">
                                    <ion-label>Watchlist Containers</ion-label>
                                    <ion-select multiple={ true } interface='popover'>
                                        <ion-select-option>option 1</ion-select-option>
                                        <ion-select-option>option 2</ion-select-option>
                                    </ion-select>
                                </ion-item>
                                <div>
                                    <ion-button
                                        onClick={ () => this._onClickSelectAssets() }
                                    >Select Assets</ion-button>
                                </div>

                            </div>
                        ) }


                        { this.state_machineDataSelection.matches( "selection.watchlistsForm" ) && (
                            // Render form for selecting watchlists
                            <div class="selection select-watchlists-only">
                                <div>
                                    Filter Watchlists Only
                                </div>

                                <ion-item class="select--watchlists-only">
                                    <ion-label>Watchlists</ion-label>
                                    <ion-select multiple={ true } interface='popover'>
                                            <ion-select-option>option 1</ion-select-option>
                                            <ion-select-option>option 2</ion-select-option>
                                    </ion-select>
                                </ion-item>
                                <div>
                                    <ion-button
                                        onClick={ () => this._onClickSelectAssets() }
                                    >Select Assets</ion-button>
                                </div>
                            </div>
                        ) }


                        { this.state_machineDataSelection.matches( "selection.filteringForm" ) && (
                            // Render form for filtering assets
                            <div class="selection select-assets">
                                <div>
                                    Filter Assets
                                </div>
                                <div>
                                    <ion-item class="select--asset-type">
                                        <ion-label>Asset Type</ion-label>
                                        <ion-select multiple={ true } interface='popover'>
                                            <ion-select-option>option 1</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                    <ion-item class="select--asset-broker">
                                        <ion-label>Broker</ion-label>
                                        <ion-select multiple={ true } interface='popover'>
                                            <ion-select-option>option 1</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                    <ion-item class="select--asset-exchange">
                                        <ion-label>Exchange</ion-label>
                                        <ion-select multiple={ true } interface='popover'>
                                            <ion-select-option>option 1</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                </div>
                                <div>
                                    <ion-button
                                        onClick={ () => this._onClickSelectAssets() }
                                    >Select Assets</ion-button>
                                </div>
                            </div>
                        ) }
                    </div>

                </div>

                <div class="grid-container"></div>
            </ion-content>

        );
    }
}
