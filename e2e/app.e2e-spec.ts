import { WebMasterPage } from './app.po';

describe('web-master App', () => {
  let page: WebMasterPage;

  beforeEach(() => {
    page = new WebMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
