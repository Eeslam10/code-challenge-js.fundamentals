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

// 6.
// Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

// reportingForDuty('Private', 'Fido')
// Should return 'Private Fido reporting for duty!'

// Write your function here:
    const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
  
     }
    const rank = 'Developer';
    const lastName = 'Islam';
  
//.7
// We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6 + 1) 
      let die2 = Math.floor(Math.random() * 6 + 1)
      return die1 + die2
  }
  
// 8.
// Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

// Write a function, calculateWeight(). It should:

// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.
// Handle the following cases:
// 'Mercury' weight = earthWeight * 0.378
// 'Venus' weight = earthWeight * 0.907
// 'Mars' weight = earthWeight * 0.377
// 'Jupiter' weight = earthWeight * 2.36
// 'Saturn' weight = earthWeight * 0.916
// For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
// Write your function here:
const calculateWeight = (earthWeight, planet) => {
    switch(planet){
      case 'Mercury':
        return earthWeight * 0.378;
      case 'Venus':
        return earthWeight * 0.907;
      case 'Mars':
        return earthWeight * 0.377;
      case 'Jupiter':
        return earthWeight * 2.36;
      case 'Saturn':
        return earthWeight * 0.916;
      default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
  };

  
// Example usage:
const earthWeight = 150; // Weight on Earth in pounds
const planet = 'Mars';

const weightOnPlanet = calculateWeight(earthWeight, planet);
console.log(`Your weight on ${planet} would be ${weightOnPlanet} pounds.`);

// 9.
// It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
const truthyOrFalsy = value => {
    if(value){
      return true
    }else  {
      return false
    }
  }

  
// 10.
// A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

// Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.

// The JavaScript Math.ceil() function will come in handy

// Write your function here:
const numImaginaryFriends = totalFriends => {
    const imaginaryFriends = (totalFriends * 3.7)
      return Math.ceil(imaginaryFriends)
  }
  
  
