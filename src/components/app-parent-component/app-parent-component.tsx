import { Component, h, State } from '@stencil/core';
import { testHandleDataService, TestHandleDataState } from '../../machines/machines';

@Component( {
    tag: 'app-parent-component',
    styleUrl: 'app-parent-component.css',
} )
export class AppParentComponent {
    @State() state_machineTestHandleData: TestHandleDataState;

    componentWillLoad () {
        testHandleDataService.subscribe( state => {
            this.state_machineTestHandleData = state;
        } );
    }

    private _sendDataToMachine = () => {
        testHandleDataService.send( { type: 'SAVE_DATA', text: 'data from parent component' } );
    };
    componentDidRender () {
        console.log( this.state_machineTestHandleData );
    }

    render () {
        return (
            <div>
                <ion-button onClick={ this._sendDataToMachine }>Send data to machine</ion-button>
                { this.state_machineTestHandleData.value }
                <app-child-component />
            </div>
        );
    }
}