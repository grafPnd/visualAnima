$(window).on('runAnimation', function(e, data){
	if(data.meta.name == 'cube_move'){
		var
			cube = $('<div>'),
			interval,timeout;
function random(min, max) {
    return Math.random() * (max - min) + min;
}
		$(data.screen).empty().append(cube);
		cube/*centeryse().fadeFromDot()*/.css({background:'red',width:'100px',height:'100px',top:'50%',left:'50%',position:'absolute'});
		interval = setInterval(function(){
			cube.animate({top: random(0,500) + 'px', left: random(0,500)}, data.meta.temp)
		},data.meta.temp);
		timeout = setTimeout(function(){
			clearInterval(interval);
			$(window).trigger('finishedAnimation');
		},data.meta.duration);
	}
})