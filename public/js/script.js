$( document ).ready(function() {
  var acc = document.getElementsByClassName("accordion");
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

function login() {
   var name = document.getElementById("name").value
   localStorage.setItem("name", name)
} 

$( document ).ready(function() {
   if (localStorage.getItem("name") != "null") {
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

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openLogout() {
  document.getElementById("logOut").style.display = "block";
}

function closeLogout() {
  document.getElementById("logOut").style.display = "none";
}

function Logout() {
  localStorage.setItem("name", null)
  document.getElementById("logOut").style.display = "none";
}

function showSettings() {
  document.getElementById("settingsForm").style.display = "block";
}

function closeSettings() {
  document.getElementById("settingsForm").style.display = "none";

}

function speechMe(text) {
  var msg = new SpeechSynthesisUtterance(document.getElementById(text).innerHTML);
  window.speechSynthesis.speak(msg);
}

function changeLogin() {
  var checkBox = document.getElementById("checkBox");
  if (checkBox.checked == true){
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

$(document).ready(function(){
  if (localStorage.getItem("name") == "Maggie"){
    var g = document.getElementById("graph")
    g.innerHTML = "Hi Maggie, glad to see you. This is your current progress:"
    var s = document.getElementById("last_smoke")
    s.innerHTML = "You have not smoked for 24 days! :)"
    var a = document.getElementById("age_baby")
    a.innerHTML = "Therefore, you and your baby are healthy"
  }
});

function setCountry() {
  var x = document.getElementById("countrySelect");
  var selectedCountry = x.options[x.selectedIndex].value;
  localStorage.setItem("language", selectedCountry);
}

function setFontsize(size) {
  localStorage.setItem("fontsize", size)
  var elements = document.getElementsByClassName('panel');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;

  var elements = document.getElementsByClassName('accordion');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;}
}}

function setFontFamily(family) {
  localStorage.setItem("fontfamily", family)
  var elements = document.getElementsByClassName('panel');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontFamily = family;

  var elements = document.getElementsByClassName('accordion');
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;}
}
}
