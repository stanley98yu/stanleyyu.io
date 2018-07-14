[stanleyyu.io](https://stanleyyu.io)
====================================

[stanleyyu.io](https://stanleyyu.io) is my personal website for projects, updates, and interests.

## Tools
- Used [Handlebars.js][handlebars] to manage content and templates.
- Used [SCSS][sass], a CSS extension language, to organize CSS files using features like variables, nesting, and mixins.
- Languages: HTML, CSS, Javascript

## Development

```bash
npm install                            # **Only once** Install dependencies.
sass _scss/style.scss css/style.css    # Compile stylesheets.
```

## Structure

```
├── site/                              # Site build
│   ├── css/                           # Stylesheets
│   ├── js/                            # Javascript files
│   └── index.html                     # Home page
├── src/                               # Source code
│   ├── img/                           # Static images
│   ├── scss/                          # Pre-compilation stylesheets
│   ├── partials/                      # Handlebars HTML partials called by templates
│   └── templates/                     # Handlebars HTML templates
├── package.json                       # Dependencies
├── LICENSE.md                         # Project license
└── README.md                          # README (this file)
```

[handlebars]: http://handlebarsjs.com/
[sass]: https://sass-lang.com/
