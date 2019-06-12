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
   alert(localStorage.getItem("name"))
} 

$( document ).ready(function() {
   if (localStorage.getItem("name") != "null") {
    document.getElementById("open-button").style.visibility = 'hidden';
    document.getElementById("userName").innerHTML = localStorage.getItem("name")
    document.getElementById("userName").style.visibility = 'block';
  }
});
