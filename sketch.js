// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let img;

function setup() {
	createCanvas(1110, 400, WEBGL);
	stroke(255);
	angleMode(DEGREES);

	// Set radius for each shape based on canvas dimensions
	let radius = min(width, height) / 2;
	secondsRadius = radius * 0.71;
	minutesRadius = radius * 0.6;
	hoursRadius = radius * 0.5;
	clockDiameter = radius * 1.7;

	describe("Functioning pink clock on a grey background.");
}

function draw() {
	background(230);
	let clockWidth = 710;
	// Move origin to center of canvas
	// translate(width / 2, height / 2);
	translate(0, 0);

	// Draw the clock background
	noStroke();
	fill(244, 122, 158, 100.0);
	ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
	fill(237, 34, 93, 100.0);
	ellipse(0, 0, clockDiameter, clockDiameter);

	// Calculate angle for each hand
	let secondAngle = map(second(), 0, 60, 0, 360);
	let minuteAngle = map(minute(), 0, 60, 0, 360);
	let hourAngle = map(hour(), 0, 12, 0, 360);

	stroke(255);

	// Second hand
	push();
	rotate(secondAngle);
	strokeWeight(1);
	line(0, 0, 0, -secondsRadius);
	pop();

	// Minute hand
	push();
	strokeWeight(2);
	rotate(minuteAngle);
	line(0, 0, 0, -minutesRadius);
	pop();

	// Hour hand
	push();
	strokeWeight(4);
	rotate(hourAngle);
	line(0, 0, 0, -hoursRadius);
	pop();

	// Tick markers around perimeter of clock
	push();
	strokeWeight(2);
	for (let ticks = 0; ticks < 60; ticks += 1) {
		point(0, -secondsRadius);
		rotate(6);
	}
	pop();

  drawEarth();
}

function drawEarth() {
  //background(0);
	// translate(0, 0, -75);
	noStroke();
	rotateY(frameCount * 0.01);
	texture(img);
	sphere(100);
}

function preload() {
	img = loadImage("Globe.jpg");
}

// function setup() {
// 	createCanvas(400, 400, WEBGL);
// 	background(0)
// 	noStroke();
// }
