var animal = {
	nor_cat1: "<h4>Aurlandsfjord, Norway</h4><p>A very friendly (and photogenic) cat hanging out by the pier.</p>",
	nor_cow1: "<h4>Aurlandsfjord, Norway</h4><p>A very content highland cow. The particular breed originates from Scotland.</p>",
	nor_sparrow1: "<h4>Aurlandsfjord, Norway</h4><p>Poor bug(ger). The sparrows were loving combing through the tall grass for insects.</p>",
	oak_hum1: "<h4>Oakland Zoo, Oakland, California</h4><p>This small fellow (species still unknown) was a fellow visitor at the Oakland Zoo.</p>"
};

for (var pic in animal) {
	var caption = animal[pic];
	document.write('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-animal/'
		+ pic
		+ '.jpg" data-sub-html="'
		+ caption
		+ '"><a href="#"><img src="images/small-animal/'
        + pic
        + '.jpg" alt="IMage" class="img-fluid"></a></div>');
}