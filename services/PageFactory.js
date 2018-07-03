"use strict";

const pages = {
    'Home page': require("../pages/HomePage"),
    'Sample page': require("../pages/SamplePage"),
    'Error page': require("../pages/ErrorPage"),
};

class PageFactory {
    getPage(pageName) {

        return pages[pageName];
    }
}

module.exports = new PageFactory();
