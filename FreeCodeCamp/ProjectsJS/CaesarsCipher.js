// Project #3
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!."
  let alphabet13 = "NOPQRSTUVWXYZABCDEFGHIJKLM ?!."
  let strNew = "";
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < alphabet13.length; j++){
       if (str[i] === alphabet13[j]){
         strNew += alphabet[j];
       }
    }
  }
  return strNew;
}

rot13("SERR PBQR PNZC");
