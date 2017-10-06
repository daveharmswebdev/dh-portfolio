import { DhPortfolioPage } from './app.po';

describe('dh-portfolio App', () => {
  let page: DhPortfolioPage;

  beforeEach(() => {
    page = new DhPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to dh!');
  });
});
