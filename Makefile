BUILD_DIR=$(PWD)/build
PAGES_DIR=$(PWD)/gh-pages

.PHONY: sass jekyll deploy

sass: jekyll
	mkdir -p $(BUILD_DIR)/css
	bundle exec sass --style compressed sass/main.scss $(BUILD_DIR)/css/main.css

jekyll:
	bundle exec jekyll build --destination $(BUILD_DIR)

deploy:
	rm -rf $(BUILD_DIR)
	rm -rf $(PAGES_DIR)
	$(MAKE) sass
	rm -rf $(BUILD_DIR)/20*
	git clone --branch gh-pages https://github.com/keith/resume.keith.so.git $(PAGES_DIR)
	rm -rf $(PAGES_DIR)/*
	mv build/* $(PAGES_DIR)
	cd $(PAGES_DIR) && git add --all && git commit -m "`date`"
