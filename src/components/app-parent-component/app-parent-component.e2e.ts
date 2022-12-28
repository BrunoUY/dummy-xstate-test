import { newE2EPage } from '@stencil/core/testing';

describe('app-parent-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<app-parent-component></app-parent-component>');
    const element = await page.find('app-parent-component');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
