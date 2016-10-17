// #target "Photoshop"
#include json2.js

var obj = loadJson('subtitles.json');

if (app.activeDocument.name == "Subtitles.psd"){
	var titleGroup = app.activeDocument.layerSets.getByName('title');

	var subtitle = titleGroup.layers[0];


	for(i = 0; i < obj.length; i++){
			subtitle.textItem.contents = obj[i];
			saveTiff('title'+String(i));
	}

}


function saveTiff(name){
	var doc = app.activeDocument;

	var file = new File(doc.path + '/Output/' + name + '.tif');

	var opts = new TiffSaveOptions();
	opts.alphaChannels = true;
	opts.transparency = true;

	doc.saveAs(file, opts, true);

}

function loadJson(relPath){
	var script = new File($.fileName);
	var jsonFile = new File(script.path + '/' + relPath);

	jsonFile.open('r');
	var str = jsonFile.read();
	jsonFile.close();

	return JSON.parse(str);
}
