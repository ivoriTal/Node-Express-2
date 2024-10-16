function timeToWords(time) {
    // Validate input format
    if (typeof time !== 'string' || !/^\d{2}:\d{2}$/.test(time)) {
        return "Invalid time format";
    }

    const [hoursStr, minutesStr] = time.split(":");
    let hours = parseInt(hoursStr);
    let minutes = parseInt(minutesStr);

    // Validate hours and minutes
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return "Invalid time format";
    }

    const numberWords = [
        "twelve", "one", "two", "three", "four", "five", "six", "seven", 
        "eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", 
        "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"
    ];
    
    const minutesWords = [
        "oh", "one", "two", "three", "four", "five", "six", "seven", "eight", 
        "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
        "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", 
        "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", 
        "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", 
        "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", 
        "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", 
        "forty two", "forty three", "forty four", "forty five", "forty six", 
        "forty seven", "forty eight", "forty nine", "fifty", "fifty one", 
        "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", 
        "fifty seven", "fifty eight", "fifty nine"
    ];

    // Special case for midnight and noon
    if (hours === 0 && minutes === 0) return "midnight";
    if (hours === 12 && minutes === 0) return "noon";

    const period = hours < 12 ? "am" : "pm";
    hours = hours % 12 || 12;  // Convert hour to 12-hour format

    let hoursWord = numberWords[hours];
    let minutesWord = minutes === 0 ? "o’clock" : minutesWords[minutes];
    
    if (minutes < 10 && minutes !== 0) {
        minutesWord = "oh " + minutesWords[minutes];
    }

    return `${hoursWord} ${minutesWord} ${period}`;
}

// Test cases
const testCases = [
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
    { input: "23:23", expected: "eleven twenty three pm" }
];

// Function to test if results match the expected outputs
function runTests() {
    testCases.forEach(({ input, expected }) => {
        const result = timeToWords(input);
        console.log(`Input: ${input} -> Output: ${result} (Expected: ${expected})`);
        console.assert(result === expected, `Test failed for input: ${input}`);
    });
}

// Run tests
runTests();
