[stanleyyu.io](https://stanleyyu.io)
====================================

[stanleyyu.io](https://stanleyyu.io) is my personal website for projects, updates, interests, and travel.

## Tools
- Used [SCSS][sass], a CSS extension language, to organize CSS files using features like variables, nesting, and mixins.
- Used [Gulp][gulp], a build system for automating the development workflow.
- Languages: HTML, CSS, Javascript

## Setup
- Run `gulp scss` to compile SCSS files. Stylesheets will be generated in the `css/` folder.

## Structure

```
├── _img/                     # Images
├── _scss/                    # Pre-compilation stylesheets
├── css/                      # *GENERATED* Stylesheets
├── node_modules/             # *GENERATED* JS modules installed by npm
├── Gulpfile.js               # Controls Gulp, used for development
├── index.html                # Home page
├── package.json              # Dependencies
├── LICENSE.md                # Project license
└── README.md                 # README (this file)
```

[sass]: https://sass-lang.com/
[gulp]: https://gulpjs.com/
