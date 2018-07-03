"use strict";

const Page = require("./page");

class SamplePage extends Page {
    get path() {
        return 'http://store.demoqa.com/sample-page/';
    }

    get comment() {
        return $('#comment');
    }

    get name() {
        return $('#author');
    }

    get email() {
        return $('#email');
    }

    get submit() {
        return $('#submit');
    }

    get commentName() {
        return $('cite.fn');
    }

    get commentMessage() {
        return $('div.comment-body');
    }

    fillForm(comment, name, email) {
        this.comment.setValue(comment);
        this.name.setValue(name);
        this.email.setValue(email);
        this.submit.click();
    }
}

module.exports = new SamplePage();
