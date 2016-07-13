$(window).on('runAnimation', function(e, data){
	if(data.name == 'circle_grow4'){
		// console.log('anim4')
		var
			w = parseInt(data.master.fig[0].style.width, 10), 
			h = parseInt(data.master.fig[0].style.height, 10), 
			op = 0,
			ml,mt,br;
		setDeathTime(data);	
		if(!data.master.fig[3]){
			data.master.fig[3] = document.createElement('div');
			data.master.fig[1].appendChild(data.master.fig[3]);
		}
		data.master.fig[3].appendStyle({position: 'absolute', display:'block', width: '100%', height: '100%', background: 'url(img/tile.png) repeat'});
		data.master.fig[1].appendStyle({background: 'red', overflow: 'hidden', opacity: op, width:  w + 'px', height: h + 'px', top: '50%', left: '50%', marginTop: -mt + 'px', marginLeft: -ml + 'px', position: 'absolute'});
		data.master.runner = setInterval(function(){
			if(deathtime(data)){
				clearInterval(data.master.runner);
				data.master.fig[3].appendStyle({display: 'none'});
				$(window).trigger('finishedAnimation');
			}else{
				w --;
				h --;
				op +=0.002;
				ml = w/2;
				mt = h/2;
				br = w/2;
				data.master.fig[1].appendStyle({opacity: op, width: w + 'px', height: h + 'px', marginTop: -mt + 'px', marginLeft: -ml + 'px', borderRadius: br + 'px'})
			}
		},data.temp);
	}
	$(window).off('runAnimation');
})