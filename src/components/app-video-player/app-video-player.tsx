import { Element, Component, State, h, Watch } from '@stencil/core';
import { serviceMachineVideoPlayer, T_MachineVideoPlayerState, T_ArtistPayload } from "../../machines/machines";


@Component({
    tag: 'app-video-player',
    styleUrl: 'app-video-player.scss'
})
export class AppVideoPlayer {

    @State() state_State: T_MachineVideoPlayerState;
    @Element() element_el: HTMLElement;

    componentWillLoad () {
        serviceMachineVideoPlayer.subscribe( state => {


            this.state_State = state;
            console.group( 'machine.subscribe()' );
            console.log( `context: ${ JSON.stringify(this.state_State.context) }` );
            console.groupEnd();
        } );

        serviceMachineVideoPlayer.send( 'LOADED' );
    }
    
    componentDidLoad () {
        this._checkButtonStatus()
    }

    componentDidRender () {
        console.log( `state: ${this.state_State.value}` );
    }
    
    @Watch( 'state_State' )
    watchHandler_state_State () {
        if( this.state_State.matches( "loading" ) ) {
            console.log( 'watchHandler_state_State' );
            serviceMachineVideoPlayer.send( 'LOADED', {
                type: 'LOADED',
                data: {
                    title: 'Video Title',
                    artist: 'Video Artist',
                    duration: 100,
                }
            } );
        }
    }


    onClick (p_event: string) {
        serviceMachineVideoPlayer.send( p_event );
        this._checkButtonStatus();
    }
     
    _checkButtonStatus () {
        ( this.element_el.querySelector( '.playing' ) as HTMLElement ).hidden = !this.state_State.matches( 'playing' );
        ( this.element_el.querySelector( '.paused' ) as HTMLElement ).hidden = !this.state_State.matches( 'paused' );
    }
    
    render() {
        return (
            <div>
                <ion-icon
                    name="thumbs-up-outline"
                    onClick={ () => this.onClick( 'LIKE' ) }
                ></ion-icon>

                <ion-icon
                    name="thumbs-down-outline"
                    onClick={ () => this.onClick( "DISLIKE" ) }
                ></ion-icon>
                
                <ion-icon
                    name="play-skip-back"
                    onClick={ () => this.onClick( 'SKIP' ) }
                ></ion-icon>
                
                <ion-icon
                    name="pause"
                    class="playing"
                    onClick={ () => this.onClick( 'PAUSE' ) }
                    ></ion-icon>


                <ion-icon
                    name="play"
                    class="paused"
                    onClick={ () => this.onClick( 'PLAY' ) }
                ></ion-icon>
                
                <ion-icon
                    name="play-skip-forward"
                    onClick={ () => this.onClick( 'SKIP' ) }
                ></ion-icon>

                <ion-icon
                    name="volume-high"
                    onClick={ () => this.onClick( 'VOLUME' ) }
                ></ion-icon>
                
            </div>
        );
    }
}
