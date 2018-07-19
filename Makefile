# Site distribution.
DIST = dist
CSS_BUILD = $(DIST)/css

# Source
SRC = src
SCSS = $(SRC)/scss
HBS_TEMPLATES = $(SRC)/templates

# Handlebars
$(DIST)/handlebarsCompiled.js: $(HBS_TEMPLATES)/index.hbs
	mkdir -p $(DIST)
	node_modules/.bin/handlebars $? -f $@

# Sass
$(CSS_BUILD)/style.css: $(SCSS)/style.scss
	mkdir -p $(CSS_BUILD)
	sass $? $@

.PHONY: build
build: $(DIST)/handlebarsCompiled.js $(CSS_BUILD)/style.css

.PHONY: clean
clean:
	rm -f $(DIST)/index.html $(CSS_BUILD)/*