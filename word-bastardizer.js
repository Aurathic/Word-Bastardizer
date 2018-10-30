var origWord = "Test val";
var title = document.getElementById("title");
var textBox = document.getElementById('input');

function changeOriginalWord() {
	origWord = textBox.value;
}

function revertToOriginalWord() {
	textBox.value = origWord;
}

function swapLetters(s) {
	let randIndex = Math.floor(Math.random() * s.length);
	return s.substring(0, randIndex) + s.charAt(randIndex+1) + s.charAt(randIndex) + s.substring(randIndex + 2);
}

function swapVowel(s) {
	let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	if(s.match("[aeiouAEIOU]")) {
		while(true) {
			let randIndex = Math.floor(Math.random() * s.length);
			if(vowels.includes(s.charAt(randIndex))) {
				return (s.substring(0, randIndex) + vowels[Math.floor(Math.random() * vowels.length)] + s.substring(randIndex + 1));
			}	
		}
	}
	return s;
}

function repeatLetter(s) {
	let randIndex = Math.floor(Math.random() * s.length);
	return s.substring(0, randIndex) + s.charAt(randIndex) + s.charAt(randIndex) + s.substring(randIndex + 1);
}

function messUpWord() {
	var currWord = origWord;
	currWord = repeatLetter(currWord);
	currWord = swapLetters(currWord);
	currWord = swapVowel(currWord);
	textBox.value = currWord;
}

