// Shows or hides the  educontent associated
// with the header clicked
function educontent_visibility() {
	var content = $(this).parent().parent().find(".content");
	if(content.is(":visible")) {
		content.fadeOut();
	}
	else{
		content.fadeIn();
	}
};


/* Document Ready */
$(function() {
	// class content id intro initially hidden
	var hiddenContent = $(".content").not("#intro");
	hiddenContent.hide();


	$(".content-header").click(educontent_visibility);
});