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
	while(true) {
		let randIndex = randIndexIn(s.substring(0, s.length-1));
		let char1 = s.charAt(randIndex);
		let char2 = s.charAt(randIndex + 1);
		return s.substring(0, randIndex) + 
		makeSameCase(char2, char1) + 
		makeSameCase(char1, char2) + 
		s.substring(randIndex + 2);
	}
	return s;
}

function swapVowel(s) {
	let vowels = ["a", "e", "i", "o", "u"];
	if(s.match("[aeiouAEIOU]")) {
		while(true) {
			let randIndex = randIndexIn(s);
			let randChar = s.charAt(randIndex);
			if(vowels.includes(randChar.toLowerCase())) {
				return (s.substring(0, randIndex) + 
				makeSameCase(randElementOf(vowels), randChar) + 
				s.substring(randIndex + 1));
			}	
		}
	}
	return s;
}

function randIndexIn(string) {
	return Math.floor(Math.random() * string.length);
} 

function randElementOf(array) {
	return  array[Math.floor(Math.random() * array.length)];
}

function makeSameCase(stringToChange, stringWithCase) {
	if(stringToChange.toUpperCase() && stringWithCase.toUpperCase() ) {
		if(stringWithCase == stringWithCase.toUpperCase()) {
			return stringToChange.toUpperCase();
		} else if(stringWithCase == stringWithCase.toLowerCase()) {
			return stringToChange.toLowerCase();
		} 
	}
	return stringToChange;
}

//TODO Switch voiced-unvoiced consonants
//TODO Add a sliding scale of messed-up-ness

function repeatLetter(s) {
	let randIndex = randIndexIn(s);
	randChar = s.charAt(randIndex);
	return s.substring(0, randIndex) + 
	randChar + 
	randChar.toLowerCase() + s.substring(randIndex + 1);
}

function messUpWord() {
	var currString = "";
	let wordArr = origWord.split(" ");
	for(let i = 0; i < wordArr.length; i++) {
		let currWord = wordArr[i];
		currWord = repeatLetter(currWord);
		currWord = swapLetters(currWord);
		currWord = swapVowel(currWord);
		currString += currWord + " ";
	}
	textBox.value = currString;
}

