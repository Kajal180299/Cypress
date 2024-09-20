Plugins explored so far!

https://marketplace.visualstudio.com/items?itemName=G-Fidalgo.cypress-runner
1
https://www.npmjs.com/package/cypress-plugin-api [API Testing!! Config this for API Testing]

cypress-mochawesome-reporter: Generates visually rich reports.
cypress-axe: For accessibility testing.
cypress-file-upload: Adds file upload support in Cypress.
cypress-plugin-retries: Adds retries for flaky tests.
cypress-xpath: Enables XPath support in Cypress.
@cypress/code-coverage: For generating test coverage reports.
cypress-cucumber-preprocessor: Integrates Cucumber BDD for writing tests in Gherkin syntax.

For generating the fake data: faker

#Issue faced so far
The issue you're encountering is related to how environment variables are passed in the command. On Unix-like systems (Linux, macOS), the $BROWSER and $MODE variables will work correctly. However, on Windows, the $BROWSER and $MODE variables are not supported by default.

Solution: Use cross-env to Handle Environment Variables Across Platforms
To ensure that your script works on both Windows and Unix-like systems, use cross-env, which is a popular package that allows you to set environment variables in a cross-platform manner.

1. Install cross-env
    "cypress:run:dev": "cross-env cypress run --env configFile=development --browser %BROWSER% --%MODE%",
