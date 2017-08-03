/**********************
Create a Hamburger Drop Down Menu
***********************/

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});



/**********************************
function for fading in and out buttons
***********************************/
function buttonFader (buttonMask) {
	$(buttonMask).stop().fadeIn(200);	
	$(buttonMask).mouseleave(function(){
	$(buttonMask).fadeOut(200);});
};

