//return to home page
function gotoHome(){
	var x = " ";
	x += "<button onclick =gotoFindPrice() style=width:100%;padding:16px;>Find Card Price</button></br>" +
		"<button onclick=gotoFindRetail() style=width:100%;padding:16px;>Find Retail Card Sets</button></br>"+
		"</br></br></br></br></br>"+
		"<h1 class=centerText style=top:50%;>Yu-Gi-Oh Card Price Buddy</h1>"+
		"<img class=centerImg src=https://upload.wikimedia.org/wikipedia/commons/4/48/Yu-Gi"+
		"-Oh%21_icon.png width=290px; height=200px;>";

	document.getElementById("main").innerHTML = x;
}

//creates Card price search page
function gotoFindPrice(){
	var x = " ";
	x += "<button onclick =gotoHome() style=width:50%;padding:16px;>HOME</button>" + 
			
			//Help button dropdown
			"<div class=dropdown style=width:50%;> "+
			"<button onclick=myFunction() class=dropbtn style=width:100%;>Help</button>" +
			 "<div id=myDropdown class=dropdown-content style=width:100%;>" +
				"<p class=centerText>Enter the name of a YuGiOh card to get its price</p>" +
			 "</div></div></br>" +
			 
			//search bar 
			"<input type=string id =in1 style=width:73%;>" +
			"<button onclick=getPrice() id=findPriceB style=width:24.8%;>Find Price</button></br>" +
			
			//advanced menu dropdown
			"<div class=dropdown style=width:100%;border-style:solid;border-width:1px;>"+
			"<button onclick=myFunctionA() class=dropbtn style=width:100%;>Advanced</button>" +
			 "<div id=myDropdownAd class=dropdown-content style=width:100%;>" +
				"<span></span></br>"+
				"<div class=centerText><input type=string id =inAd1></br>" +
				"<input type=checkbox id=checkPT>Specify Print Tag</div></br>" +
				"<span></span></br>"+
				"<div class=centerText><input type=string id =inAd2></br>" +
				"<input type=checkbox id=checkR>Specify Print Rarity</div></br>" +
				"<span></span></br>"+
			 "</div></div>" +
			
			"<table id=update style=width:100%;></table>";
	document.getElementById("main").innerHTML = x;
}

//create Retail Sets page
function gotoFindRetail(){
	var x = " ";
	x += "<button onclick=gotoHome() style=width:50%;>HOME</button>" +
			
			//Help button dropdown
			"<div class=dropdown style=width:50%;>"+
			"<button onclick=myFunction() class=dropbtn style=width:100%;>Help</button>" +
			 "<div id=myDropdown class=dropdown-content style=width:100%;>" +
				"<p class=centerText>Search for a specific card set or get a list " +
				"of all avalible card sets from a specific store</p></br>" +
				"<p class=centerText style=font-style:italic;>Note: Only has data for Toys R Us, Walmart, and Best Buy</p></br>" +
			 "</div></div></br>" +
			 
	"<input type=string id =in1 style=width:98%;></br>" +
	"<button onclick =searchBySet() style=width:50%;>Search Set</button>" +
	"<button onclick =searchByStore() style=width:50%;>Search by Store</button></br>" +
	"<p style=align-content:center; id=img></p>";
	document.getElementById("main").innerHTML = x;
}
