Feature: Selenium

In order to check 'Leave a comment' functionality
As an ordinary user
I want to leave a comment on 'Sample Page'

Background:
    Given Open 'http://store.demoqa.com'

Scenario: Leave a comment
    When Navigate to 'Sample page'
    And Enter a comment with a wrong email
    Then Check Error is displayed
    When Navigate back
    And Enter a comment with a correct email
    Then Check Comment is received
    And Shutdown browser
