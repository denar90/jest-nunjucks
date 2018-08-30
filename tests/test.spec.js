const template = require('./test.njk');

describe('Test', () => {
  it('Should compile template', () => {
    expect(template.render({ testString: 'test' })).toEqual('<div>test</div>');
  });
});
