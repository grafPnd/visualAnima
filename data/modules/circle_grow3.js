$(window).on('runAnimation', function(e, data){
	if(data.name == 'circle_grow3'){
		// console.log('anim3')
		var
			w = 0, 
			h = 0, 
			op = 1,
			ml,mt,br;
		setDeathTime(data);	
		if(!data.master.fig[2]){
			data.master.fig[2] = document.createElement('div');
			data.master.fig[0].appendChild(data.master.fig[2]);
		}
		data.master.fig[2].appendStyle({position: 'absolute', display: 'block', width: '100%', height: '100%', background: 'url(img/tile.png) repeat'});
		data.master.fig[0].appendStyle({background: 'green', overflow: 'hidden', opacity: op, width:  w + 'px', height: h + 'px', top: '50%', left: '50%', marginTop: -mt + 'px', marginLeft: -ml + 'px', position: 'absolute'});
		data.master.runner = setInterval(function(){
			if(deathtime(data)){
				clearInterval(data.master.runner);
				data.master.fig[2].appendStyle({display: 'none'});
				$(window).trigger('finishedAnimation');
			}else{
				w ++;
				h ++;
				op -=0.002;
				ml = w/2;
				mt = h/2;
				br = w/2;
				data.master.fig[0].appendStyle({opacity: op, width: w + 'px', height: h + 'px', marginTop: -mt + 'px', marginLeft: -ml + 'px', borderRadius: br + 'px'})
			}
		},data.temp);
	}
	$(window).off('runAnimation');
})