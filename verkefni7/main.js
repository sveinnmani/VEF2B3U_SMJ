"use strict";

function BreytaLit0()	{
	document.getElementById("val0").style.color = "red";
}
function BreytaLit1()	{
	document.getElementById("val1").style.color = "red";
}
function BreytaLit2()	{
	document.getElementById("val2").style.color = "red";
}
function BreytaLit3()	{
	document.getElementById("val3").style.color = "red";
}
function SynaSpurningu(spurning, htmltaggid)	{
	var SaekjaSpurningu = window.document.getElementById(htmltaggid);
	var Quiz = "<h3>" + spurning.Spurning + "</h3>";

	Quiz += "<div>";

	for (var key in spurning.Valmoguleikar)
	{
		//Quiz += "<div class='button' id=\"val" + key + "\">" + spurning.Valmoguleikar[key] + "</div>";
		Quiz += "<div onclick='BreytaLit" + key + "()' class='button' id=\"val" + key + "\">" + spurning.Valmoguleikar[key] + "</div>";
	}
	

	Quiz += "</div>";

	SaekjaSpurningu.innerHTML = Quiz;
}

var spurning1 = {
	Spurning: "Hvaða stafur er fremmst í stafrófinu?",
	Valmoguleikar: ["A", "B", "C", "D"],
	Svar: 1
};
var spurning2 = {
	Spurning: "HGG",
	Valmoguleikar: ["gh", "jg"],
	Svar: 0
};
var spurning3 = {
	Spurning: "Hmm?",
	Valmoguleikar: ["A", "B", "C"],
	Svar: 1
};
var spurning4 = {
	Spurning: "HGG",
	Valmoguleikar: ["gh", "jg"],
	Svar: 0
};
var spurning5 = {
	Spurning: "Hmm?",
	Valmoguleikar: ["A", "B", "C", "D"],
	Svar: 1
};
var spurning6 = {
	Spurning: "HGG",
	Valmoguleikar: ["gh", "jg"],
	Svar: 0
};
SynaSpurningu(spurning1, "question1");