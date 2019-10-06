//
// Parse XML version of Core-18 topics
// Generate a new GoogleForm for the groups, 5 topics each
//

function parseXml(forms) {
    var url = 'https://rure.cs.ru.nl/siks/data/topics.xml';
    var xml = UrlFetchApp.fetch(url).getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement();

    var entries = root.getChildren('top');
    for (var i = 0; i < entries.length; i++) {
	// Get data from XML file for entry
	var num = entries[i].getChild('num').getText();
	var title = entries[i].getChild('title').getText();
	var desc = entries[i].getChild('desc').getText();
	var narr = entries[i].getChild('narr').getText();
	var tid = parseInt(num.match(/\d+/,"")[0]);
	title = title.trim();
	desc = desc.trim().replace(/^Description:/,"");
	narr = narr.trim().replace(/^Narrative/,"");

	// Expand form with new page for this entry
	var form = forms[i % 5];
	var item = form.addPageBreakItem();
	item.setTitle("Topic Id " + tid.toFixed(0));
	item = form.addSectionHeaderItem();
	item.setTitle("Title");
	item.setHelpText(title);
	item = form.addSectionHeaderItem();
	item.setTitle("Description");
	item.setHelpText(desc);
	item = form.addSectionHeaderItem();
	item.setTitle("Narrative");
	item.setHelpText(narr);

	// Sollicit query variants
	item = form.addSectionHeaderItem();
	item.setTitle("Query Variants")
	    .setHelpText("Please enter one or two query variants for \"" + title + "\".");
	item = form.addTextItem();
	item.setTitle("Variant 1 (#" + tid.toFixed(0) + ")")
	    .setRequired(true)
	    .setHelpText("Mandatory query variant.");
	item = form.addTextItem();
	item.setTitle("Variant 2 (#" + tid.toFixed(0) + ")")
	    .setRequired(false)
	    .setHelpText("Optional query variant.");
	
	Logger.log('%s (%s)', tid, title);
    }
    return forms;
}

function initForms(fTitle, sheetID) {
    var forms = [];
    for (var i = 0; i < 5; i++) {
	var form = FormApp.create(fTitle + " " + (i+1).toFixed(0));
	form
	    .setDescription('Add query-variants for every topic.')
	    .setAllowResponseEdits(true)
	    .setCollectEmail(true)
	    .setProgressBar(true)
	    .setConfirmationMessage('Thanks for your research contribution!');
	// spreadsheet for answers
	form.setDestination(FormApp.DestinationType.SPREADSHEET, sheetID);
	forms[i] = form;
    }
    return parseXml(forms);
}

function createForms() {
    var forms = initForms('Core18-TopicSet', '1ksw7nVH0M_rhMrAVaTX_cy-UP-RHKwDAi6xdY7DREbE');
    var pUrls = [];
    for (var i = 0; i < 5; i++) {
	pUrls[i] = forms[i].getPublishedUrl();
	Logger.log('Published URL: ' + pUrls[i]);
	pUrls[i] = forms[i].shortenFormUrl( pUrls[i] );
	Logger.log('Editor URL: ' + forms[i].getEditUrl());
    }
    return pUrls;
}
