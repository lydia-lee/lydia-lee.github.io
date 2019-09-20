var zoo = {
	fw_lion2: "<h4>African Lionness, Fort Worth Zoo</h4><p>When the Texan summer sun kicks in, the bugs come out.</p>",
	fw_tiger1: "<h4>Malayn Tiger, Fort Worth Zoo</h4><p>A sleepy Malayan tiger at the Fort Worth Zoo on a hot Texan afternoon.</p>",
	oak_alligator1: "<h4>American Alligator, Oakland Zoo</h4><p>A sneaky-looking alligator enjoying the water.</p>",
	oak_baboon1: "<h4>Hamadryas Baboon, Oakland Zoo</h4><p>The juvenile Hamadryas baboon was very interested in my camera.</p>",
	sd_gorilla1: "<h4>Gorilla, San Diego Zoo</h4><p>This young fellow was practicing his chest-beating.</p>",
	sd_redpanda1: "<h4>Red Panda, San Diego Zoo</h4><p>They look like stuffed animals!</p>",
	sd_tiger1: "<h4>Malayan Tiger, San Diego Zoo</h4><p>Connor the Malayan tiger staring out at the enthralled crowd.</p>",
	sf_aracari1: "<h4>Curl-Crested Aracari & Guira Cuckoo, San Francisco Zoo</h4><p>Why do some birds look like nineties rockers and others look like cotton balls? These two were quite good friends and would regularly groom one another.</p>",
	sf_blackmonitor1: "<h4>Black Tree Monitor, Oakland Zoo</h4><p>A black tree monitor lazing in its enclosure with its tail in a perfect curl.</p>",
	sf_emu1: "<h4>Emu, San Francisco Zoo</h4><p>This emu looks like either a dingo stole its baby or it's the reincarnation of Dr. Frankenstein.</p>",
	sf_otter1: "<h4>American River Otter, San Francisco Zoo</h4><p>Otter is here to help! We didn't realize that there were two of them in the enclosure at first!</p>",
	sf_peacock1: "<h4>Indian Peacock, San Francisco Zoo</h4><p>This particular peacock looked exceptionally indignant. The peacocks have free run of the zoo.</p>",
	sf_siamang1: "<h4>Siamang, Oakland Zoo</h4><p>Gibbons are apes, and apes are not monkeys!</p>",
	sd_snowleopard1: "<h4>Snow Leopard, San Diego Zoo</h4><p>Somehow snow leopards always manage to look vaguely offended. This particular beauty was doing the pacing rounds on a warm January day.</p>",
	oak_warthog1: "<h4>Warthog, Oakland Zoo</h4><p>How is it these two managed to channel The Office so well?</p>"
};


for (var pic in zoo) {
	var caption = zoo[pic];
	document.write('<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-zoo/'
		+ pic
		+ '.jpg" data-sub-html="'
		+ caption
		+ '"><a href="#"><img src="images/small-zoo/'
        + pic
        + '.jpg" alt="" class="img-fluid"></a></div>');
}