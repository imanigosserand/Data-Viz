var m;
var width = 800;
var height = 600;
var midHeight = height/2;
var midWidth = width/2;
var center1 = width / 3 / 2;
var center2 = center1 * 3;
var center3 = center1 * 5;

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
	if (minute() !== m) {
		print(minute());
		m = minute();
	}
	// hours
	// fill("blue");
	// arc(midWidth, midHeight, 300,300, -HALF_PI, -HALF_PI + TWO_PI*(hour()+1)/24.0);
	// for(let i = 0; i < hour(); i++){
	// 		arc(center1, midHeight, i*10 + 5,i*10 + 5, 0, TWO_PI);
	// 		noFill();
	// }
	//-----
	// strokeWeight(3);
	// stroke(109,89,122);
	// for(let i = 0; i < hour(); i++){
	// 		arc(center1, midHeight, i*10 + 5,i*10 + 5, 0, TWO_PI);
	// 		noFill();
	// }

	fill(109,89,122);
	stroke(109,89,122);
	for(let h = 0; h < hour(); h++){
		let x = map(h%12, 0, 12, boxHeightSpace, height-boxHeightSpace,true);
		rect(boxWidthSpace+(boxWidth+boxWidthSpace)*floor(h/12),x,boxWidth,boxHeight)
	}



	// minutes
	// fill("green");
	// arc(midWidth, midHeight, 200,200, -HALF_PI, -HALF_PI + TWO_PI*(minute()+1)/60.0);
	//------// strokeWeight(1);
	// stroke(181,101,118);
	// for(let i = 0; i < minute(); i++){
	// 	arc(center2, midHeight, i*5 + 5,i*5 + 5, 0, TWO_PI);
	// 	noFill();
	// }
	fill(181,101,118);
	stroke(181,101,118);
	for(let min = 0; min < minute(); min++){
		let y = map(min%12, 0, 12, boxHeightSpace, height-boxHeightSpace,true);
		rect(minuteStart + (boxWidthSpace+boxWidth)*floor(min/12),y,boxWidth,boxHeight)
	}

	//seconds
	// fill("red");
	// arc(midWidth, midHeight, 100,100, -HALF_PI, -HALF_PI + TWO_PI*(second()+1)/60.0);
	//----
	// stroke(229,107,111);
	// for(let i = 0; i < second(); i++){
	// 	arc(center3, midHeight, i*5 + 5,i*5 + 5, 0, TWO_PI);
	// 	noFill();
	// }
	fill(229,107,111);
	stroke(229,107,111);
	for(let s = 0; s < second(); s++){
		let z = map(s%12, 0, 12, boxHeightSpace, height-boxHeightSpace,true);
		rect(secondStart + (boxWidthSpace+boxWidth)*floor(s/12),z,boxWidth,boxHeight)
	}
}
