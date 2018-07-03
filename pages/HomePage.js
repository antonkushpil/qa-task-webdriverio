"use strict";

const Page = require("./Page");

class HomePage extends Page {
  get path() {
    return 'http://store.demoqa.com';
  }
}

module.exports = new HomePage();
