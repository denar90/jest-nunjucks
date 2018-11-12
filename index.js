module.exports = {
  process(src, pathToFile, config) {
    const nunjucksConfig = config.globals.nunjucks || {};
    return `
            const njk = require('nunjucks');
            const env = new njk.Environment(new njk.FileSystemLoader(\`${config.rootDir}\`), JSON.parse(\`${JSON.stringify(nunjucksConfig)}\`));
            module.exports = njk.compile(\`${src}\`, env);
        `;
  },
};
