[stanleyyu.io](https://stanleyyu.io)
====================================

[stanleyyu.io](https://stanleyyu.io) is my personal website for projects, updates, and interests.

## Tools
- Used [Handlebars.js][handlebars] to manage content and templates.
- Used [SCSS][sass], a CSS extension language, to organize CSS files using features like variables, nesting, and mixins.
- Used [GNU Make][make] to generate distribution files.
- Languages: HTML, CSS, Javascript

## Development

Install [npm][node]. Then:

```bash
npm install                            # **Only once** Install dependencies.
make build                             # Build site.
```

## Structure

```
├─┬ src/                               # Source code
│ ├── img/                             # Static images
│ ├── scss/                            # Pre-compilation stylesheets
│ ├── partials/                        # Handlebars HTML partials called by templates
│ └── templates/                       # Handlebars HTML templates
├── dist/                              # Site distribution built by Make
├── package.json                       # Dependencies
├── LICENSE.md                         # Project license
└── README.md                          # README (this file)
```

[handlebars]: http://handlebarsjs.com/
[make]: https://www.gnu.org/software/make/
[node]: https://nodejs.org/en/download/
[sass]: https://sass-lang.com/
