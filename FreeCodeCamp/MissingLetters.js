//Missing Letters
//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let firstIndex = alphabet.indexOf(str[0]);
  let arr = [...str]; //Transform string to array
  let newArr = [...str]; //To add the missing letter to the array
  let newStr = ""; //To store the missing letter in the string
  if (alphabet === str){ //If there is no missing letter
      return undefined;
  }
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === alphabet[firstIndex + i]){
      //return str;
    } else {
      newStr = alphabet[firstIndex + i];
      newArr.splice(i, 0, alphabet[firstIndex + i]);
      firstIndex += 1;
    }
  }
  return newStr;
}

fearNotLetter("abce");
