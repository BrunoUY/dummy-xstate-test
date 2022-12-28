import { newE2EPage } from '@stencil/core/testing';

describe('app-forms', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<app-forms></app-forms>');
    const element = await page.find('app-forms');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
