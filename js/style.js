function showHide() {
	if($("p").is(":visible")) {
		($("p")).hide();
	}
	else{
		($("p")).show();
	}
};

$(function() {
	/* 
	 */
	$("#ee40").click(showHide);
});

// function myHide() {
// 	$(this).hide();
// }