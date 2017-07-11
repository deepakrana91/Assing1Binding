import { Assing1BindingPage } from './app.po';

describe('assing1-binding App', () => {
  let page: Assing1BindingPage;

  beforeEach(() => {
    page = new Assing1BindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
