import { Component, h } from '@stencil/core';
import { machineTestHandleData } from "../../machines/machines";
import { interpret } from 'xstate';


@Component({
    tag: 'app-parent-component',
    styleUrl: 'app-parent-component.css'
})
export class AppParentComponent {

    private _machineTestHandleData = interpret( machineTestHandleData );

    private _sendDataToMachine = () => {
        console.log( 'save_data to machine' );
        this._machineTestHandleData.send( 'SAVE_DATA', {
            data: {
                prop1: 'value1',
                prop2: 'value2'
            }
        } );
        console.log( this._machineTestHandleData );
    }


    render() {
        return (
            <div>
                <ion-button onClick={ () => this._sendDataToMachine() }>Send data to machine</ion-button>
                
                <app-child-componen></app-child-componen>
            </div>
        );
    }
}
