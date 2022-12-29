import { Component, h, State } from '@stencil/core';
import { testHandleDataService, TestHandleDataState } from '../../machines/machines';

@Component({
  tag: 'app-child-component',
  styleUrl: 'app-child-component.css',
})
export class AppChildComponent {
<<<<<<< Updated upstream
  @State() state_machineTestHandleData: TestHandleDataState;

  componentWillLoad() {
    testHandleDataService.subscribe(state => {
      this.state_machineTestHandleData = state;
    });
  }

  render() {
    if (this.state_machineTestHandleData.matches('saved'))
      return (
        <div>
          <p>{this.state_machineTestHandleData.context.data}</p>
        </div>
      );
    else return <div />;
  }
=======

    private _machineTestHandleData = interpret( machineTestHandleData );
    @State() state_machineTestHandleData = machineTestHandleData.initialState

    componentWillLoad () {
        this._machineTestHandleData.start();
        this._machineTestHandleData.subscribe( ( state ) => {
            this.state_machineTestHandleData = state;
        } );
        this._machineTestHandleData.onTransition( ( state ) => {
            console.log( `Machine state changed: ${ state.value }` );
        } );
    }

    componentDidRender () {
        console.group( 'componentDidRender' );
        console.log( this.state_machineTestHandleData.value );
        console.groupEnd();
    }


    render () {
        return (
            <div>
                { this.state_machineTestHandleData.matches( "saved" ) && (

                    <p>{ this.state_machineTestHandleData.context }</p>
                ) }
            </div>
        );
    }
>>>>>>> Stashed changes
}
