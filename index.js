module.exports = {
  process(src, pathToFile) {

    let dir = pathToFile.split('\\');
    dir.pop();
    dir = dir.join('/');

    return `
            const njk = require('nunjucks');
            const env = new njk.Environment(new njk.FileSystemLoader('tests'), { throwOnUndefined: true, trimBlocks: true });
            module.exports = njk.compile(\`${src}\`, env);
        `;
  },
};
