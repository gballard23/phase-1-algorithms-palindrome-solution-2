function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length / 2; i++){
    
    const j = word.length - 1 - i
    const startChar = word[i]
    const endChar = word[j]

    if(startChar !== endChar) return false;

  }

  return true
}

/* 
  Add your pseudocode here
  iterate through have of the input string
  compare first letter input string to the last letter of input string
  if the letters do not match return false
*/

/*
  Add written explanation of your solution here
  functon takes first half of the word and compares it to the second half
  it returns true if they match and false if they do not 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expexting: true");
  console.log("=>", isPalindrome('tacocat'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
