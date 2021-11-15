// Project #1
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) 
// in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
  // String with every valid character
  let alphabet = "abcdefghijklmnopqrstuvwxyz123456789";
  // Get the string to lower case
  let phraseToCheckLowerCase = str.toLowerCase();
  let phraseToCheckLowerCaseOnlyAlp = "";
  // Extracting all the non valid characters
  for (let i = 0; i < phraseToCheckLowerCase.length; i++){
    for (let j = 0; j < alphabet.length; j++){
       if (phraseToCheckLowerCase[i] === alphabet[j]){
         phraseToCheckLowerCaseOnlyAlp += phraseToCheckLowerCase[i];
       }
    }
  }
  // Transforming the string backwards
  let phraseToCheckBackwards = "";
  for (let i = (phraseToCheckLowerCaseOnlyAlp.length - 1); i >= 0; i--){
    phraseToCheckBackwards += phraseToCheckLowerCaseOnlyAlp[i];
  }
  // Checking if the both strings are equals
  if (phraseToCheckBackwards === phraseToCheckLowerCaseOnlyAlp) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
