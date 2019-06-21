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
  var msg = new SpeechSynthesisUtterance(document.getElementById(text).innerHTML);
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
    g.innerHTML = "Hi Maggie, glad to see you. This is your current progress:"
    var s = document.getElementById("last_smoke")
    s.innerHTML = "You haven't touched a sigarette for 291 days"
    $("#panel-2").html("<p>Quash your urge to smoke by looking through the consequences of smoking on you and you child.</p>\
    <div class=\"innerblock\"><img class=\"innerimg\" src=\"./img/baby.jpg\"/><p>Your child is currenltly less than 1 month old<br>Especially in this period, inhaling secondhand smoke can have severe consequences on your baby.</p></div>\
    <p>Exposure to siggarette smoke has severe implications on infants.<br><br>\
    The most dangerous is the Sudden infant death syndrome (SIDS). Which will lead to a sudden death. Exposure to second hand smoke can increase this risk.\
    <a class=\"sourcebutton\" href=\"https://www.healthychildren.org/English/health-issues/conditions/tobacco/Pages/Dangers-of-Secondhand-Smoke.aspx\">Source</a><br><br>\
    Children who breathe secondhand smoke can have more: Ear infections Coughs and colds Bronchitis or Pneumonia Tooth decay ")
    // var a = document.getElementById("age_baby")
    // a.innerHTML = "Therefore, you and your baby are healthy"
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
}
}
// Reset all the settings (language, fontFamily and fontsize) to the settings of the first load.
function resetSettings() {
  localStorage.setItem("language",'english')
  localStorage.setItem("fontfamily", 'Helvetica')
  localStorage.setItem("fontsize", 'inital')
  location.reload()
}