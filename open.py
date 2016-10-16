import json
from subprocess import call
import os

this = open('text', 'r')

data = {}
this_list = []

# for number, thing in enumerate(this):
# 	data['title_' + str(number)] = thing.replace("\n", "")

for thing in this:
	this_list.append(thing.replace("\n", ""))

this.close()

with open('subtitles.json', 'w') as outfile:
	json_data = json.dump(this_list, outfile)

call(["open", "Subtitles.psd"])