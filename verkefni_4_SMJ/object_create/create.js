function Form()	{
	this.x = 0;
	this.y = 0;
}
Form.prototype.hreyfa = function(x, y)	{
	this.x += x;
	this.y += y;
	//console.info('Form hefur hreyft sig');
}
function Retthyrningur()	{
	Form.call(this);
}
Retthyrningur.prototype = Object.create(Form.prototype);
Retthyrningur.prototype.constructor = Retthyrningur;

var rett = new Retthyrningur();
