const timeToWords = require('./timeWord');

describe('#timeToWords', () => {
  test('it is a function', () => {
    expect(typeof timeToWords).toBe('function');
  });

  // Valid test cases
  const validTestCases = [
    { input: "00:00", expected: "midnight" },
    { input: "00:12", expected: "twelve twelve am" },
    { input: "01:00", expected: "one o’clock am" },
    { input: "06:01", expected: "six oh one am" },
    { input: "06:10", expected: "six ten am" },
    { input: "06:18", expected: "six eighteen am" },
    { input: "06:30", expected: "six thirty am" },
    { input: "10:34", expected: "ten thirty four am" },
    { input: "12:00", expected: "noon" },
    { input: "12:09", expected: "twelve oh nine pm" },
    { input: "23:23", expected: "eleven twenty three pm" },
    { input: "23:59", expected: "eleven fifty nine pm" }
  ];

  validTestCases.forEach(({ input, expected }) => {
    test(`converts ${input} to "${expected}"`, () => {
      const result = timeToWords(input);
      expect(result).toBe(expected);
    });
  });

  // Invalid test cases
  const invalidTestCases = [
    { input: "24:00", expected: "Invalid time format" },
    { input: "12:60", expected: "Invalid time format" },
    { input: "invalid", expected: "Invalid time format" },
    { input: "12:30:45", expected: "Invalid time format" },
    { input: "12:3", expected: "Invalid time format" },
    { input: "", expected: "Invalid time format" },
    { input: null, expected: "Invalid time format" },
    { input: undefined, expected: "Invalid time format" }
  ];

  invalidTestCases.forEach(({ input, expected }) => {
    test(`returns error for input "${input}"`, () => {
      const result = timeToWords(input);
      expect(result).toBe(expected);
    });
  });
});