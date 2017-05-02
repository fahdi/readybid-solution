import { ReadybidSolutionPage } from './app.po';

describe('readybid-solution App', function() {
  let page: ReadybidSolutionPage;

  beforeEach(() => {
    page = new ReadybidSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
