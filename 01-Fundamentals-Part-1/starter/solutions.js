// **************************************************************************
// Coding Challenge #1
// **************************************************************************

/*
Mark and John are trying to compare
their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// **************************************************************************
// My Solution


// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
//   John weights 92 kg and is 1.95 m tall.
let marksMass = 78;
let marksHeight = 1.69
let johnMass = 92;
let johnHeight = 1.95;

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
//   John weights 85 kg and is 1.76 m tall.
// let marksMass = 95;
// let marksHeight = 1.88
// let johnMass = 85;
// let johnHeight = 1.76;

// their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
function BMI (mass, height){
  return mass / (height * height);
}

let markBMI = BMI(marksMass, marksHeight);
let johnBMI = BMI(johnMass, johnHeight);

// let markHigherBMI2 = markBMI >= johnBMI;
// console.log(markBMI, johnBMI)
// console.log(markHigherBMI2);



// **************************************************************************
// The Official Solution

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
//
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
//
// console.log(BMIMark, BMIJohn, markHigherBMI);

// **************************************************************************
// Coding Challenge #2
// **************************************************************************

/*
Use the BMI example from Challenge #1,
and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI.
The message can be either "Mark's BMI is higher than John's!" or
"John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// **************************************************************************
// My Solution

// if (markBMI > johnBMI) {
//   console.log(`Marks' BMI (${parseInt(markBMI)}) is higher than John's BMI (${parseInt(johnBMI)})...`);
// } else {
//   console.log(`John's BMI (${parseInt(johnBMI)}) is higher than Marks' BMI (${parseInt(markBMI)})...`);
// }

// **************************************************************************
// Coding Challenge #3
// **************************************************************************

/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw,
so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team,
and the same time a score of at least 100 points.
HINT: Use a logical operator to test for minimum score,
as well as multiple else-if blocks 😉

4. BONUS 2: Minimum score also applies to a draw!
So a draw only happens when both teams have the same score and
both have a score greater or equal 100 points.
Otherwise, no team wins the trophy.

TEST DATA:
Dolphins score 96, 108 and 89.
Koalas score 88, 91 and 110

TEST DATA BONUS 1:
Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 123

TEST DATA BONUS 2:
Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

function takeAverage(x, y, z){
  let average;
  average = (x+y+z) / 3;
  return average.toFixed(0);
}

function checkWin (team1, team2){
  if ((team1 || team2) >= 100){
    if (team1 > team2){
      console.log("Dolphins win the trophy!")
    }
    else if (team2 > team1){
      console.log("Koalas win the trophy!")
    }
    else if (team1 === team2){
      console.log("Draw!")
    }
  } else {
    console.log("No team wins the trophy.");
  }
}

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

checkWin (takeAverage(97, 121, 101), takeAverage(109, 95, 123));








