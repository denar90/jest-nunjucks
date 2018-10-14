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

## License 

MIT
