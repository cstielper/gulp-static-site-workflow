# Gulp Static Site Workflow
![Version 2.0.1](https://img.shields.io/badge/Version-2.0.1-brightgreen.svg)

Gulp workflow for simple static site/landing page development.

## Features:

1. Browser refreshing using BrowserSync
2. Sass compilation, mapping, auto-prefixing, minifying, sourcemaps
3. Javascript module bundling with Rollup, transpiling with Babel, linting with ES Lint, minifying, sourcemaps

## Installation: 

1. Download zip/extract this repo to your local dev area
2. Install packages
```
npm install
```
3. Start a local server from the root of this repo
```
php -S localhost:8000
```
4. Build the "dist" directory
```
gulp build
```
5. Run the default task to get started
```
gulp
```

## You Take It From Here:

At this point you should have the project open in your browser at: http://localhost:3000/

Work in the "src" directory. A directory structure is already created. All starting files can be removed, however, gulp tasks may need to be reconfigured. For example:

```
gulp.task('js', () => {
  gulp
    .src('./src/js/scripts.js')
```

The "js" task in [gulpfile.js](gulpfile.js) assumes you have an entry point for all of your scripts named "scripts.js." This will need to be adjusted if you don't want to use that name.

By default, JS and Sass files are not minified. You can add a flag called "production" to enable minifying:
```
gulp build --production
```

Everything that should be deployed, gets compiled to the "dist" directory.