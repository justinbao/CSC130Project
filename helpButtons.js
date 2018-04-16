//controls the help buttons
function printTagButton() {
	var x = " ";
	x += "<button class=greyButton onclick=printTagButtonReset()><span id=graphInfo>Print Tag</span></button></br>" +
	"<span>Each Print Tag Signifies a Unique Variant of a Card</span>";
	document.getElementById("pTag").innerHTML = x;
}
function printTagButtonReset() {
	var x = " ";
	x += "<button class=greyButton class=greyButton onclick=printTagButton()><span id=graphInfo>Print Tag</span></button></br>";
	document.getElementById("pTag").innerHTML = x;
}
