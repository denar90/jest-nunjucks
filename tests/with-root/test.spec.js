const template = require('./root-tmpl-dir/templates/template.njk');

describe('Jest-nunjucks with root set in config', () => {
  it('should compile template', () => {
    const renderedTemplate = template.render().trim();

    expect(renderedTemplate).toEqual('<h1>Template inside root dir</h1>\n<p>Template inside child dir</p>');
  });
});
