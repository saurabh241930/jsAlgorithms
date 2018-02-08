function harmlessRansomNote(noteText,magizineText) {
  var noteArr = noteText.split(" ");
  var magizineArr = magizineText.split(" ");
  var magizineObj = {};


magizineArr.forEach(word => {
  if (!magizineObj[word]) {
    magizineObj[word] = 0;
    magizineObj[word]++;
  }
})

var noteIsPossible = true;

noteArr.forEach(word => {
  if (magizineObj[word]) {
    magizineObj[word]--;
  }
  else noteIsPossible = false;
})


console.log(noteIsPossible);
}

harmlessRansomNote("starte","I started Jugling");
