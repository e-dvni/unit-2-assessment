// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("timesThree", () => {
    it("returns the original array multiplied by 3", () => {
        expect(timesThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(timesThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})


// b) Create the function that makes the test pass.
const timesThree = (array) => {
    let multiplied = array.map((value) => {
        return value * 3
    })
    return multiplied
}

// Explain your code: The function called timesThree is taking in an array of numbers.  It is then utilizing .map to iterate the passed array multiplying each value by three and adding the new value to the end of a new array called multiplied.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
    it("returns whether or not a number is divisible by three", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

const divisibleByThree = (variable) => {
    if (variable.number % 3 === 0) {
        return `${variable.number} is divisible by three`
    } else {
        return `${variable.number} is not divisible by three`
    }
}

// Explain your code: The function divisibleByThree is being given a variable.  The variable contains an object with a number as its value.  The function is then checking whether the given value is evenly divisible by three and if it is it returns the string "'value' is divisible by three".  If the value is not evenly divisible by three then it will return the string "'value' is not divisible by three"

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalize", () => {
    it("returns the original array of strings with the first letter in each string capitalized", () => {
        expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// b) Create the function that makes the test pass.

const capitalize = (nounArray) => {
    let capitalNouns = nounArray.map((value) => {
        return value[0].toUpperCase().concat(value.slice(1))
    })
    return capitalNouns
}

// Explain your code:
