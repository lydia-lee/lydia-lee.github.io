// Shows or hides the  educontent associated
// with the header clicked
function educontent_visibility() {
	var content = $(this).parent().parent().find(".content");
	if(content.is(":visible")) {
		content.hide();
	}
	else{
		content.show();
	}
};


/* Document Ready */
$(function() {
	/* 
	 */
	$(".content-header").click(educontent_visibility);
});

// function myHide() {
// 	$(this).hide();
// }