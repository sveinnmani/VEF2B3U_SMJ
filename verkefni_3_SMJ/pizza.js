//var listi1 = document.getElementById("list1");

var Pizza = {
	heiti: "",
	verd: 0,
	staerd: ["Lítil", "Miðlungs", "Stór"],
	alegg: ["Ostur", "Skinka", "Nautahakk", "Pepperoni", "Ananas", "Oregano"]
};

var pizza1 = Pizza;
pizza1.heiti = "Magherita";
pizza1.verd = 1050;
//pizza1.staerd[0];
//pizza1.alegg[0, 5];

var pizza2 = Pizza;
pizza2.heiti = "Pepperoni";
pizza2.verd = 1550;
pizza2.staerd = [1];
pizza2.alegg = [0, 3];

//list1.textContent = pizza1.heiti + " " + pizza1.staerd[0] + " " + pizza1.alegg[0, 5] + " " + pizza1.verd + "kr.";
//list1.textContent.innerHTML = Pizza.heiti + " " + Pizza.staerd[0] + " " + Pizza.alegg[0, 5] + " " + Pizza.verd + "kr.";
//document.getElementById("list1").innerHTML = pizza1.heiti + " " + pizza1.staerd[0] + " " + pizza1.alegg[0, 5] + " " + pizza1.verd + "kr.";
document.getElementById("list1").innerHTML = pizza1.heiti + " " + Pizza.staerd[0] + " " +Pizza.alegg[0] + " " + pizza1.verd + "kr.";  