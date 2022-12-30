import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          {/* <ion-route url="/app-forms" component="app-forms" /> */}
                <ion-route url="/" component="app-parent-component" />
                <ion-route url='/video-player' component='app-video-player'></ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
