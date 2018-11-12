[![Build Status](https://travis-ci.org/denar90/jest-nunjucks.svg?branch=master)](https://travis-ci.org/denar90/jest-nunjucks)

# jest-nunjucks

## Jest processor that compiles nunjucks templates

### Install 

`npm i jest-nunjucks --save-dev`

### Config example

Add to your config

```json
"jest": {
    "transform": {
        "^.+\\.njk$": "jest-nunjucks",
    }
}
```

To use [nunjucks configuration options](https://mozilla.github.io/nunjucks/api.html#configure) just add them into global jest config

```json
"jest": {
  "globals": {
    "nunjucks": {
      "throwOnUndefined": true,
      "trimBlocks": true
    }
  },
  "transform": {
    "^.+\\.njk$": "jest-nunjucks"
  }
}
```

## License 

MIT
