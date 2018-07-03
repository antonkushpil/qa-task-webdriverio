"use strict";

class ErrorPage {
    get error() {
        return $("//strong/..");
    }

    get back() {
        return $("a[href$='.back()']");
    }
}

module.exports = new ErrorPage();
