[stanleyyu.io](https://stanleyyu.io)
====================================

[stanleyyu.io](https://stanleyyu.io) is my personal website for projects, updates, and talks.

## Tools
- Used [Hugo][hugo] for managing site content and templating.
- Used [SCSS][sass], a CSS extension language, to organize CSS files using features like variables, nesting, and mixins.
- Used [Sass Lint][sass-lint] for linting SCSS files.
- Used [Gulp][gulp] and [npm][node] for automating builds and package management.
- Languages: HTML, CSS, Javascript

## Development

Install [yarn][yarn], [Hugo][hugo], and [node][node]. Then, run:

```bash
yarn                                        # Install dependencies
yarn serve                                  # Serve site on localhost:1313 in background. Use kill <pid> to stop.
yarn build                                  # Build site.
yarn clean                                  # Delete generated files.
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
├── assets/                            # Pre-compilation stylesheets
├── site/                              # **GENERATED** Hugo builds the site here
├── config.yaml                        # Metadata associated with the site
├── package.json                       # Dependencies
├── Gulpfile.js                        # Controls Gulp
├── LICENSE.md                         # Project license
└── README.md                          # README (this file)
```

[gulp]: https://gulpjs.com/
[hugo]: https://gohugo.io/
[node]: https://nodejs.org/en/download/
[sass]: https://sass-lang.com/
[sass-lint]: https://github.com/sasstools/sass-lint
[yarn]: https://yarnpkg.com/en/docs/install
