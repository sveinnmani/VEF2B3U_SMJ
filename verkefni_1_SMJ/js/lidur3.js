var listi = ["Mjólk", "Skyr", "Pasta", "Epli", "Brauð"];
var texti = "";
var i;
for (i = 0; i < listi.length; i++) {
  texti += listi[i] + "<br>";
}
document.getElementById("efni").innerHTML = texti;

