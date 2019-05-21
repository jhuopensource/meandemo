import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get('/');
  }

  async getParagraphText() {
    return element(by.css('h1')).getText();
  }
}