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
function setDeathTime(data){
	data.master.deathTime = Date.now() + data.duration;
	// data.duration;
	// data.master
	// console.log('death:',data.master.deathTime)
}
function deathtime(data){
	// console.log('now-', Date.now(), 'death-', data.master.deathTime)
	return Date.now() >= data.master.deathTime;
}