$( document ).ready(function() {
    var coll = document.getElementsByClassName("white-block");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
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
    document.getElementById("open-button").style.visibility = 'hidden';
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
  } else {
    document.getElementById("loginRegister").innerHTML = "Login"
    document.getElementById("age").style.display = "none";
    document.getElementById("born").style.display = "none";
    document.getElementById("smoke").style.display = "none";

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