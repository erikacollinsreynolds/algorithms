// Assertion Library
// An assertion library is a simplified way of throwing an error if a conditional is not met

function add(num1, num2) {
  return num1 + num2;
}

// Here we can assert that the result of calling the func should be 4
const result = add(1, 3);
if (result !== 4) {
  throw new Error('Adding 1 and 3 should equal 4');
}

// Assertion libraries like "expect" (which is built-in with Jest) gives us a way to write an assertion
const result1 = add(1, 3);
expect(result).toEqual(4);

/* Assertion libraries also provide:
  - Unit Tests: 
    -- these tests isolate an individual function to see if the function is performing as expected
    -- generally faster than integration tests since the code chunks are usually smaller
    -- if a function relies on another function, we typically mock out the function that is relied on. This allows us to test about the function we really care about
    -- Jest has built-in functionality for mocking, but there are also libraries that exist

  - Snapshots:
    -- snapshots allow us to know when the code we change has unintended consequences somewhere else in the codebase
    -- these are a Jest feature
    -- rather than checking the properties of function outputs one by one, we compare the output to the previous version that was recorded when we KNEW IT WAS CORRECT
    -- this allows us to cover a lot of code without having to dig too deep, but they are only as reliable as the code they are testing and can't be used for TDD

  -Integration Tests:
    -- integration tests attempt to ensure that groups of functions worknig together provide an expected output
    -- test example: to ensure that if an HTTP Get request hits my server at the /cats route then my server's router handler will send a list of all cats in the db as JSON
    -- this example interacted with multiple controller functions and db cells
    -- these tests are typically slower to run
    -- when integration tests fail, they may not lead us any closer to finding the root cause
    -- they act as a guard against "regressions" and to validate features at a high level

  - Testing Front-End Code:
    -- it's difficult to use Node to test code that is meant to fun in the browser
    -- "Testing Library" is a family of related libraries that are widely considered the gold standard for testing UI components and front-end code
    -- DOM Testing Library lets us write tests that query DOM nodes similar to how user interactions would
    -- it's typically used on top of a testing framework such as Jest and in conjunction with a DOM simulator such as jsdom
    -- React Testing Library is another one

  - End to End Testing:
    -- involves testing an apps full workflow -> frontend to backend --> as closely as possible to how it would be used in the real world
    -- when end to end testing, our frontend code needs to run in a place that mimics a browser as closely as possible, there are many approaches for this:
      -- Browswer Automation: tests frontend code by actually running an automated version of the browser that you specify. This is as close to the real thing as you can get. Two examples are: PhantomJS and Cypress.io
      -- Headless Browser: a lightweight attempt at mimicking a browser for testing wtihout having to perform the resource-intensive practice of actually running a browser. Examples are: PhantomJS and Puppeteer. 
      -- The difference between Headless browser and Browser Automation is gray:
        -- Cypress has a headless mode, and Puppeteer has a non-headless one! A key difference for distinguishing between the two is that headless browsers don't render to a screen.

  - Test-Driven Development:
    -- process of writing tests for a feature BEFORE adding the actual features
    -- advocates of TDD argue that developer who strictly follow TDD end up writing more modular, maintainable, and readable code
    -- the general process of TDD is:
      -- Identify the feature to be added
      -- Write a test that tests that the feature exists and works
      -- Run your tests and ensure that your new test is failing (because the feature doesn't exist yet)
      -- Write the code to implement your feature by following the errors, and pass the test
      -- Repeat
*/

/*
NOTES:
  - in Jest we use the "describe" function to separate our tests into sections. They make our test outputs readable
  - You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
  functions inside of "describe" blocks and they will only run for tests
  inside that describe block. You can even nest describes within describes!
  - Jest runs the "beforeAll" function once, before any tests are executed.
  Here, we write to the file and then reset our database model. Then, we
  invoke the "done" callback to tell Jest our async operations have
  completed. This way, the tests won't start until the "database" has been
  reset to an empty Array!
*/