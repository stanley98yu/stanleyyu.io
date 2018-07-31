[stanleyyu.io](https://stanleyyu.io)
====================================

[stanleyyu.io](https://stanleyyu.io) is my personal website for projects, updates, and interests.

## Tools
- Used [Hugo][hugo] for managing site content and templating.
- Used [SCSS][sass], a CSS extension language, to organize CSS files using features like variables, nesting, and mixins.
- Used [npm][node] and [GNU Make][make] as the package manager and build tool.
- Languages: HTML, CSS, Javascript

## Development

Install [npm][node], [Hugo][hugo], and [SCSS][sass]. Then, run:

```bash
sass scss/style.scss static/css/style.css   # Compile stylesheets.
hugo -v                                     # Build site.
```

## Structure

```
├── archetypes/                        # Hugo archetypes for content Markdown files
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
├── Makefile                           # Controls Make
├── LICENSE.md                         # Project license
└── README.md                          # README (this file)
```

[hugo]: https://gohugo.io/
[make]: https://www.gnu.org/software/make/
[node]: https://nodejs.org/en/download/
[sass]: https://sass-lang.com/
