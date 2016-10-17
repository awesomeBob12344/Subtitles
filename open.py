"""Turns text into templated subtitle files."""

import json
from subprocess import call

this = open('text', 'r')

data = {}
this_list = []

for thing in this:
	this_list.append(thing.replace("\n", ""))

this.close()

with open('subtitles.json', 'w') as outfile:
	json_data = json.dump(this_list, outfile)

call(["open", "Subtitles.psd"])
