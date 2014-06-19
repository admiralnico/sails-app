$(function(){
	//parallax
    $('.intro').each(function() {
    	console.log($(this));
        $(this).parallax('50%', 0.3, true);
    });
	
});