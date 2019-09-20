var zoo = {
	fw_lion2: "",
	fw_tiger1: "",
	oak_alligator1: "",
	oak_baboon1: "",
	sd_gorilla1: "",
	sd_redpanda1: "",
	sd_tiger1: "",
	sf_aracari1: "",
	sf_blackmonitor1: "",
	sf_emu1: "",
	sf_otter1: "",
	sf_peacock1: "",
	sf_siamang1: ""
};

var garden = {
	berk_branch1: "",
	berk_butterfly1: "",
	berk_butterfly2: "",
	berk_cherryblossom1: "",
	berk_daisy1: "",
	berk_daisy2: "",
	berk_damselfly1: "",
	berk_jspider1: "",
	berk_ladybug1: "",
	berk_purple1: "",
	home_duck1: "",
	home_egret1: "",
	home_goose1: "",
	home_turtle1: "",
	sf_platform1: ""
};

var animal = {
	nor_cat1: "",
	nor_cow1: "",
	nor_sparrow1: "",
	oak_hum1: ""
};

var places = {
	fin_1: "",
	fin_2: "",
	fin_3: "",
	nor_1: "",
	swd_1: "",
	swd_2: ""
};

for (var pic in zoo) {
	var caption = zoo[pic];
	document.write(`<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src=images/big-zoo/` 
	+ pic 
	+ `.jpg" data-sub-html=<p> ` 
	+ caption
	+ `</p><a href="#"><img src="images/small-zoo/` 
	+ pic 
	+ `.jpg" alt="IMage" class="img-fluid"></a></div>`);
}