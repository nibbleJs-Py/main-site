class blockCategory {
	constructor (name, colour) {
		this.name = name;
		this.color = color;
	}
	
}

function setProjectTitle(title) {
	document.title = "Nibble: CTRL " + title;
}

setProjectTitle("test app");