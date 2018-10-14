const template = require('./test.njk');
const template2 = require('./templates/template.njk');

describe('Test', () => {
  it('Should compile template1', () => {
    const renderedTemplate = template.render({ testString: 'test' }).trim();

    expect(renderedTemplate).toEqual('<div>test</div>  <p>Test macro</p>');
  });

  it('Should compile template2', () => {
    const renderedTemplate = template2.render({ testString: 'test2' }).trim();

    expect(renderedTemplate).toEqual('<div>test2</div>  <p>Test macro</p>');
  });
});
