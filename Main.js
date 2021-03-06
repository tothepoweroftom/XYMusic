
// JavaScript Document



// INIT //
var canvasA;
var cxa;
var FPS = 60;

var scene = 0;
var mode = 1; // build/play
var titleIn = 100;
var titleOut = 0;
var titleOutYes = 0;
var introAlpha = 100;




// MEASUREMENT //
var halfX = 0;
var halfY = 0;
var fullX = 0;
var fullY = 0;
var units = 0;
var unitOne = 0;
var headerType = 40;
var menuType = 18;
var midType = 26;
var bodyType = 12;
var dx = 0;
var dy = 0;
var sx = 0;
var sy = 0;
var sm = 0;
var grd = 30; // GRID SNAP SIZE


// CAMERA //
var camX = 0;
var camY = 0;
var camDestX = 0;
var camDestY = 0;
var camSpeed = 6;
var camSpeedDest = 6;


// ZOOM //
var zoomLevel = 1;
var zoomDest = 1;
var zSpeed = 2;
var zSpeedDest = 2;
var zoomSlot = 4;
var zoomSlots = [0.15, 0.24, 0.39, 0.625, 1, 1.6, 2.56, 4.1];


var mouseX = 0;
var mouseY = 0;


// COMPONENTS //
var XYModel;



// STAGE DRAGGING //
var stageDrag = false;
var dragX = 0;
var dragY = 0;
var dragOffX = 0;
var dragOffY = 0;
var dragged = 'undefined';






//--------------------------------------------------------------------------------------------

//    INITIALISE (on load)

//--------------------------------------------------------------------------------------------


function setup() {

	////////////// SETUP CANVAS ////////////
  frameRate(25);
	canvasA = document.getElementById("grid");
	// canvasA.addEventListener("mousedown", getPosition, false);
	// canvasA.addEventListener("mouseup", mouseRelease, false);
	// canvasA.addEventListener("mousemove", mouseMove, false);
	document.body.addEventListener('touchmove', function(event) {
	  event.preventDefault();
	}, false);
    cxa = canvasA.getContext("2d");

    //SETUP XY MODEL ========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-0=-0=-000=-0=-0=-000=-0=-0=-000=-0=-000

	// SET CANVAS & DRAWING POSITIONS //
	measurement();
  XYModel = new XYModel(unitOne, canvasA, cxa);
  XYModel.randomInit();
  // XYModel.draw();


} // END INIT





function draw() {
  XYModel.draw();
  // XYModel.randomInit();
  // console.log("H");
}









// DO OUR SCALING //
function measurement() {

	canvasDestW = window.innerWidth;
	canvasDestH = window.innerHeight;
	canvasA.width  = canvasDestW;
	canvasA.height = canvasDestH;


	// UNIT SIZES //
	halfX = Math.round(canvasA.width/2);
	halfY = Math.round(canvasDestH/2);
	fullX = canvasA.width;
	fullY = canvasDestH;

	unitOne = (canvasA.width/100); // USED ON GUI
	if (unitOne<3) {
		unitOne = 1;
	}


	// TEXT SIZES //
	headerType = Math.round(canvasA.width/28);
	midType = Math.round(canvasA.width/35);
	menuType = Math.round(canvasA.width/70);
	bodyType = Math.round(canvasA.width/60);
	subType = Math.round(canvasA.width/90);

	if (headerType<26) {
		headerType = 26;
	}
	if (midType<24) {
		midType = 24;
	}
	if (menuType<12) {
		menuType = 12;
	}
	if (bodyType<16) {
		bodyType = 16;
	}
	if (subType<6) {
		subType = 6;
	}

	units = (unitOne*0.06)*zoomLevel;

}
