import os

if __name__ == "__main__":
	img_set = "other"
	fileName = "./{}/include_images.js".format(img_set)
	with open(fileName, 'w') as js_file:
		js_file.write("document.write(`")
		for f in os.listdir("./{}".format(img_set)):
			if ".jpg" in f.lower():
				js_file.write('<img src="images/{}/{}" style="max-height:300px">\n'.format(img_set, f))
		js_file.write("`);");