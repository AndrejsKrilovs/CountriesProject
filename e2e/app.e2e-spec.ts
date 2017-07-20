import { CountriesProjectPage } from './app.po';

describe('countries-project App', function() {
  let page: CountriesProjectPage;

  beforeEach(() => {
    page = new CountriesProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
