"use strict";
function SynaSpurningu(spurning, htmltaggid)	{
	var SaekjaSpurningu = window.document.getElementById(htmltaggid);
	var Quiz = "<h3>" + spurning.Spurning + "</h3>";

	Quiz += "<div>";

	for (var key in spurning.Valmoguleikar)
	{
		Quiz += "<div class='button'>" + spurning.Valmoguleikar[key] + "</div>";
	}
	

	Quiz += "</div>";

	SaekjaSpurningu.innerHTML = Quiz;
}

var spurning1 = {
	Spurning: "Hmm?",
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
SynaSpurningu(spurning2, "question2");
SynaSpurningu(spurning3, "question3");
SynaSpurningu(spurning4, "question4");
SynaSpurningu(spurning5, "question5");
SynaSpurningu(spurning6, "question6");

//document.getElementById("question1").addEventListeners("click", BreytaLit, false);

//HTML event handler
//DOM event handler, síðasta sem maður gerir
//Event Listeners