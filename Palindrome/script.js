function Ispalindrome(string) {
  var wordToCheck = string.split("");
  var reverseWordArray = [];
  var isItPalindrome;

  wordToCheck.forEach(letter => {
    reverseWordArray.unshift(letter);
  })

  var reverseWord =  reverseWordArray.join("");

if (string === reverseWord  ) {
  isItPalindrome = true;
}

else {
  isItPalindrome = false;
}

console.log(string);
console.log(reverseWord);
console.log(isItPalindrome);


}

Ispalindrome("qwqwq");
