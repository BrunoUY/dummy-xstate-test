import { Component, State, h } from '@stencil/core';
import { machineTestHandleData } from "../../machines/machines";
import { interpret } from 'xstate';


@Component({
    tag: 'app-child-component',
    styleUrl: 'app-child-component.css'
})
export class AppChildComponent {

    private _machineTestHandleData = interpret( machineTestHandleData );
    @State() state_machineTestHandleData = machineTestHandleData.initialState

    componentWillLoad() {
        this._machineTestHandleData.subscribe( ( state ) => {
            this.state_machineTestHandleData = state;
        } )
        this._machineTestHandleData.onTransition( ( state ) => {
            console.log( `Machine state changed: ${ state.value }` );
            console.log( state.context )
        } ); 
    }

    componentDidRender () {
        console.log( 'componentDidRender' );
        console.log( this.state_machineTestHandleData.value );
    }


    render() {
        return (
            <div>
                <p>{this.state_machineTestHandleData.context.data}!</p>
            </div>
        );
    }
}
