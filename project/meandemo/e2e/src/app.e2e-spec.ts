import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('meandemo App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
  });

  it('should display the title welcome message', async () => {
    expect(await page.getParagraphText()).toEqual('One MEAN CRUD on Docker Demo');
  });

  it('should create an entry', async () => {
    await page.createEntry();
    expect(await page.getEntryTitle()).toEqual('MEAN Demo');
  });

  it('should edit an entry', async () => {
    const newTitle = 'Edited Demo';
    const newDescription = 'CI/CD Pipeline Integrated.';
    await page.createEntry();
    await page.editEntry(newTitle, newDescription);
    expect(await page.getEntryTitle()).toEqual(newTitle);
    expect(await page.getEntryDescription()).toEqual(newDescription);
  });

  it('should delete an entry', async () => {
    await page.createEntry();
    await page.deleteEntry();
  });

});
