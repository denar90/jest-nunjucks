const DEFAULT_CONFIG = {
  throwOnUndefined: true,
  trimBlocks: true
};

module.exports = {
  process(src, pathToFile, config) {
    return `
            const njk = require('nunjucks');
            const env = new njk.Environment(new njk.FileSystemLoader(\`${config.rootDir}\`), \`${DEFAULT_CONFIG}\`);
            module.exports = njk.compile(\`${src}\`, env);
        `;
  },
};
