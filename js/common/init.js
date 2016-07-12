$(function(){
	var
		screen = document.getElementById('j_screen'),
		fig = [document.createElement('div'), document.createElement('div')], //hardcoded number of oneTime- existing animated objects
		fl = fig.length,
		i = 0;
	for(i; i < fl; i++){
		screen.appendChild(fig[i]);
	}
	$(window).trigger('seqStart', {master: {screen: screen, fig: fig}});
});