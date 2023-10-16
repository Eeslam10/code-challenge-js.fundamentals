// 1.
// Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

// Helpful Notes:

// Your function can be a function expression or a function declaration.
// Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned.
// Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc.

// Write your function here:
const greetWorld = () => {
    return 'Hello, World!';
  };

// 2.
// The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

// Write your function here:
const canIVote = age => {
    if (age >= 18) {
      return true
    } else {
      return false
    }
  }

//3.
// Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

// Write your function here:
const agreeOrDisagree = (hey, hi) => {
    if(hey === hi) {
      return 'You agree!'
    }else {
      return 'You disagree!'
    };
  };

// 4.
// Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

// Here are the classifications:
// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

// Write your function here:
const lifePhase = age => {
    if(age < 0 || age > 140){
      return 'This is not a valid age'
    }else if(age < 4){
      return 'baby'
    }else if(age < 13){
      return 'child'
    }else if (age < 20){
      return'teen'
    }else if(age < 65){
      return 'adult'
    }else {
      return 'senior citizen'
    }
  };

// 5.
// Write a function, finalGrade(). It should:

// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// 0-59 should return: 'F'
// 60-69 should return: 'D'
// 70-79 should return: 'C'
// 80-89 should return: 'B'
// 90-100 should return: 'A'

// Write your function here:
const finalGrade = (assignment, test, exam) => {
    if((assignment < 0 || assignment > 100) || (test < 0 || test > 100) || (exam < 0 || exam > 100)) {
      return 'You have entered an invalid grade.'
    };
  
    const average = (assignment + test + exam) / 3;
  
    if(average < 60){
      return 'F'
    }else if(average < 70){
      return'D'
    }else if(average < 80){
      return 'C'
    }else if (average < 90){
      return 'B'
    }else{
      return 'A'
    }
  };
  
  
