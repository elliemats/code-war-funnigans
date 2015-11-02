// TIME COMPLEXITY WITH BIG O NOTATION!

// Instructions: What is the time complexity of each? Why?


// #1. runs in O(1) time OR "CONSTANT TIME" relative to it's input 
  // Doesn't matter how long the list of items is. Still just requires one step. 
function printOneItem (cheeses) {
    console.log(cheeses[0]);
}

// #2. runs in O(n) time OR "LINEAR TIME" relative to it's input.
  // n is the number of items in the list 
function printItems (cheeses) {
  for (let i = 0; i < cheeses.length; i++) {
    console.log(cheeses[i]);
  }
}

// #3. runs in O(n^2) time OR "QUADRATIC TIME" relative to it's input.
  // our outer loop runs 'n' times, and our inner loop runs 'n' times for each iteration of the outer loop, giving up 
function compareItems (cheeses) {
  for (let i = 0; i < cheeses.length; i++) {
    for (let j = 1; j < cheeses.length - 1; j++) {
      if (cheeses[i] === cheeses[j]) {
        console.log("these two cheeses are the same")
      }
}