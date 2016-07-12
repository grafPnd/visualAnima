function rand(min, max) {
    return Math.random() * (max - min) + min;
}
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
Object.prototype.appendStyle = function(namespace){
	for(var i in namespace){
		this.style[i] = namespace[i];
	}
}