/*Nina Kong*/
$(document).ready(function(){
	var windowHeight = $( window ).height();
	$("#Content").height(windowHeight);

    $("div[id=Content]").css("padding", "5em"); 

    $("a[class]").css("font-size", "2.5em");

    $("a[id^=icon]").css("color", "#b26c34"); 

    $("a[id^=icon][lang^=en-]").css("color", "#eba96d"); 

});
