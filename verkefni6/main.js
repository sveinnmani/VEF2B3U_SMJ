"use strict";
//Pizza
var divPizza = document.createElement("DIV");
divPizza.className = "pizza";
//Pizza name
var divPizzaName = document.createElement("DIV");
divPizzaName.className = "pizzaName";
var textPizzaName = document.createTextNode("Pizza with tons of pepperoni");
//Size
var divSize = document.createElement("DIV");
divSize.className = "size";
var textSize = document.createTextNode("L");
//Price
var divPrice = document.createElement("DIV");
divPrice.className = "price";
var textPrice = document.createTextNode("2000");
//ToppingContainer
var divToppingCont = document.createElement("DIV");
divToppingCont.className = "ToppingContainer";
//Toppings
var spanTopping1 = document.createElement("SPAN");
spanTopping1.className = "topping";
var textTopping1 = document.createTextNode("Pepperoni & ");
var spanTopping2 = document.createElement("SPAN");
spanTopping2.className = "topping";
var textTopping2 = document.createTextNode("Pepperoni & ");
var spanTopping3 = document.createElement("SPAN");
spanTopping3.className = "topping";
var textTopping3 = document.createTextNode("Cheddar");

//divPizza
document.getElementById("mainThing").appendChild(divPizza);
//divPizzaName
divPizzaName.appendChild(textPizzaName);
document.getElementById("mainThing").appendChild(divPizzaName);
//divSize
divSize.appendChild(textSize);
document.getElementById("mainThing").appendChild(divSize);
//divPrice
divPrice.appendChild(textPrice);
document.getElementById("mainThing").appendChild(divPrice);
//divToppingContainer
document.getElementById("mainThing").appendChild(divToppingCont);
//spanTopping
spanTopping1.appendChild(textTopping1);
document.getElementById("mainThing").appendChild(spanTopping1);
spanTopping2.appendChild(textTopping2);
document.getElementById("mainThing").appendChild(spanTopping2);
spanTopping3.appendChild(textTopping3);
document.getElementById("mainThing").appendChild(spanTopping3);
