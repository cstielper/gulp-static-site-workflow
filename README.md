# Gulp Static Site Workflow

Gulp workflow for static site development.

## Features:

1. Browser refreshing using BrowserSync
2. Sass compilation, mapping, auto-prefixing
3. Javascript formatting with prettier, transpiling with Babel, minification
4. JS linting with ES Lint. Currently, only using recommened rules and console warning.

**IMPORTANT: Prettier extension in VS Code should be disabled while working on project!!!**

There is a task to optimize images (gulp imgs) using imageOptim, but it is hit or miss as to whether it works or not. Optimizing manually will probably yield better results.

## Installation: 

1. Extract this repo to your staging area
2. Uncompress "directory_structure.zip" and move its contents to the root of your project. You can delete the ZIP file after this.
3. Run npm install
4. Set the variables at the top of gulfile.js (project URL, cssOutput)
5. Run the default task (gulp) to get started. Work in the "src" directory. Production files are output to the "dist" directory.