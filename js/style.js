function 

// Show or hide upon click
function showHide() {
	if($("p").is(":visible")) {
		($("p")).hide();
	}
	else{
		($("p")).show();
	}
};


/* Document Ready */
$(function() {
	/* 
	 */
	$("#ee40").click(showHide);
});

// function myHide() {
// 	$(this).hide();
// }