[stanleyyu.io](https://stanleyyu.io)
====================================

[stanleyyu.io](https://stanleyyu.io) is my personal website for projects, updates, and talks.

## Tools
- Used [Hugo][hugo] for managing site content and templating.
- Used [SCSS][sass], a CSS extension language, to organize CSS files using features like variables, nesting, and mixins.
- Used [Sass Lint][sass-lint] for linting SCSS files.
- Used [Gulp][gulp], [npm][node], and [GNU Make][make] for automating builds and package management.
- Languages: HTML, CSS, Javascript

## Development

Install [npm][node] and [Hugo][hugo]. Then, run:

```bash
npm install                                 # **Only once.**
sass-lint -c sass-lint.yml -v -q            # (Optional) Lint SCSS files.
hugo                                        # Build site. Run `hugo server` to serve on localhost:1313.
gulp serve                                  # Currently just compiles SCSS stylesheets.
```

Note: To deploy to the VPS, run `git push prod master`.

## Structure

```
├── content/                           # Hugo site content
├── data/                              # Hugo additional data for generating the site
├── layouts/                           # Hugo layouts for rendering the site
├─┬ static/                            # Static resources
│ ├── img/                             # Images
│ ├── js/                              # Javascript
│ └── css/                             # CSS compiled from SCSS
├── scss/                              # Pre-compilation stylesheets
├── site/                              # **GENERATED** Hugo builds the site here
├── config.yaml                        # Metadata associated with the site
├── package.json                       # Dependencies
├── Makefile                           # Controls Make
├── Gulpfile.js                        # Controls Gulp
├── LICENSE.md                         # Project license
└── README.md                          # README (this file)
```

[gulp]: https://gulpjs.com/
[hugo]: https://gohugo.io/
[make]: https://www.gnu.org/software/make/
[node]: https://nodejs.org/en/download/
[sass]: https://sass-lang.com/
[sass-lint]: https://github.com/sasstools/sass-lint
