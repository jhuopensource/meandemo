import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
  });

  it('It should display the title welcome message.', async () => {
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual('One MEAN CRUD on Docker Demo');
  });

  it('It should allow form data entry.', async () => {
    await page.navigateTo();
    await page.createEntry();
    await page.editEntry();

  });

});