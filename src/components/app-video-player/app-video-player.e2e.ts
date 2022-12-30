import { newE2EPage } from '@stencil/core/testing';

describe('app-video-player', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<app-video-player></app-video-player>');
    const element = await page.find('app-video-player');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
