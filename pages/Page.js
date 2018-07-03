"use strict";

class Page {
    go() {
        browser.url(this.path);

        return this;
    }
}

module.exports = Page;
