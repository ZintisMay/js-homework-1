// Don't mess with this part up here
// **********************************************
console.log("js-homework-1 START");
var count = 1;
var theseShouldBeTheSame = function (a = "BLANK", b = "BLANK") {
  console.log("These should match:", a, b);
};
var problem = function (n, title) {
  console.log(`\nProblem No${n}: ${title}`);
};
// **********************************************
// Don't mess with this part above

//
//
//
//
// PROBLEM 1 ********************************************
// ******************************************************
problem(1, "getName");
// Declare a variable to make the getName function work
// Solution Below ***************************************

// Solution Above ***************************************

function getName() {
  return zintisName;
}

theseShouldBeTheSame(getName(), "Zintis");

//
//
//
//
// PROBLEM 2 ********************************************
// ******************************************************
problem(2, "getSecondsInYear");
// Declare several variables to make the getSecondsInAYear function work
// Solution Below ***************************************

// Solution Above ***************************************

function getSecondsInAYear() {
  return secondsInMinute * minutesInHour * hoursInDay * daysInYear;
}

theseShouldBeTheSame(getSecondsInAYear(), 31536000);

//
//
//
//
// PROBLEM 3 ********************************************
// ******************************************************
problem(3, "isLongLongWord");
// Declare several variables to make the function CALLS below work
// Solution Below ***************************************

// Solution Above ***************************************

function isLongLongWord(n) {
  if (n.length > 10) {
    return true;
  } else {
    return false;
  }
}

theseShouldBeTheSame(isLongLongWord(word1), true);
theseShouldBeTheSame(isLongLongWord(word2), false);

//
//
//
//
// PROBLEM 4 ********************************************
// ******************************************************
problem(4, "fruitArray");
// Declare an array below
// Solution Below ***************************************

// Solution Above ***************************************

theseShouldBeTheSame(
  fruitArray[0] + " " + fruitArray[1] + " " + fruitArray[2],
  "apple orange pear"
);

//
//
//
//
// PROBLEM 5 ********************************************
// ******************************************************
problem(5, "isVowel");
// Add to this function so that it determines whether the word has a vowel in it (returning true or false)
// Solution Below ***************************************
function isVowel(letter) {}
// Solution Above ***************************************

theseShouldBeTheSame(isVowel("a"), true);
theseShouldBeTheSame(isVowel("e"), true);
theseShouldBeTheSame(isVowel("i"), true);
theseShouldBeTheSame(isVowel("o"), true);
theseShouldBeTheSame(isVowel("u"), true);
theseShouldBeTheSame(isVowel("z"), false);
theseShouldBeTheSame(isVowel("x"), false);
theseShouldBeTheSame(isVowel("y"), false);

//
//
//
//
// PROBLEM 6 ********************************************
// ******************************************************
problem(6, "isEven");
// Add to this function so that it determines whether the number param is even or not (returning true or false)
// Solution Below ***************************************
function isEven(num) {}
// Solution Above ***************************************

theseShouldBeTheSame(isEven(0), true);
theseShouldBeTheSame(isEven(1), false);
theseShouldBeTheSame(isEven(2), true);
theseShouldBeTheSame(isEven(3), false);
theseShouldBeTheSame(isEven(4), true);
theseShouldBeTheSame(isEven(1.5), false);
theseShouldBeTheSame(isEven(1.6), false);

//
//
//
//
// PROBLEM 7 ********************************************
// ******************************************************
problem(7);
// Complete this function so it takes the x param and returns a string matching the one below (returning the string)
// You'll need to use a for loop, and string concatenation (google those!)
// Solution Below ***************************************
function listNumbersUpToX(x) {}
// Solution Above ***************************************

theseShouldBeTheSame(listNumbersUpTo(0), "0");
theseShouldBeTheSame(listNumbersUpTo(3), "0123");
theseShouldBeTheSame(listNumbersUpTo(5), "012345");

//
//
//
//
// PROBLEM 8 ********************************************
// ******************************************************
problem(8);
// Use a variable and a for loop to add up all the numbers in the array, and return the sum (return the sum)
// Solution Below ***************************************
function sumArrayOfNumbers(array) {}
// Solution Above ***************************************

theseShouldBeTheSame(sumArrayOfNumbers([]), 0);
theseShouldBeTheSame(sumArrayOfNumbers([1]), 1);
theseShouldBeTheSame(sumArrayOfNumbers([1, 1]), 2);
theseShouldBeTheSame(sumArrayOfNumbers([1, 3]), 4);
theseShouldBeTheSame(sumArrayOfNumbers([1, 11, 111]), 123);
theseShouldBeTheSame(sumArrayOfNumbers([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 0);
