$( document ).ready(function() {
  var acc = document.getElementsByClassName("white-block");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});

$ (document ).ready(function() {
  document.onkeyup = function(e) {
      if (e.which == 83 && e.altKey) {
        showSettings();}
      else if (e.which == 80 && e.altKey) {
        openForm();
      }
      else if (e.which == 67 && e.altKey) {
        void(Tawk_API.toggle());
      }
      else if (e.which == 27) {
        try {closeSettings()} catch {console.log("")}
        try {closeForm()} catch {console.log("")}
        try {void(Tawk_API.toggle());} catch {console.log("")}
      }
    
    }
      
      
});
// Progressbar
$(function() {
  $(".progressbar > span").each(function() {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate({
        width: $(this).data("origWidth")
      }, 1200);
  });
});

$(function() {                     
  $(".fontButtonWrapper > .fontsizeOption").click(function() { 
    $(".fontButtonWrapper > .fontsizeOption").removeClass("active");  
    $(this).addClass("active");   
  });
});

$(function() {                     
  $(".fontSizeWrapper > .fontsizeOption").click(function() { 
    $(".fontSizeWrapper > .fontsizeOption").removeClass("active");  
    $(this).addClass("active");   
  });
});

$(function() {                     
  $("#countrySelect > .flagcontainer").click(function() { 
    $("#countrySelect > .flagcontainer").removeClass("active");  
    $(this).addClass("active");   
  });
});
// Store the name of the user in localStorage so that he remains logged in after closing the browser
function login() {
   var name = document.getElementById("name").value
   localStorage.setItem("name", name)
} 
// On load set the stored language fontfamily and fontsize of the user, stores in the localStorage.
$( document ).ready(function() {
  setLanguage(localStorage.getItem("language"))
  setFontFamily(localStorage.getItem("fontfamily"))
  setFontsize(localStorage.getItem("fontsize"))
// If the user has information in his localStorage he will be logged in automatically
   if (localStorage.getItem("name") != "null" && localStorage.getItem("name") != null ) {
    var name = localStorage.getItem("name")
    var g = document.getElementById("graph")
    g.innerHTML = "Hi " + name + ", glad to see you"
    document.getElementById("recommend_register").style.display = 'none';
    document.getElementById("open-button").style.display = 'none';
    document.getElementById("userName").innerHTML = localStorage.getItem("name")
    document.getElementById("userName").style.visibility = 'block';
    document.getElementById("second-button").style.visibility = 'block';
  }
  else {
    document.getElementById("userName").style.visibility = 'hidden';
    document.getElementById("second-button").style.visibility = 'hidden';
    document.getElementById("personal_information").style.display = 'none';
  }
});
// functions to show and hide different DIV, used to show a lot of information in a single-page webapp
function openForm() {
  $("#myForm").slideDown();
}

function closeForm() {
  $("#myForm").slideUp();
}

function openLogout() {
  $("#logOut").slideDown();
}

function closeLogout() {
  $("#logOut").slideUp();
}

function Logout() {
  localStorage.setItem("name", null)
  $("#logOut").slideUp();
}

function showSettings() {
  $("#settingsForm").slideDown();
}

function closeSettings() {
  $("#settingsForm").slideUp();
 
}
// Read out the text
function speechMe(text) {
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

// When "I dont have an account yet" is checked show more than just the username and password so that a user is able to create an account
function changeLogin() {
  var checkBox = document.getElementById("checkBox");
  if (checkBox.checked == true){
    $('.form-container').animate({paddingTop: "30px"});
    document.getElementById("loginRegister").innerHTML = "Register"
    document.getElementById("age").style.display = "block";
    document.getElementById("born").style.display = "block";
    document.getElementById("smoke").style.display = "block";
    document.getElementsByName("name")[0].placeholder = "Username (max 8 characters)"
  } else {
    $('.form-container').animate({paddingTop: "100px"});
    document.getElementById("loginRegister").innerHTML = "Login"
    document.getElementById("age").style.display = "none";
    document.getElementById("born").style.display = "none";
    document.getElementById("smoke").style.display = "none";
    document.getElementsByName("name")[0].placeholder = "Username"

  }
}
// function chat_bot(){
//   var x = document.getElementById("six_blocks");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

//   var y = document.getElementById("title");
//   if (y.innerHTML === "Chat bot") {
//     y.innerHTML = "Prevent A Relapse";
//   } else {
//     y.innerHTML = "Chat bot";
//   }

//   var z = document.getElementById("button");
//   if (z.innerHTML === "Click here to go back to the information screen") {
//     z.innerHTML = "Wanting a cigarette too bad? Click here to live chat";
//   } else {
//     z.innerHTML = "Click here to go back to the information screen";
//   }

//   var c = document.getElementById("chat_bot");
//   if (c.style.display === "block") {
//     c.style.display = "none";
//   } else {
//     c.style.display = "block";
//   }

// }


// Hardcoded one user that is called Maggie, if the username is maggie show some personal information for demonstation purposes
$(document).ready(function(){
  if (localStorage.getItem("name") == "Maggie"){
    var g = document.getElementById("graph")
    g.innerHTML = "<p>Hi Maggie, glad to see you. This is your current progress:</p>"
    var s = document.getElementById("last_smoke")
    s.innerHTML = "<p>You haven't touched a sigarette for 291 days</p>"
    $("#panel-2").html('<p>Quash your urge to smoke by looking through the consequences of smoking on you and you child.</p>\
    <div class=\"innerblock\"><img class=\"innerimg\" src=\"./img/baby.jpg\"/><p>Your child is currenltly less than 1 month old<br>Especially in this period, inhaling secondhand smoke can have severe consequences on your baby.</p></div>\
    <p>Exposure to siggarette smoke has severe implications on infants.<br><br>\
    The most dangerous is the Sudden infant death syndrome (SIDS). Which will lead to a sudden death. Exposure to secondhand smoke can increase this risk.</p>\
    <a class=\"sourcebutton\" href=\"https://www.healthychildren.org/English/health-issues/conditions/tobacco/Pages/Dangers-of-Secondhand-Smoke.aspx\">Source</a><br>\
    <p>Children who breathe secondhand smoke can have more:</p>\
    <ul><li>Ear infections</li><li>Coughs and colds</li><li> Bronchitis or Pneumonia</li><li>Tooth decay</li></ul><br>\
    <a class=\"sourcebutton\" href=\"https://www.healthychildren.org/English/health-issues/conditions/tobacco/Pages/Dangers-of-Secondhand-Smoke.aspx\">Source</a>\
    <p>Secondhand smoke may cause problems for children later in life including:</p>\
    <ul><li>Poor lung development (meaning that their lungs never grow to their full potential)</li><li>Heart disease</li><li>Cataracts (an eye disease)</li></ul>\
    <a class=\"sourcebutton\" href=\"https://www.healthychildren.org/English/health-issues/conditions/tobacco/Pages/Dangers-of-Secondhand-Smoke.aspx\">Source</a><audio controls class="audio"> <source src="audio/Health_consequences_Maggie.mp3" type="audio/mpeg"></audio>');
    $("#panel-3").html('<p><b>You saved 28.000 liter of water. That is a full year of taking showers</b></p><p>Secondhand smoke is the combination of smoke from the burning end of a cigarette and the smoke breathed out by smokers. Secondhand smoke contains more than 7000 chemicals. Hundreds are toxic and about 70 can cause cancer.<br>Secondhand smoke casues numerous health problems for infants and children, including more frequent and severe asthma attacks, respiratory infections, ear infections and sudden infant death syndrome.<br> Smoking during pregnancy results in more than 1000 deaths anually.<br> Some of the health conditions caused by secondhand smoke in adults include coronary heart disease, stroke and lung cancer.</p><audio controls class="audio"><source src="audio/social_Maggie.mp3" type="audio/mpeg"></audio>')
  }
});

// Set the language of a user based on which flag is picked
function setLanguage(language) {
  localStorage.setItem("language", language)
}

// Set the fontsize of a user based on which fontsize is picked
function setFontsize(size) {
  localStorage.setItem("fontsize", size)
  document.body.style.fontSize = size;
  var elements = document.getElementsByClassName('panel');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;}

  var elements = document.getElementsByClassName('white-block');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;}

  var elements = document.getElementsByClassName('btn');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;}

  var elements = document.getElementsByClassName('countryList');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;}

  var elements = document.getElementsByClassName('registerInput');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;}

  try {
    var element = document.getElementById('graph');
    element.style.fontSize = size;

    var element = document.getElementById('last_smoke');
    element.style.fontSize = size;
}
catch {
  console.log("not logged in yet")
}


}

// Set the fontfamily of a user based on which family is picked
function setFontFamily(family) {
  localStorage.setItem("fontfamily", family)
  document.body.style.fontFamily = family;
  var elements = document.getElementsByClassName('panel');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontFamily = family;

  var elements = document.getElementsByClassName('white-block');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontFamily = family;}

  var elements = document.getElementsByClassName('btn');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontFamily = family;}

  var elements = document.getElementsByClassName('countryList');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontFamily = family;}

  var elements = document.getElementsByClassName('registerInput');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontFamily = family;}

  var elements = document.getElementsByClassName('personal_information p');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontFamily = family;}

  try {
      var element = document.getElementById('graph');
      element.style.fontFamily = family;

      var element = document.getElementById('last_smoke');
      element.style.fontFamily = family;
  }
  catch {
    console.log("not logged in yet")
  }
  }
}
// Reset all the settings (language, fontFamily and fontsize) to the settings of the first load.
function resetSettings() {
  localStorage.setItem("language",'english')
  localStorage.setItem("fontfamily", 'Helvetica')
  localStorage.setItem("fontsize", 'inital')
  location.reload()
}