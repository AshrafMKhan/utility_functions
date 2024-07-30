export function writeSilkScreen(text,x,y,size=15){
	const canvas = document.getElementById("myCanvas");
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.font = size + "px Arial";
	ctx.fillText(text, x, y);
}

export const drawEtch2 = (listOfCoordinates) => {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	let lastIndex = listOfCoordinates.length-1;
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#b87333'
	ctx.beginPath();
	ctx.arc(listOfCoordinates[0], listOfCoordinates[1], 5, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(listOfCoordinates[lastIndex-1], listOfCoordinates[lastIndex], 5, 0, 2 * Math.PI);
	ctx.stroke();
	for(let x = 0, y = 1; y+2 < listOfCoordinates.length; x+=2, y+=2){
		ctx.moveTo(listOfCoordinates[x], listOfCoordinates[y]);
		ctx.lineTo(listOfCoordinates[x+2], listOfCoordinates[y+2]);
		ctx.stroke();
	}
};

export function squareify(x,y,size=10){
	return [x-size, y-size, x+size, y+size];
};

export const drawEtch = (x1, y1, x2, y2) => {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#b87333'
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x2, y2, 5, 0, 2 * Math.PI);
	ctx.stroke();
};
