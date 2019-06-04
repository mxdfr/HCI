function type(typeOf) {
	//Remove current active divs and display new
	var div = document.getElementById('container');
	div.removeChild(document.getElementById('initialCustomer'));
	div.removeChild(document.getElementById('initialPartner'));
	document.getElementById('smoking').style.display = 'block';
	document.getElementById('notSmoking').style.display = 'block';
	//Set storage of the variable typeOf
	sessionStorage.setItem("typeOf", typeOf);
}

function smoking(status) {
	//Set storage of the variable smokingStatus
	sessionStorage.setItem("smokingStatus", status)
	//Remove current active divs and display new
	var div = document.getElementById('container');
	div.removeChild(document.getElementById('smoking'));
	div.removeChild(document.getElementById('notSmoking'));
	//Check whether the typeOf is customer of partner and based on that replace current active divs with new div
	if (sessionStorage.getItem("typeOf") == "customer") {
		var div = document.getElementById('container');
		document.getElementById('custPregnant').style.display = 'block';
		document.getElementById('custBorn').style.display = 'block';
	}
	else {
		var div = document.getElementById('container');
		document.getElementById('finishScreen').style.display = 'block';
		//Call the function loadFinal
		loadFinal();
	}
}

function pregnant(status) {
	//Set storage of the variable pregnantStatus
	sessionStorage.setItem("pregnantStatus", status);
	//Remove current active divs and display new
	var div = document.getElementById('container');
	div.removeChild(document.getElementById('custPregnant'));
	div.removeChild(document.getElementById('custBorn'));
	document.getElementById('finishScreen').style.display = 'block';
	//Call the function loadFinal
	loadFinal();
}


window.onload = function(){sessionStorage.clear();}

function loadFinal() {
	//Change the content of the div finishscreen based on the profile of the user
	//Six possible scenarios are checked
	if(sessionStorage.getItem('typeOf') == 'customer') {
		if(sessionStorage.getItem('smokingStatus') == 'yes') {
			if(sessionStorage.getItem('pregnantStatus') == 'yes') {
				//Someone that is currently pregnant and smoking
				document.getElementById('finishScreen').innerHTML += '<br>Pragnent and smoking'
			}
			else {
				//Someone that is post-pregnant and smoking
				document.getElementById('finishScreen').innerHTML += '<br>Post-pragnent and smoking'
			}
		}
		else {			
			if(sessionStorage.getItem('pregnantStatus') == 'yes') {
				//Someone that is currently pregnant and not smoking
				document.getElementById('finishScreen').innerHTML += '<br>Pragnent and not smoking'
			}
			else {
				//Someone that is post=pregnant and not smoking
				document.getElementById('finishScreen').innerHTML += '<br>Post-pragnent and not smoking'
			}
		}

	}
	else {
		if(sessionStorage.getItem('smokingStatus') == 'yes') {
			//A partner that is smoking
			document.getElementById('finishScreen').innerHTML += '<br>Partner and smoking'
		}
		else {
			//A partner that is not smoking
			document.getElementById('finishScreen').innerHTML += '<br>Partner and not smoking'
		}
	}
}