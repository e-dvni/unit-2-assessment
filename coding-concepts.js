// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
console.log(cohort.split(" "))

// a) Your answer: "Alpha", "2024"
// b) Verify and explain: I believe this to be my answer because based on my understanding of code, the built-in function split, will separate the string "Alpha 24" by an empty character (" ").  Therefore "Alpha" will be one string.  The " " will be removed.  Then "2024" will be another string.
                          // My prediction was correct

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: const greeter is a function that takes in a parameter called name.  The function then uses string interpolation to return a string that says "Hello, 'parameter'".  Since console.log(greeter("LEARN Student")) has "LEARN Student" as its parameter, it should return "Hello, LEARN Student"
                          // My prediction was incorrect, while writing my explanation, I was wondering why there was no 'return' within the function but assumed LEARN wouldnt make a mistake, but I now realize it was an intentional mistake.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The filter function is being used on the array onlyOdds.  Iterating through each number, checking if the remainder of the number divided by 2 does not equal 0.  If true then it gets returned.
                          // My prediction was correct

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: because myCodingSkills is an object, the console.log is using dot notation to extract a specific key in the object.  Its going from the object myCodingSkills, to the key languages which is an array of strings, and since we are in an array, it is extracing the string "JavaScript" which is at the index 0 of the array.
                          // My prediction was correct.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: "George", cohort: "Alpha", year: 2024}
// b) Verify and explain: class Learn is creating a class called learn to create a blueprint for objects and behaviors.  The line of code, constructor(name) is creating a method inside the object that is expecting a name to be given as a parameter.  The method contains an object with this.student = name (the name that is passed in as a paramter), this.cohort = "Alpha" (setting cohort to "Alpha"), and this.year = 2024 (setting year to 2024).  const learnStudent = new Learn("George") is creating a new variable that is equal to a new class with the name as George.  Therefore the console.log(learnStudent) will result in a new the same class but using George as its name.
                          // My prediction was correct.
