# Site
SITE = site
CSS_BUILD = $(SITE)/css

# Source
SRC = src
SCSS = $(SRC)/scss

# Sass
$(CSS_BUILD)/style.css: $(SCSS)/style.scss
	mkdir -p $(CSS_BUILD)
	sass $? $@

.PHONY: clean
clean:
	rm -f $(CSS_BUILD)/*