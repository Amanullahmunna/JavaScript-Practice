//Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let numOne = "950";
let numTwo = "650";

if (numOne > numTwo) {
  console.log(numOne, "is bigger than", numTwo);
} else {
  console.log(numTwo, "is bigger than", numOne);
}

//Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let numberOne = -31;

if (numberOne === 0) {
  console.log("The number is zero");
} else if (numberOne > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

{
  //Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

  let theNumber = "11010";

  if (theNumber % 10 == 0) {
    console.log(theNumber, "is divisible by 10");
  } else {
    console.log(theNumber, "is not divisible by 10");
  }
}

{
  //Solve the problem with Javascript  to check whether a number is even or odd.

  let theNumber = "443546578";

  if (theNumber % 2 == 0) {
    console.log(theNumber, "is Even");
  } else console.log(theNumber, "is Odd");
}

{
  //Solve the problem with Javascript  to check whether a character is in the alphabet or not.
  let char = "6";

  if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))
    console.log(char, "is in the Alphabet");
  else console.log(char, "isn't in the Alphabet");
}

{
  //Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

  let temp = 29;

  if (temp >= 30) {
    console.log("temperature is Hot");
  } else if (temp <= 25) {
    console.log("temperature is Cold");
  } else {
    console.log("temperature is Normal");
  }
}

{
  //Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

  let numOne = "678337";
  let numTwo = "753256";
  let numThree = "283576";

  if (numOne > numTwo && numOne > numThree) {
    console.log(numOne, "is the maximum number among them");
  } else if (numTwo > numOne && numTwo > numThree) {
    console.log(numTwo, "is the maximum number among them");
  } else {
    console.log(numThree, "is the maximum number among them");
  }
}

{
  //Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

  let x = "444";

  if (x % 2 == 0) {
    console.log("Even Number");
  } else console.log("Odd Number");
}

{
  //Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.
  let numOne = "31";
  let numTwo = "38";

  if (numOne > 30 && numTwo > 30) {
    console.log("Both numbers are greater than 30");
  } else {
    console.log("Both numbers are not greater than 30");
  }
}

{
  //Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

  let personAge = 15;

  if (personAge >= 13 && personAge <= 19) {
    console.log("Teenager");
  } else {
    console.log("Not a Teenager");
  }
}
