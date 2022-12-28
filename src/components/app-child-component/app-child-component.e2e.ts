import { newE2EPage } from '@stencil/core/testing';

describe('app-child-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<app-child-component></app-child-component>');
    const element = await page.find('app-child-component');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
