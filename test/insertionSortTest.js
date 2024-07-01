const insertionSort = require('../src/insertionSort');

function testInsertionSort() {
    let passed = true;

    const testCases = [
        { input: [12, 11, 13, 5, 6], expected: [5, 6, 11, 12, 13] },
        { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
        { input: [3, -2, -1, 0, 2, 1], expected: [-2, -1, 0, 1, 2, 3] },
        { input: [], expected: [] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = insertionSort([...input]);
        if (JSON.stringify(result) !== JSON.stringify(expected)) {
            console.error(`Test case ${index + 1} failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`);
            passed = false;
        } else {
            console.log(`Test case ${index + 1} passed`);
        }
    });

    if (passed) {
        console.log("All test cases passed!");
    } else {
        console.error("Some test cases failed.");
    }
}

testInsertionSort();
