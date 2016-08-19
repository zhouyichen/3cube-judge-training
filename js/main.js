function renderSlides(slides) {
	var HTML = '';
	for (var s in slides) {
		slide = slides[s];
		var slideHTML = "";
		var titles = slide.title;
		for (var t in titles) {
			slideHTML += title(titles[t]);
		}
		slideHTML += renderContents(slide.contents);
		HTML += sec(slideHTML);
	}
	$("#slides").html(HTML);
}

function renderContents(contents) {
	var slideHTML = "";
	for (var c in contents) {
		if (c == 0) {
			slideHTML += htmlElement('p', contents[c]);
		} else {
			slideHTML += p(contents[c]);
		}
	}
	return slideHTML;
}

function htmlElement(tag, content, className) {
	var html = "<" + tag;
	if (className) {
		html += " class='" + className + "'";
	}
	html += '>' + content + "</" + tag + '>';
	return html
}

function sec(content) {
	return htmlElement("section", content);
}

function p(content) {
	return htmlElement("p", content, "fragment");
}

function title(content) {
	return htmlElement("h2", content, "title");
}

function img(name) {
	return "<br><img src='img/" + name + ".jpg'>"
}

function a(content, address) {
	return "<a href='" + address +"' target='_blank'>" + content + "</a>";
}

function small(content) {
	return htmlElement('span', content, 'small');
}

function unorderdList(items) {
	var html = '';
	for (var i in items) {
		html += htmlElement("li", items[i], "fragment small");
	}
	return htmlElement("ul", html);
}

function dns() {
	return "<b class='dns'>(DNS)</b>";
}

function dnf() {
	return "<br><b class='dnf'>Penalty: disqualification of the attempt (DNF)</b>";
}

function p2() {
	return " <b class='p2'>Penalty: +2 seconds</b>";
}

function keyword(word) {
	return htmlElement("b", word, "keyword");
}
