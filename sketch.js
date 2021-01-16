var min;
var width = 800;
var height = 600;
var boxWidth = width/13;
var boxWidthSpace = boxWidth/13
var boxHeight = height/13;
var boxHeightSpace = boxHeight/13;
var minuteStart = boxWidth*2+boxWidthSpace*3
var secondStart = minuteStart +boxWidth*5+boxWidthSpace*5;

function setup() {
  m = minute();
  createCanvas(800, 600); // make an HTML canvas element width x height pixel
}

function draw() {
	background(53,80,112);
	if (minute() !== min) {
		print(minute());
		min = minute();
	}

	fill(109,89,122);
	stroke(109,89,122);
	for(let h = 0; h < hour(); h++){
		let x = map(h%12, 0, 12, boxHeightSpace, height-boxHeightSpace,true);
		rect(boxWidthSpace+(boxWidth+boxWidthSpace)*floor(h/12),x,boxWidth,boxHeight)
	}

	fill(181,101,118);
	stroke(181,101,118);
	for(let m = 0; m < minute(); m++){
		let y = map(m%12, 0, 12, boxHeightSpace, height-boxHeightSpace,true);
		rect(minuteStart + (boxWidthSpace+boxWidth)*floor(m/12),y,boxWidth,boxHeight)
	}

	fill(229,107,111);
	stroke(229,107,111);
	for(let s = 0; s < second(); s++){
		let z = map(s%12, 0, 12, boxHeightSpace, height-boxHeightSpace,true);
		rect(secondStart + (boxWidthSpace+boxWidth)*floor(s/12),z,boxWidth,boxHeight)
	}
}
