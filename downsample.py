from PIL import Image
import os

image_set = "other"

dir_big = "./images/big-{}".format(image_set)
dir_small = "./images/small-{}".format(image_set)
for f in os.listdir(dir_big):
	im_big = Image.open("{}/{}".format(dir_big, f))
	x, y = im_big.size
	im_small = im_big.resize((int(x/5), int(y/5)), Image.BICUBIC)
	if not os.path.isfile("{}/{}".format(dir_small, f)):
		im_small.save("{}/{}".format(dir_small, f))
	else:
		print("{} already exists".format(f))