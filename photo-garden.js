var garden = {
	berk_branch1: "<h4>Berkeley Rose Garden, Berkeley, California</h4><p></p>",
	berk_butterfly1: "<h4>Berkeley Rose Garden, Berkeley, California</h4><p></p>",
	berk_butterfly2: "<h4>Berkeley Rose Garden, Berkeley, California</h4><p></p>",
	berk_cherryblossom1: "<h4>Berkeley, California</h4><p></p>",
	berk_daisy1: "<h4>Berkeley, California</h4><p></p>",
	berk_daisy2: "<h4>Berkeley, California</h4><p></p>",
	berk_damselfly1: "<h4>Berkeley Rose Garden, Berkeley, California</h4><p></p>",
	berk_jspider1: "<h4>Berkeley Rose Garden, Berkeley, California</h4><p></p>",
	berk_ladybug1: "<h4>Berkeley Rose Garden, Berkeley, California</h4><p></p>",
	berk_purple1: "<h4>Berkeley, California</h4><p></p>",
	home_duck1: "<h4>Fort Worth, Texas</h4><p></p>",
	home_egret1: "<h4>Fort Worth, Texas</h4><p></p>",
	home_goose1: "<h4>Fort Worth, Texas</h4><p></p>",
	home_turtle1: "<h4>Fort Worth, Texas</h4><p></p>",
	sf_platform1: "<h4>San Francisco Botanical Garden, San Francisco, California</h4><p></p>"
};

for (var pic in garden) {
	var caption = garden[pic];
	document.write('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-garden/'
		+ pic
		+ '.jpg" data-sub-html="'
		+ caption
		+ '"><a href="#"><img src="images/small-garden/'
        + pic
        + '.jpg" alt="IMage" class="img-fluid"></a></div>');
}