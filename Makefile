# Site distribution.
SITE = site
RSRC = resources

.PHONY: clean
clean:
	rm -rf $(SITE) $(RSRC)