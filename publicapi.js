//yugioh api used from https://yugiohprices.docs.apiary.io/#
///................................................................................
//search up the price of a card using name, generates a table
function getPrice(){	
	var request = new XMLHttpRequest();
	var name = document.getElementById("in1").value;
	var specifyPT = document.getElementById("checkPT").checked;
	var printT = document.getElementById("inAd1").value.toLowerCase();
	var specifyR = document.getElementById("checkR").checked;
	var printR = document.getElementById("inAd2").value.toLowerCase();
	request.open('GET', 'http://yugiohprices.com/api/get_card_prices/' + name);
	request.send();
	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
		var resultJSON =  JSON.parse(this.responseText);
		console.log('Status:', this.status);
		console.log('Headers:', this.getAllResponseHeaders());
		console.log('Body:', this.responseText);
		if(resultJSON.status != 'fail'){	
			var x = " ";
			console.log('Data Array Length:', resultJSON.data.length);
			
			//create heading bar for table
			x += "<tr>" + "<th id=pTag><button class=greyButton onclick=printTagButton()><span id=graphInfo>Print Tag</span></button></th>" +  
			"<th>Rarity</th>" + 
			"<th>High Price</th>" + 
			"<th>Low Price</th>" + 
			"<th>Avg Price</th>" + 
			"</tr>";
			
			for(i in resultJSON.data){
				//if the current row of data fails to match advanced settings, skip it
				if(specifyPT == true &&  resultJSON.data[i].print_tag.toLowerCase() != printT){
					continue;
				}	
				if(specifyR == true &&  resultJSON.data[i].rarity.toLowerCase() != printR){
					continue;
				}
					x += "<tr>" + "<td>" + resultJSON.data[i].print_tag + "</td>";
			
					x += "<td>" + resultJSON.data[i].rarity + "</td>"
					if(resultJSON.data[i].price_data.status == 'success' ){	
						console.log('Avg Price:', resultJSON.data[i].price_data.data.prices.average);
						x += "<td>" + resultJSON.data[i].price_data.data.prices.high + "</td>";
						x += "<td>" + resultJSON.data[i].price_data.data.prices.low + "</td>";
						x += "<td>" + resultJSON.data[i].price_data.data.prices.average + "</td>" + "</tr>";
					} else {
						console.log('Avg Price:', 'Price Not Found');
						x += "<td>" + "Price Not Found" + "</td>"
						x += "<td>" + "Price Not Found" + "</td>";
						x += "<td>" + "Price Not Found" + "</td>" + "</tr>";
					}
			}
			document.getElementById("update").innerHTML = x;
		} else {
			console.log('Error, Cannot find that Card');
			document.getElementById("update").innerHTML = "<tr>" + "<th id=errorMsg>Card Not Found</th>" + "</tr>";
		}
		
	  }
	};
}

//Code from w3schools
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionA() {
    document.getElementById("myDropdownAd").classList.toggle("show");
}
