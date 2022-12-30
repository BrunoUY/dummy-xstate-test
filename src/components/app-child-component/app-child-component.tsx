import { Component, h, State } from '@stencil/core';
import { testHandleDataService, TestHandleDataState } from '../../machines/machines';

@Component( {
    tag: 'app-child-component',
    styleUrl: 'app-child-component.css',
} )
export class AppChildComponent {
    @State() state_machineTestHandleData: TestHandleDataState;

    componentWillLoad () {
        testHandleDataService.subscribe( state => {
            this.state_machineTestHandleData = state;
        } );
    }
    componentDidRender () {
        console.log( this.state_machineTestHandleData.context );
    }

    render () {
        if ( this.state_machineTestHandleData.matches( 'saved' ) )
            return (
                <div>
                    data from:
                    <p>{ this.state_machineTestHandleData.context.data }</p>
                </div>
            );
        else return <div />;
    }
}