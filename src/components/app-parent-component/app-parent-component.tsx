import { Component, State, h } from '@stencil/core';
import { machineTestHandleData } from "../../machines/machines";
import { interpret } from 'xstate';


@Component({
    tag: 'app-parent-component',
    styleUrl: 'app-parent-component.css'
})
export class AppParentComponent {

    private _machineTestHandleData = interpret( machineTestHandleData );
    @State() state_machineTestHandleData = machineTestHandleData.initialState;

    componentWillLoad () {
        this._machineTestHandleData.start();
        this._machineTestHandleData.subscribe( ( state ) => {
            this.state_machineTestHandleData = state;
        } );
    }

    componentDidRender () {
        console.group( 'componentDidRender' );
        console.log( this.state_machineTestHandleData.value );
        console.log( this.state_machineTestHandleData.context );
        console.groupEnd();
    }

    private _sendDataToMachine = () => {
        console.log( 'save_data to machine' );
        this._machineTestHandleData.send( "SAVE_DATA", { text: 'data from parent component' });
        //console.log( this.state_machineTestHandleData.value, this._machineTestHandleData );
    }


    render() {
        return (
            <div>
                <ion-button onClick={ () => this._sendDataToMachine() }>Send data to machine</ion-button>
                { this.state_machineTestHandleData.value }
                <app-child-component></app-child-component>
            </div>
        );
    }
}
