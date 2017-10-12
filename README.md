# Gulp Static Site Workflow

Gulp workflow for static site development.

## To Use: 

1. Extract this repo to your staging area
2. Uncompress "directory_structure.zip." You can delete the ZIP file after this.
3. Run npm-install
4. Set the variables at the top of gulfile.js (project URL, cssOutput)
5. Run the default task (gulp) to get started. Work in the "src" directory. Production files are output to the "dist" directory.

### Features Include:

1. Browser refreshing using BrowserSync
2. Sass compilation, mapping, auto-prefixing
3. Javascript transpiling with Babel, minification

I am currently linting with ESLint in VSCode, but there is a gulp task (gulp eslint) that has been created to lint from the terminal. Basic linting rules have been set up in .eslintrc. [Configure the options](https://eslint.org/docs/user-guide/configuring) to suit your needs.

There is a task to optimize images (gulp imgs) using imageOptim, but it is hit or miss as to whether it works or not. Optimizing manually will probably yield better results.