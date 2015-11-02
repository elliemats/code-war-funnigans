/** Convert String to Object with ASCII Codes:
  * @params { String } - string with any characters; can be empty string 
  * @return { Object } - Contains letter as property and ASCII code as value (key value pairs)
  * Example: 
    - input: "$ hello!"
    - output: {"h":104,"e":101,"l":108,"o":111}
*/

/* Original Brute Force */

function charToAscii(string){
  let resultsObj = {}, 
      alphaLower = "abcdefghijklmnopqrstuvwxyz",
      alphaTotal = alphaLower + alphaLower.toUpperCase(),
           split = [...string] // splits string into arr of characters
     
  if (string === "") return null;   // check if string is empty
  
  
 var letterArr = split.filter((char) => { // clean up: modify string to be an arr of only letters 
   return alphaTotal.indexOf(char) > -1;
 });


  for (var i = 0; i < letterArr.length; i++) { // set key to letter and val to charCode 
    let letter = letterArr[i],
          code = letter.charCodeAt();
    resultsObj[letter] = code;
  };

  return resultsObj;
}


/* SO pretty! */

function charToAscii(string) {  
  if (string.length == 0) return null; // initial check if string is empty
  
  let map = {};

  for (let char of string) {
    if (char >= "A" && char <= "Z" || char >= "a" && char <= "z") { // only add to map if it's a letter (upper || lower)
      map[char] = char.charCodeAt(0);
    }
  }
  
  return map;
}

