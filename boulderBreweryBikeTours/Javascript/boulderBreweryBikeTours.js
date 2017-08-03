

function submitall(){
	var brewA = 0; 
	var	brewB = 1;
	
	var breweries = [document.getElementById("Upslope"), document.getElementById("BRU"), document.getElementById("FATE"), document.getElementById("TwistedPine"), document.getElementById("Sanitas"), document.getElementById("BoulderBeer")];

while (brewA < breweries.length){	

while(brewB < breweries.length){	

	if(breweries[brewA].checked && breweries[brewB].checked) {
		var rBTW = document.getElementById('routeBetween' + brewA + 'And' + brewB).style.display = 'block';
		document.getElementById('directionsBetween' + brewA + 'And' + brewB).style.display = "block";
		brewA = brewB;
		brewB += 1;
	}
	
	else{
		brewB += 1;
	}
	
}

brewA += 1;
brewB = brewA + 1;

}
}

function printPage(){
	window.print();
	
}