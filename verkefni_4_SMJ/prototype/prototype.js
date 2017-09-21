function Geimskip(name, life, speed)
{
	this.name = name;
	this.life = life;
	this.speed = speed;
}
var SkotSkip = {
	name: "GunShip",
	life: 5,
	speed: 5,
	shoot: function() {life = life - 1}
};
var flaug1 = new Geimskip("SpaceRacer", 10);
var flaug2 = new Geimskip("RaceSpacer", 10);
var flaug3 = new Geimskip("SpaceCar", 10);

Geimskip.prototype.showName = function()	{
	return `<div class="geimskip">
    <p>Nafn: ${this.name}<br>
    líf: ${this.life}<br> 
    hraði: ${this.speed}</p>   
  </div>`
}
Geimskip.prototype.fly = function() {
	this.speed = 5;
	return this.speed += 1;
}
spaceracer = document.getElementById('main');
flaug1.fly();
spaceracer.innerHTML = flaug1.showName();
