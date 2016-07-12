$(window).on('runAnimation', function(e, data){
	if(data.name == 'cube_move'){
		console.log('cube script');
		data.master.fig[0]/*centeryse().fadeFromDot()*/.appendStyle({background:'red',width:'100px',height:'100px',top:'50%',left:'50%',position:'absolute',borderRadius:0});
		data.master.runner = setInterval(function(){
			data.master.fig[0].appendStyle({top: rand(0,500) + 'px', left: rand(0,500)})
		},data.temp);
		data.master.duration = setTimeout(function(){
			clearInterval(data.master.runner);
			$(window).trigger('finishedAnimation');
		},data.duration);
	}
	$(window).off('runAnimation');
})