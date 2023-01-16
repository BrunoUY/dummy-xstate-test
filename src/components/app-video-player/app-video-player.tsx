import { Element, Component, State, h, Watch } from '@stencil/core';
import { serviceVideoPlayer, T_MachineVideoPlayer  } from "../../machines/videoPlayer";

@Component({
    tag: 'app-video-player',
    styleUrl: 'app-video-player.scss'
})
export class AppVideoPlayer {

    @State() state_State: T_MachineVideoPlayer;
    @Element() element_el: HTMLElement;

    componentWillLoad () {
        
        serviceVideoPlayer.subscribe( state => {
            this.state_State = state;
            console.group( 'machine.subscribe()' );
            console.log(`state: ${ JSON.stringify( this.state_State.value ) }`)
            console.log( `context: ${ JSON.stringify( this.state_State.context ) }` );
            console.log( `actions: ${ JSON.stringify( this.state_State.actions ) }` );
            console.groupEnd();
        } );

        //serviceVideoPlayer.send( 'LOADED' );
    }
    
    componentDidLoad () {
        this._checkButtonStatus()
        console.log( serviceVideoPlayer.initialState );
        this.element_el.querySelector( '#scrubber' ).setAttribute( 'max', `${ this.state_State.context.duration }` );
        (this.element_el.querySelector( '#scrubber' ) as HTMLInputElement).value = `${ this.state_State.context.elapsed }`;
    }

    componentDidRender () {
        console.log( `state: ${this.state_State.value}` );
    }
    
    @Watch( 'state_State' )
    watchHandler_state_State () {
        if( this.state_State.matches( "player.loading" ) ) {
            console.log( 'watchHandler_state_State' );
            serviceVideoPlayer.send( 'LOADED', {
                data: {
                    title: 'Video Title',
                    artist: 'Video Artist',
                    duration: 100,
                }
            } );
        }
    }


    onClick (p_event: string) {
        serviceVideoPlayer.send( p_event );
        this._checkButtonStatus();
    }
     
    _checkButtonStatus () {
        ( this.element_el.querySelector( '.playing' ) as HTMLElement ).hidden = !this.state_State.matches( 'player.ready.playing' );
        ( this.element_el.querySelector( '.paused' ) as HTMLElement ).hidden = !this.state_State.matches( 'player.ready.paused' );
    }
    
    render() {
        return (
            <div>
                <ion-tem>
                    <ion-list>
                        <ion-item>
                    <ion-label>{ this.state_State.context.title }</ion-label>
                        </ion-item>
                    </ion-list>
                    <ion-item>
                        <ion-label>{ this.state_State.context.artist }</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>{ this.state_State.context.duration }</ion-label>
                    </ion-item>
                    <ion-item>
                        <input type="range" id="scrubber" min="0" max="0" />
                    </ion-item>
                </ion-tem>

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
                    onClick={ () => this.onClick( 'VOLUME.TOGGLE' ) }
                ></ion-icon>
                
            </div>
        );
    }
}
