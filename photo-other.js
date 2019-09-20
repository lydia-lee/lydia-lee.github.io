var other = {
	berk_lec: "<h4>Lecture in Berkeley</h4><p>Professors aren't going to let a small thing like a power outage interrupt lecture.</p>",
	paris_rodin: "<h4>Statue of Pierre de Wiessant by Auguste Rodin, Paris, France</h4><p>The larger-than-life version of the bronze sculpture can also be found in miniature in San Francisco's Legion of Honor. Because it was late in the day and the sky was overcast and grey, the garden was serenely empty.</p>",
	sf_fleetweek2018: "<h4>Blue Angels at Fleet Week 2018, San Francisco, California</h4><p>The Blue Angels hold extremely tight formation over the water.</p>",
	sf_pride2019: "<h4>Pride 2019, San Francisco, California</h4><p></p>"
};


for (var pic in other) {
	var caption = other[pic];
	document.write('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-other/'
		+ pic
		+ '.jpg" data-sub-html="'
		+ caption
		+ '"><a href="#"><img src="images/small-other/'
        + pic
        + '.jpg" alt="IMage" class="img-fluid"></a></div>');
}



// <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" 
// data-src="images/big-images/nature_big_1.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">
//           <a href="#"><img src="images/nature_small_1.jpg" alt="IMage" class="img-fluid"></a>
//         </div>