// Shows or hides the  educontent associated
// with the header clicked
function educontent_visibility() {
	var content = $(this).parent().parent().find(".content");
	if(content.is(":visible")) {
		content.fadeOut();
	}
	else {
		content.fadeIn();
	}
};

// Starts a new unordered list
function appendUl(append_to_id, ul_id) {
  var ul = document.createElement('ul');
  ul.id = ul_id;

  var appendTo = document.getElementById(append_to_id);
  appendTo.appendChild(ul);
};


// Appends a hyperlinked list element to the defined ID
function appendLiA(append_to_id, li_class, li_id, a_href, a_text) {
  var a = document.createElement('a');
  a.href = a_href;
  a.textContent = a_text; 
  
  var li = document.createElement('li');
  if (li_class != "") { li.class = li_class; }
  if (li_id != "") { li.id = li_id; }
  li.appendChild(a);
  
  var appendTo = document.getElementById(append_to_id);
  appendTo.appendChild(li);
};


// Generates the nav bar
function generateNav(active_li) {
	// Basic nav buttons
	navListID = "navList";

	var nav_dictionary = {
		"Homepage": "index.html",
		"Toys & Tools": "toys-and-tools.html",
		"Learning": "education.html",
		"About Me": "about.html"
	};

	appendUl("nav", navListID);
	var navList = document.getElementById(navListID);

	// Appending basic nav buttons
	for (var key in nav_dictionary) {
		var navLink = document.createElement('a');
		navLink.href = nav_dictionary[key];
		navLink.textContent = key;
		
		var navItem = document.createElement('li');
		if (active_li.toLowerCase() === key.toLowerCase()) {
			navItem.className = "active";
		}
		navItem.id = key.toUpperCase();

		navItem.appendChild(navLink);
		navList.appendChild(navItem);
	}

	// Learning --> Education subnav
	eduListID = navListID + "Edu";

	var edu_dictionary = {
		"EE20": "ee20.html",
		"EE40": "ee40.html",
		"EE120": "ee120.html",
		"EE130": "ee130.html"
	}
	appendUl("LEARNING", eduListID);
	var eduList = document.getElementById(eduListID);

	// Appending education nav buttons
	for (var course in edu_dictionary) {
		var eduLink = document.createElement('a');
		eduLink.href = edu_dictionary[course];
		eduLink.textContent = course;

		var eduItem = document.createElement('li');
		eduItem.appendChild(eduLink);
		eduList.appendChild(eduItem);
	}
};



/* Document Ready */
$(function() {
	// Generate nav bar
	$(document).on('ready', function() {
		generateNav(document.body.id);
		// generateFooter();
	})
	

	// class content id intro initially hidden
	// except for that ID'd as "intro"
	var hiddenContent = $(".content").not("#intro");
	hiddenContent.hide();


	$(".content-header").click(educontent_visibility);
});