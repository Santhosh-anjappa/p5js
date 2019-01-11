sw = screen.width;
sh = screen.height;
lw = 3;
n = parseInt(sw/lw) - 10;

x = [];

for(let i=0;i<n;i++){
	x.push([50+i,"black"])
}

for(let j=0;j<4;j++){
for(let i=0;i<n;i++){
	r1 = Math.floor(Math.random()*(n));
	r2 = Math.floor(Math.random()*(n-1));	
	
	temp = x[r1];
	x[r1] = x[r2];
	x[r2] = temp;
}
}


console.log(x);
	
function setup(){
	createCanvas(sw,sh);
}

let c = x.length-1;
function draw(){
	clear();
	maxi = c;

	/*  place for sort */

	for(let j=0;j<c;j++){
		if(x[maxi][0] < x[j][0]){
			maxi = j;
		}
	}
	
	x[c][1] = "white";
	x[maxi][1] ="white";
	
	strokeWeight(lw);
	space = 1;
	for(let i in x){
		stroke(x[i][1]);
		line(space,sh,space,sh-x[i][0]);
		space += lw;
	}
	
	x[maxi][1] ="black";
	x[c][1] = "black";
	
	temp = x[maxi][0];
	x[maxi][0] = x[c][0];
	x[c][0] = temp;

	if(c>0) c--;
}			