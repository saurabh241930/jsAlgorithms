function reverseWords(string) {

var wordArray = string.split(" ");
var resultWordArray = [];
var requiredSentance;

wordArray.forEach(word => {

if (word == " ") {
var changedLetter =  " ";
resultWordArray.push(changedLetter);


} else {
  var SplittedWord = word.split("");
  var reversedWordsLettersArray = [];

  SplittedWord.forEach(letter => {
    reversedWordsLettersArray.unshift(letter);
    var reversedWord = reversedWordsLettersArray.join("");
    resultWordArray.push(reversedWord);
  })
}


})

var resultSentance = resultWordArray.join(" ");
console.log(resultSentance);
}


reverseWords("Reverse this line");
