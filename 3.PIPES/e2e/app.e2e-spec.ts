import { PIPESPage } from './app.po';

describe('pipes App', () => {
  let page: PIPESPage;

  beforeEach(() => {
    page = new PIPESPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
