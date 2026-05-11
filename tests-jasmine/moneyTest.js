describe('test suite: formatCurrency', ()=>{ //names the test suite and defines a function that contains the test specs
  it('converts cents into dollars'), ()=>{ //describes what the test is supposed to do
    expect(formatcurrency(2095)).toEqual('20.95'); // what to be tested
  }; 
})
/* to use the jamine test, we need to include the jasmine library in our html file, and then include the test file that contains the test suite. The test suite is defined using the describe function, which takes a string that names the suite and a function that contains the test specs. Each test spec is defined using the it function, which takes a string that describes what the test is supposed to do and a function that contains the actual test code. In this case, we are testing a function called formatCurrency that converts cents into dollars. We use the expect function to specify what we expect the output of the function to be, and we use toEqual to compare it to the expected value. */ 
// the test will pass if the formatCurrency function correctly converts 2095 cents into '20.95' dollars. If the function does not return the expected value, the test will fail and provide feedback on what went wrong.
// the suite can be used as an esm or downloaded and included in the html file. If using as an esm, we need to export the function that we want to test and import it in the test file. If using as a downloaded file, we can simply include it in the html file and use it in the test suite without any additional configuration.
