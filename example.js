console.log("js-homework-1 START");
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

// Your goal is to write some code in the commented sections that allows the rest of the code to run. Basically whenever someone console logs there should be two identical versions of the same log right after each other. One as the goal, and the other one you'll be working on. Here's an example:

var add = function (a, b) {
  // Fix the code in here so that it return a + b
  return;
};

problem(1, "Example Unsolved");
theseShouldBeTheSame(add(5, 6), 11);
console.log(
  "notice how BLANK and 11 are not the same... your goal is to fix that in the code!"
);

var add = function (a, b) {
  // This one will now work
  return a + b;
};

problem(2, "Example Solved");
theseShouldBeTheSame(add(5, 6), 11);
console.log("11 is 11... this one is solved!");
