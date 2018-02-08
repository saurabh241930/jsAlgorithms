function caesarCiphar(string,num) {

var wordArray = string.split("");
var resultWordArray = [];


wordArray.forEach(letter => {



if (letter == " ") {
var changedLetter =  " ";
resultWordArray.push(changedLetter);

} else {
  var changedLetter = String.fromCharCode(letter.charCodeAt(0) + num);
 resultWordArray.push(changedLetter);
}



})

var resultWord = resultWordArray.join("");
console.log(resultWord);


}


caesarCiphar("Saurabh Pandey",1);
