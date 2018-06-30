[stanleyyu.io](https://stanleyyu.io)
====================================

[stanleyyu.io](https://stanleyyu.io) is my personal website for projects, updates, and interests.

## Tools
- Used [Handlebars][handlebars] to manage content and templates.
- Used [SCSS][sass], a CSS extension language, to organize CSS files using features like variables, nesting, and mixins.
- Languages: HTML, CSS, Javascript

## Development

```bash
npm install                            # **Only once** Install dependencies.
sass _scss/style.scss css/style.css    # Compile stylesheets.
```

## Structure

```
├── _img/                              # Static images
├── _scss/                             # Pre-compilation stylesheets
├── css/                               # Stylesheets
├── js/                                # Javascript files
├── partials/                          # Handlebars HTML partials called by templates
├── templates/                         # Handlebars HTML templates
├── package.json                       # Dependencies
├── index.html                         # Home page
├── LICENSE.md                         # Project license
└── README.md                          # README (this file)
```

[handlebars]: http://handlebarsjs.com/
[sass]: https://sass-lang.com/
