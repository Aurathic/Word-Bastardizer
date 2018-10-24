var orig = "Test val";
var title = document.getElementById("title");
var textBox = document.getElementById('input');

function changeOriginalWord() {
	orig = textBox.value;
}

function messUpWord() {
	// test code
	title.innerHTML = orig;
}