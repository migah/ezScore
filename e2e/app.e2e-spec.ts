import { EzScorePage } from './app.po';

describe('ez-score App', () => {
  let page: EzScorePage;

  beforeEach(() => {
    page = new EzScorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
