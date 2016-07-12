$(function(){
	//TODO: sequence получать при загрузке файла, а не как глобальную переменную
	//master вынести в глобалку 
	var 
		$window = $(window),
		master,
		seqScript = document.createElement('script'),
		screenScript,
		counter = 0,
		max,
		loadScreen = function(meta){
			if(screenScript && screenScript.parentNode){
				screenScript.parentNode.removeChild(screenScript);
			}
			screenScript = document.createElement('script')
			document.head.appendChild(screenScript);
			meta.master = master;
			screenScript.src = 'data/modules/' + meta.name + '.js';
			screenScript.onload = function(){
				$window.trigger('runAnimation', meta)
			}
		},
		next = function(){
			counter = counter < max - 1 ? counter + 1 : 0;
			loadScreen(sequence[counter]);
		};
	
	$window.on('seqStart', function(e, data){
		seqScript.src = 'data/sequence.json';
		document.head.appendChild(seqScript);
		master = data.master;
		seqScript.onload = function(){
			max = sequence.length;
			loadScreen(sequence[counter]);
		}
		$(document.body).on('keypress', function(e){
			if(e.which == 32){
				next();
			}
		})
		$(window).on('finishedAnimation',function(){
			if(2==2){//autoplay
				next();
			}
		})
	})
})