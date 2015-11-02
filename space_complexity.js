// SPACE COMPLEXITY WITH BIG O NOTATION!

// Instructions: What is the space complexity of each? Why?


// #1. runs in O(1) space relative to it's input 
  // We aren't allocating any new variables.
function printItems (n) {
  for (let i = 0; i <= n; i++) {
    console.log(n);
  }
}

// #2. runs in O(n) space relative to it's input.
  // the size of our storage array scales with the size of the input
function printItems (n) {
  let storage = [];
  for (let i = 0; i <= n; i++) {
    storage.push(n);
  }
  return n;
}

