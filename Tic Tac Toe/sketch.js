sw = screen.width;
sh = screen.height;
tileSize = 150;
board = [];
turn = 0
winComb = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2] ];
function setup() {
	createCanvas(sw,sh);
	colflag = 0
	for(let i = -tileSize*1.5;i<=tileSize*0.5;i+=tileSize){
		for(let j=-tileSize*1.5;j<=tileSize*0.5;j+=tileSize){
			if(colflag =(colflag+1)%2){
				bcolor = 200;
			}
			else{
				bcolor = 245;
			}
			board.push([sw*0.5+i,sh*0.5+j,bcolor,""]);
			 
		}
	}
	
}

function draw() {
	count = 0;
	leaderboard();	
	
	for(let i in board){
		fill(board[i][2]);
		strokeWeight(0);
		rect(board[i][0],board[i][1],tileSize,tileSize);
		text(String(count++),board[i][0],board[i][1]);
		switch(board[i][3]){
			case "x" : drawX(board[i][0],board[i][1]);
				break;
			case "o" : drawO(board[i][0],board[i][1]);
				break;
			default : ;
		}

	}
	
	strokeWeight(3);
	point(sw*0.5,sh*0.5);
	checkWin();
}

function drawX(x,y){
	strokeWeight(3);
	line(x+tileSize*0.25,y+tileSize*0.25,x+tileSize*0.75,y+tileSize*0.75);
	line(x+tileSize*0.75,y+tileSize*0.25,x+tileSize*0.25,y+tileSize*0.75);
}

function drawO(x,y){
	strokeWeight(3);
	ellipse(x+tileSize*0.5,y+tileSize*0.5,tileSize*0.5,tileSize*0.5);
	//line(x+tileSize,y,x,y+tileSize);		
}

function mouseClicked() {
	for(let i in board){
		if( (mouseX > board[i][0]) && (mouseX < board[i][0] + tileSize) && (mouseY > board[i][1]) && (mouseY < board[i][1] + tileSize) ){
			if(board[i][3] == "")
			if((turn=(turn+1)%2))
				board[i][3] = "x";
			else
				board[i][3] = "o";
		}
	}
	
	if( (mouseX > sw*0.5+tileSize*2) && (mouseX < sw*0.5+tileSize*2+50) && (mouseY > sh*0.5-tileSize*1.5) && (mouseY < sh*0.5-tileSize*1.5+50) ){
		reset();
	}

}

function leaderboard(){
	fill("red");
	strokeWeight(0);
	rect(sw*0.5+tileSize*2,sh*0.5-tileSize*1.5,50,50,30);
}

function checkWin(){
	/* only 8 possible ways to win*/
	for(let i in winComb){
		if(board[winComb[i][0]][3] =="x" && board[winComb[i][1]][3] =="x" && board[winComb[i][2]][3] =="x"){
			//console.log("X - WINS");
			document.getElementById("winner").innerHTML = "X - WINS";
			if(mouseIsPressed)
			reset();
		}
	}
	for(let i in winComb){
		if(board[winComb[i][0]][3] =="o" && board[winComb[i][1]][3] =="o" && board[winComb[i][2]][3] =="o"){
			//console.log("O - WINS");
			document.getElementById("winner").innerHTML = "O - WINS";
			if(mouseIsPressed)
			reset();
		}
	}
}

function reset(){
	for(let i in board){
			board[i][3] = "";
		}
	turn = 0;
}