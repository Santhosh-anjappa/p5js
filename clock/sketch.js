let width = 1280;
let height = 780;
let oneSecond = 0;
let oneHour = 0;
let oneMinute = 0;
function setup() {
	createCanvas(width,height);
	var angle = 0;
	clockSize = 200;
	strokeWeight(15);
	noFill();
}

function draw() {
	background(200);
	translate(width/2,height/2);
	//clock
stroke(255, 0, 255);
ellipse(0,0,clockSize*3,clockSize*3);
	// 	for(var i=0;i<360;i+=30){
	// 	rotate(PI/180*30);
	// 	line(0,-(clockSize*3/2)+10,0,-(clockSize*3/2)-10);
	// }

	stroke(255, 255, 0);
	ellipse(0,0,clockSize*2,clockSize*2);
	for(var i=0;i<360;i+=30){
		rotate(PI/180*30);
		line(0,-(clockSize*2/2)+10,0,-(clockSize*2/2)-10);
	}

	stroke(0,255,255);
	ellipse(0,0,clockSize,clockSize);
		for(var i=0;i<360;i+=30){
		rotate(PI/180*90);
		line(0,-(clockSize/2)+10,0,-(clockSize/2)-10);
	}
	stroke(0,255,255);
	push();
	rotate(PI/180*oneHour);
	line(0,0,0,-70);
	oneHour = hour()*30;
	pop();

	stroke(255, 255, 0);
	push();
	rotate(PI/180*oneMinute);
	line(0,-(clockSize*2/2)+60,0,-(clockSize*2/2));
	oneMinute = minute()*6;
	pop();

	stroke(255, 0, 255);
	push();
	rotate(PI/180*oneSecond);
	line(0,-(clockSize*3/2)+60,0,-(clockSize*3/2));
	oneSecond = second()*6;	
	pop();
}