import { browser, by, element, protractor } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get('/');
  }

  async getParagraphText() {
    return element(by.css('h1')).getText();
  }


  async createEntry() {
    const EC = protractor.ExpectedConditions;
    await browser.wait(EC.presenceOf(element(by.id('addEntryLink'))), 5000, 'addEntryLink taking too long to appear in the DOM');
    element(by.id('addEntryLink')).click();
    await browser.wait(EC.presenceOf(element(by.css('input[formControlName=URL]'))), 5000, 'Element taking too long to appear in the DOM');
    await element(by.css('input[formControlName=URL]')).sendKeys('https://github.com/jhuopensource/meandemo');
    await element(by.css('input[formControlName=title]')).sendKeys('MEAN Demo');
    await element(by.css('input[formControlName=author]')).sendKeys('Mike Sellers and Ali Soylu');
    await element(by.css('textarea[formControlName=description]')).sendKeys('One MEAN CRUD on Docker Demo App.');
    await element(by.id('save')).click();
    return;
  }

  async getEntryTitle() {
    return element(by.css('h2')).getText();
  }

  async getEntryDescription() {
    return element(by.css('h3')).getText();
  }

  async deleteEntry() {
    await element(by.id('delete')).click();
  }

  async editEntry(newTitle: string, newDescription: string) {
    await element(by.id('edit')).click();
    await element(by.css('input[formControlName=title]')).clear();
    await element(by.css('input[formControlName=title]')).sendKeys(newTitle);
    await element(by.css('textarea[formControlName=description]')).clear();
    await element(by.css('textarea[formControlName=description]')).sendKeys(newDescription);
    await element(by.id('save')).click();
    return;
  }
}
