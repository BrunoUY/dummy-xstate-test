import { r as registerInstance, h, i as getElement } from './index-136245cb.js';
import { s as serviceMachineVideoPlayer } from './machines-80c6b46e.js';

const appVideoPlayerCss = "app-video-player{}app-video-player div{margin:2rem;display:flex;justify-content:center}app-video-player div ion-icon{margin-left:2rem}";

const AppVideoPlayer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.state_State = undefined;
  }
  componentWillLoad() {
    serviceMachineVideoPlayer.subscribe(state => {
      this.state_State = state;
      console.group('machine.subscribe()');
      console.log(`state: ${JSON.stringify(this.state_State.value)}`);
      console.log(`context: ${JSON.stringify(this.state_State.context)}`);
      console.log(`actions: ${JSON.stringify(this.state_State.actions)}`);
      console.groupEnd();
    });
    serviceMachineVideoPlayer.send('LOADED');
  }
  componentDidLoad() {
    this._checkButtonStatus();
    console.log(serviceMachineVideoPlayer.initialState);
    this.element_el.querySelector('#scrubber').setAttribute('max', `${this.state_State.context.duration}`);
    this.element_el.querySelector('#scrubber').value = `${this.state_State.context.elapsed}`;
  }
  componentDidRender() {
    console.log(`state: ${this.state_State.value}`);
  }
  watchHandler_state_State() {
    if (this.state_State.matches("player.loading")) {
      console.log('watchHandler_state_State');
      serviceMachineVideoPlayer.send('LOADED', {
        data: {
          title: 'Video Title',
          artist: 'Video Artist',
          duration: 100,
        }
      });
    }
  }
  onClick(p_event) {
    serviceMachineVideoPlayer.send(p_event);
    this._checkButtonStatus();
  }
  _checkButtonStatus() {
    this.element_el.querySelector('.playing').hidden = !this.state_State.matches('player.ready.playing');
    this.element_el.querySelector('.paused').hidden = !this.state_State.matches('player.ready.paused');
  }
  render() {
    return (h("div", null, h("ion-tem", null, h("ion-list", null, h("ion-item", null, h("ion-label", null, this.state_State.context.title))), h("ion-item", null, h("ion-label", null, this.state_State.context.artist)), h("ion-item", null, h("ion-label", null, this.state_State.context.duration)), h("ion-item", null, h("input", { type: "range", id: "scrubber", min: "0", max: "0" }))), h("ion-icon", { name: "thumbs-up-outline", onClick: () => this.onClick('LIKE') }), h("ion-icon", { name: "thumbs-down-outline", onClick: () => this.onClick("DISLIKE") }), h("ion-icon", { name: "play-skip-back", onClick: () => this.onClick('SKIP') }), h("ion-icon", { name: "pause", class: "playing", onClick: () => this.onClick('PAUSE') }), h("ion-icon", { name: "play", class: "paused", onClick: () => this.onClick('PLAY') }), h("ion-icon", { name: "play-skip-forward", onClick: () => this.onClick('SKIP') }), h("ion-icon", { name: "volume-high", onClick: () => this.onClick('VOLUME.TOGGLE') })));
  }
  get element_el() { return getElement(this); }
  static get watchers() { return {
    "state_State": ["watchHandler_state_State"]
  }; }
};
AppVideoPlayer.style = appVideoPlayerCss;

export { AppVideoPlayer as app_video_player };
