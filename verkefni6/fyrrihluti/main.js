"use strict";
//Lidur 1
document.getElementsByTagName("DIV")[0].setAttribute("class", "active")
//Liður 2
var eyda = document.getElementById("mainThing");
eyda.lastElementChild.remove();
//Liður 3
var text = document.getElementById("mainThing").firstElementChild.nextElementSibling.innerHTML;
var skipta = text.replace("Gunnar", "Jakob");
document.getElementById("mainThing").firstElementChild.nextElementSibling.innerHTML = skipta;
//Lidur 4 
var x = document.getElementsByTagName("DIV")[0].getAttribute("class");
document.getElementById("mainThing").getElementsByTagName("DIV")[0].innerHTML = "Jóns