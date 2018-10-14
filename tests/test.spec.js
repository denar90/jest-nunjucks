const template = require('./test.njk');
const template2 = require('./templates/template.njk');

describe('Test', () => {
  it('Should compile templates', () => {
    const renderedTemplate = template.render({ testString: 'test' }).trim();

    expect(renderedTemplate).toEqual('<div>test</div>  <p>Test macro</p>');
  });

  it('Should compile template in child folders', () => {
    const renderedTemplate = template2.render({ testString: 'test2' }).trim();

    expect(renderedTemplate).toEqual('<div>test2</div>  <p>Test macro</p>');
  });
});
