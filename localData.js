var g;

function processData(myData) {
	console.log("Test", myData[0]);	
	console.log("Test", myData);	
	g = myData;
}
// use the jQuery library to grab the data from our spreadsheet API and call processData(myData)
$(document).ready(function() {
	$.getJSON("http://danycabrera.com/csc130/proxy.php?key=1mlKxiMj-HFxGZIqHtQg_v9r3ilggkBxI5HSsRKPL4tQ&sheet=MAINSHEET", processData);
});

function searchBySet(){
	var name = document.getElementById("in1").value;
	name = name.toLowerCase();
	console.log("Test", name);
	var j = 0;
	for(i in g){
		console.log("Find", g[i].Card_Set);
		if(name == g[i].Card_Set){
			break;
		}
		j++;
	}
	var x = " ";
	if(j == g.length){ //if the card is not found, print out a message
		x += "<div id=errorMsg class=centerText>Card Set not found</div>";
	} else { //if the card is found, print out correct info
		x += "<img src=" + g[j].Image + " class=center style=max-width:25%;max-height:40%;></br>";
		x += "<table border=1 style=width:100%;><tr><th>Can be aquired from: </th></tr>";
		if(g[j].Walmart != "No"){
			x += "<tr><th>Walmart</th></tr>";
		}
		if(g[j].Best_Buy != "No"){
			x += "<tr><th>Best Buy</th></tr>";
		}
		if(g[j].Toys_R_Us != "No"){
			x += "<tr><th>Toys R Us</th></tr>";
		}
		x += "</table>";
	}
	document.getElementById("img").innerHTML = x;	
}

//search for all card sets pertaining to the given retail store
function searchByStore(){
	var name = document.getElementById("in1").value;
	name = name.toUpperCase();
	var x = " ";
	x += "<table border=1 style=width:100%;><tr><th> " + name + " Card Sets</th></tr>";
	name = name.toLowerCase();
	
	var letter = name.charAt(0);
	//go through each row, check if the given store has it
	var check = 0;
	for(i in g){
		if(g[i].Walmart != "No" && g[i].Walmart == name){
			check = 1;
			x += "<tr><td>" + g[i].Card_Set + "</td></tr>";
		} else if(g[i].Best_Buy != "No" && g[i].Best_Buy == name){
			check = 1;
			x += "<tr><td>" + g[i].Card_Set + "</td></tr>";
		} else if((g[i].Toys_R_Us != "No" && g[i].Toys_R_Us == name)){
			check = 1;
			x += "<tr><td>" + g[i].Card_Set + "</td></tr>";
		}
		if(i == (g.length - 1) && check == 0){
			document.getElementById("img").innerHTML = " <div id=errorMsg class=centerText>Store not found</div>";
			return;
		}
	}
	
	document.getElementById("img").innerHTML = x;	
}
