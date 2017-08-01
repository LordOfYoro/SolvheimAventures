import { SolvheimAppPage } from './app.po';

describe('solvheim-app App', () => {
  let page: SolvheimAppPage;

  beforeEach(() => {
    page = new SolvheimAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
