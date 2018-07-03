"use strict";

const {Given, When, Then} = require("cucumber");
const pageFactory = require('../services/PageFactory');
const assert = require('assert');
const Rwg = require('random-word-generator');

const generator = new Rwg();
const random = generator.generate();
const comment = `This is test comment`;
const name = `Anton`;
const email = {
    correct: `${random}@email.com`,
    wrong: 'wrong@email'
};
const expectedError = 'ERROR: please enter a valid email address.';
const samplePage = pageFactory.getPage('Sample page');
const errorPage = pageFactory.getPage('Error page');

Given("Open '{link}'", (link) => {
    browser.url(link);
});

When("Navigate to '{page}'", (pageName) => {
    pageFactory.getPage(pageName).go();
});

When("Enter a comment with a {status} email", (status) => {
    samplePage.fillForm(comment, name, email[status]);
});

Then("Check Error is displayed", () => {
    const actualError = errorPage.error.getText();
    assert.equal(actualError, expectedError, "Incorrect Error message");
});

When("Navigate back", () => {
    errorPage.back.click();
});

Then("Check Comment is received", () => {
    const actualName = samplePage.commentName.getText();
    const actualMessage = samplePage.commentMessage.getText();
    assert.equal(actualName, name, 'Incorrect name in comment');
    assert.equal(actualMessage, comment, 'Incorrect message in comment');
});

Then("Shutdown browser", () => {
    console.log('Don\'t end the session manually. This will be done automatically.');
});
