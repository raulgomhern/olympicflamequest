var pieces = document.getElementsByClassName ('mobile');

var piecesWidh = [134,192,134,163,134,163,134,192,134];
var piecesHeight = [163,134,163,134,192,134,163,134,163];

for(var i=0;i<pieces.length;i++){
	pieces[i].setAttribute("width", piecesWidh[i]);
	pieces[i].setAttribute("height",piecesHeight[i]);
    pieces[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	pieces[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
    pieces[i].setAttribute("onmousedown","selectiveElement(evt)");
}


var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function selectiveElement(evt) {
    elementSelect = reorder(evt);
    currentX = evt.clientX;        
	currentY = evt.clientY;
    currentPosx = parseFloat(elementSelect.getAttribute("x"));     
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove","moveElement(evt)");
}

function moveElement(evt){
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;        
	currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout","deselectElement(evt)");
	elementSelect.setAttribute("onmouseup","deselectElement(evt)");
    magnet();
}

function deselectElement(evt){
	if(elementSelect != 0){			
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}

var puzzle = document.getElementById('puzzle');

function reorder(evt){
    var parent = evt.target.parentNode;
	var clone = parent.cloneNode(true);
	var id = parent.getAttribute("id");
    puzzle.removeChild(document.getElementById(id));
    puzzle.appendChild(clone);
    return puzzle.lastChild.firstChild;
}

var origX = [200,304,466,200,333,437,200,304,466];   
var origY = [100,100,100,233,204,233,337,366,337];

function magnet(){
	for(var i=0;i<pieces.length;i++){
		if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}
var win = document.getElementById("win");

function testing() {
	var well_placed = 0;
	var parents = document.getElementsByClassName('parent');
	for(var i=0;i<pieces.length;i++){
		var posx = parseFloat(parents[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(parents[i].firstChild.getAttribute("y"));
		ide = parents[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			well_placed = well_placed + 1;
		}
	}
	if(well_placed == 9){
    win.play();
 }
}