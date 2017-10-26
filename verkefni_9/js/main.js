"use strict";
function SynaSpurningu(spurning, htmltaggid)	{
	var SaekjaSpurningu = window.document.getElementById(htmltaggid);
	var Quiz = "<h3>" + spurning.Spurning + "</h3>";

	Quiz += "<div>";

	for (var key in spurning.Valmoguleikar)
	{
		//Quiz += "<div class='button' id=\"val" + key + "\">" + spurning.Valmoguleikar[key] + "</div>";
		Quiz += "<div class='button' id=\"val" + key + "\">" + spurning.Valmoguleikar[key] + "</div>";
	}
	

	Quiz += "</div>";

	SaekjaSpurningu.innerHTML = Quiz;
}

var spurning1 = {
	Spurning: "Hvaða stafur er fremst í stafrófinu?",
	Valmoguleikar: ["A", "B", "C", "D"],
	Svar: 1
};
var spurning2 = {
	Spurning: "HGG",
	Valmoguleikar: ["gh", "jg"],
	Svar: 0
};
SynaSpurningu(spurning1, "question1");
SynaSpurningu(spurning2, "question2");