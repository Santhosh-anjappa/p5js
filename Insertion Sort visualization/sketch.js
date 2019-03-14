class Sorter{
	constructor(){
		this.lw = 3;	
		this.n = parseInt(width/this.lw)+1;
		this.data = [];
		let temp = [];
		let color = [];
		for(let i = 1; i <= this.n; i++){
			temp.push(i);
			color.push("black");
		}
		this.data = [temp, color];
	}

	shuffle(){
		for(let k = 0; k < 20*this.n ; k++){
			let i = parseInt(Math.random() * this.n);      //random*(max-min) + min)
			let j = parseInt(Math.random() * this.n);
			let temp = this.data[0][i];
			this.data[0][i] = this.data[0][j];
			this.data[0][j] = temp;
		}
	}
	
	display(){
		let x = 0;
		let y = height;
		strokeWeight(this.lw);
		for(let i in this.data[0]){
			stroke(this.data[1][i]);
			line(x,y,x,y-this.data[0][i]);
			x += this.lw;
		}
	}
}
		
		
let width = screen.width - 15;
let height = screen.height-200;
let s;
let sortMethod = "ss";

function setup(){
	selectionB = createButton("Selection");
	bubbleB = createButton("Bubble");
	insertionB = createButton("Insertion");
	mergeB = createButton("Merge");
	createCanvas(width,height);
	s = new Sorter();

	s.shuffle();
	mergeSort(0,s.n-1);
	
	selectionB.mousePressed(selectionAction);
	insertionB.mousePressed(insertionAction);
	bubbleB.mousePressed(bubbleAction);
	mergeB.mousePressed(mergeAction);
}

function selectionAction(){
	i = -1;
	s.shuffle();
	s.display();
	sortMethod = "ss";
}
function bubbleAction(){
	i = -1;
	s.shuffle();
	s.display();
	sortMethod = "bs";
}
function insertionAction(){
	i = -1;
	s.shuffle();
	s.display();
	sortMethod = "is";
}
function mergeAction(){
	i = -1;
	s.shuffle();
	s.display();
	sortMethod = "ms";
}

let  i = -1;

function draw(){
	clear();
	if(sortMethod == "ss"){		
		if( i >= s.n){
			i = -1;
			s.shuffle();
		}
		i += 1;
		selectionSort(i);
	}
	if(sortMethod == "is"){		
		if( i >= s.n){
			i = -1;
			s.shuffle();
		}
		i += 1;
		insertionSort(i);
	}
	if(sortMethod == "bs"){		
		if( i >= s.n){
			i = -1;
			s.shuffle();
		}
		i += 1;
		bubbleSort(i);
	}
	if(sortMethod == "ms"){
		if(i >= tempL.length-1){
			i = -1;
			s.shuffle();
		}	
		i += 1;
		merge(tempL[i][0],tempL[i][1],tempL[i][2]);
	}
	s.display();

}

function selectionSort(i){
	for(let j = i;j<s.n;j++){
		if(s.data[0][i] < s.data[0][j]){
			let temp = s.data[0][i];
			s.data[0][i] = s.data[0][j];
			s.data[0][j] = temp;	
		}
	}
}

function insertionSort(i){
	let j = i - 1;
	let key = s.data[0][i];
	while(j >= 0 && s.data[0][j] < key){
		s.data[0][j+1] = s.data[0][j];
		j -= 1;
	}
	s.data[0][j+1] = key;
}

function bubbleSort(i){
	for(let j=0;j<s.n-i-1;j++){
		if(s.data[0][j] < s.data[0][j+1]){
			let temp = s.data[0][j];
			s.data[0][j] = s.data[0][j+1];
			s.data[0][j+1] = temp;
		}
	}
}

function merge(l,m,r){
	let L = [], R = [];
	let n1 = m - l + 1;
	let n2 = r - m ;
	
	for(let i = l; i < l+n1; i++ ){
		L.push(s.data[0][i]);
	}

	for(let i = m+1; i <= m+n2; i++ ){
		R.push(s.data[0][i]);
	}

	let i = 0, j = 0, k = l;
	
	while (i < n1 && j <n2){
		
		if(L[i] >= R[j]){
			s.data[0][k] = L[i];
			i++;
		}
		else {
			s.data[0][k] = R[j];
			j++;
		}
		k++;
	}

	while( i < n1){
		s.data[0][k++] = L[i++];
	}
	while(j < n2){
		s.data[0][k++] = R[j++];
	}	 
}

let tempL = []
function mergeSort(l,r){
	if(l < r){
		m = parseInt((l+r)/2);
		tempL.unshift([l,m,r]);
		mergeSort(l,m);
		mergeSort(m+1,r);
		
	}
}