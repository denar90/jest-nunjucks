const path = require('path');
module.exports = {
  /**
   *
   * @param {Object} src
   * @param {string} pathToFile
   * @param {Object} config
   * @param {string} config.rootDir
   * @param {Object} config.globals
   * @param {Object} config.globals.nunjucks
   * @param {Object} config.globals.nunjucks.config
   * @param {string} config.globals.nunjucks.root
   * @returns {string}
   */
  process(src, pathToFile, config) {
    const nunjucksConfig = config.globals.nunjucks && config.globals.nunjucks.config || {};
    const root = config.globals.nunjucks.root ? path.resolve(config.rootDir, config.globals.nunjucks.root) : config.rootDir;
    return `
            const njk = require('nunjucks');
            const env = new njk.Environment(new njk.FileSystemLoader(\`${root}\`), JSON.parse(\`${JSON.stringify(nunjucksConfig)}\`));
            module.exports = njk.compile(\`${src}\`, env);
        `;
  },
};
