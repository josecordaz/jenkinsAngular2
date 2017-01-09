import { JenkinsAngular2Page } from './app.po';

describe('jenkins-angular2 App', function() {
  let page: JenkinsAngular2Page;

  beforeEach(() => {
    page = new JenkinsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
