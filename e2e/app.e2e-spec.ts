import { NgFootballDataPage } from './app.po';

describe('ng-football-data App', function() {
  let page: NgFootballDataPage;

  beforeEach(() => {
    page = new NgFootballDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
