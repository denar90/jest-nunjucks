module.exports = {
  process(src) {
    return `
            const njk = require('nunjucks');
            module.exports = njk.compile(\`${src}\`);
        `;
  }
};
