$(window).on('runAnimation', function(e, data){
	if(data.meta.name == 'circle_grow'){
		var
			cube = $('<div>'),
			w = 100, h = 100, ml,mt,br,
			interval,timeout;
function random(min, max) {
    return Math.random() * (max - min) + min;
}
		$(data.screen).empty().append(cube);
		cube.css({background:'green',width:w+'px',height:h+'px', top:'50%', left:'50%', marginTop:-mt+'px', marginLeft:-ml+'px',position:'absolute'});
		interval = setInterval(function(){
			w ++;
			h ++;
			ml = w/2;
			mt = h/2;
			br = w/2
			cube.animate({width:w+'px',height:h+'px', marginTop:-mt+'px', marginLeft:-ml+'px',borderRadius: br+'px'}, data.meta.temp)
		},data.meta.temp);
		timeout = setTimeout(function(){
			clearInterval(interval);
			$(window).trigger('finishedAnimation');
		},data.meta.duration);
	}
})