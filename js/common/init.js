$(function(){
	var
		jScreen = document.getElementById('j_screen'),
		$window = $(window);
	$window.trigger('seqStart',jScreen);
});