$(function(){
	//TODO: sequence получать при загрузке файла, а не как глобальную переменную
	var 
		$window = $(window),
		seqScript = document.createElement('script'),
		screenScript,
		counter = 0,
		max,
		loadScreen = function(screen, meta){
			if(screenScript && screenScript.parentNode){
				screenScript.parentNode.removeChild(screenScript);
			}
			screenScript = document.createElement('script')
			document.head.appendChild(screenScript);
			screenScript.src = 'data/modules/' + meta.name + '.js';
			screenScript.onload = function(){
				$window.trigger('runAnimation', {screen: screen, meta: meta})
			}
		},
		next = function(screen){
			counter = counter < max - 1 ? counter + 1 : 0;
			loadScreen(screen, sequence[counter]);
		};
	
	$window.on('seqStart', function(e, screen){
		seqScript.src = 'data/sequence.json';
		document.head.appendChild(seqScript);
		
		seqScript.onload = function(){
			max = sequence.length;
			loadScreen(screen, sequence[counter]);
		}
		$(document.body).on('keypress', function(e){
			if(e.which == 32){
				next(screen);
			}
		})
		$(window).on('finishedAnimation',function(){
			if(2==2){//autoplay
				next(screen);
			}
		})
	})
})