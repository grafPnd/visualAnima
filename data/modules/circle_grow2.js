$(window).on('runAnimation', function(e, data){
	if(data.name == 'circle_grow2'){
		console.log('circle script2');
		var
			w = 0, 
			h = 0, 
			op = 1,
			ml,mt,br;
		data.master.fig[0].appendStyle({background: 'red', opacity: op, width:  w + 'px', height: h + 'px', top: '50%', left: '50%', marginTop: -mt + 'px', marginLeft: -ml + 'px', position: 'absolute'});
		data.master.runner = setInterval(function(){
				w ++;
				h ++;
				op -=0.002;
				ml = w/2;
				mt = h/2;
				br = w/2;
				data.master.fig[0].appendStyle({opacity: op, width: w + 'px', height: h + 'px', marginTop: -mt + 'px', marginLeft: -ml + 'px', borderRadius: br + 'px'})	
		},data.temp);
		data.master.duration = setTimeout(function(){
			clearInterval(data.master.runner);
			$(window).trigger('finishedAnimation');
		},data.duration);
	}
	$(window).off('runAnimation');
})