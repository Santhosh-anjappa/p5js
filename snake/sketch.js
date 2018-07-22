var snake = {
	x : 0,
	y : 0,
	xs : 0,
	ys : 0,
	len : 1,
	scl : 10,
	a : [[0,0]]
}

var food = {
	x : Math.floor(Math.random()*50)*snake.scl,
	y : Math.floor(Math.random()*50)*snake.scl
}

function setup() {
	createCanvas(500,500);
	frameRate(8);

}
var flag = 1;
function draw() {
	background(0);
	if(dist(snake.x,snake.y,food.x,food.y) == 0) {
		food.x = Math.floor(Math.random()*50)*snake.scl;
		food.y = Math.floor(Math.random()*50)*snake.scl;		
		snake.len += 1;
		snake.a.unshift(snake.a[0]);
	}

	//score
	fill(255);
	textSize(16);
	text("score : "+snake.len.toString(),400,50);
	// food
	fill(0,0,255);
	rect(food.x,food.y,snake.scl,snake.scl);

	//controls
	if(keyCode === UP_ARROW && flag == 1) {
		snake.xs = 0;
		snake.ys = -1;
		flag = 0;
	}
	else if(keyCode === DOWN_ARROW && flag == 1) {
		snake.xs = 0;
		snake.ys = 1;
		flag = 0;
	}
	else if(keyCode === LEFT_ARROW && flag == 0) {
		snake.xs = -1;
		snake.ys = 0;
		flag = 1;
	}
	else if(keyCode === RIGHT_ARROW && flag == 0) {
		snake.xs = 1;
		snake.ys = 0;
		flag = 1;
	}
	//snake
	snake.x += snake.xs*snake.scl;
	snake.y += snake.ys*snake.scl;

	if(snake.x<0 || snake.x >=500 || snake.y<0 || snake.y >=500){
		console.log("game over");
		snake.x = 0;
		snake.y = 0;
		snake.len = 1;
		snake.a = [[0,0]];
	}
	else{
	snake.a.push([snake.x,snake.y])
	snake.a.shift();
}
	fill(255);
	for(i = 0;i<snake.len;i++) {
		rect(snake.a[i][0],snake.a[i][1],snake.scl,snake.scl);
	}
}