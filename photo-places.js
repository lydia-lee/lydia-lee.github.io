var places = {
	fin_1: "<h4>Temppeliaukion Church, Helsinki, Finland</h4><p>Quite the lovely church built into solid rock.</p>",
	fin_2: "<h4>Sibelius Monument, Helsinki, Finland</h4><p>While taking this, a group of East Asian tourists was socializing with a group of local guys playing football. The two groups seemed to find the other adorable.</p>",
	fin_3: "<h4>Suomenlinna, Helsinki, Finland</h4><p>Maybe people don't get up early on some days, but the fortress, in spite of being a tourist attraction, was surprisingly empty.</p>",
	nor_1: "<h4>Aurlandsfjorden, Norway</h4><p>The view from the pier outside the hotel.</p>",
	swd_1: "<h4>Somewhere between Helsinki and Stockholm</h4><p>During the summer months, the sun sets only briefly before rising again a couple horus later in northern Europe. This was taken around 2AM.</p>",
	swd_2: "<h4>Somehwere near Stockholm</h4><p>Clean water, clean air, and blue all around.</p>"
};

for (var pic in places) {
	var caption = places[pic];
	document.write('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-places/'
		+ pic
		+ '.jpg" data-sub-html="'
		+ caption
		+ '"><a href="#"><img src="images/small-places/'
        + pic
        + '.jpg" alt="IMage" class="img-fluid"></a></div>');
}