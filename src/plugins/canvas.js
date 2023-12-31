let Snake = function(canvas) {
	this.setCanvas(canvas);
	
	this.x = this.canvasWidth/2;
	this.y = this.canvasHeight;
	this.radius = 10;
	this.speed = this.canvasWidth/500;
	this.angle = Math.PI/2;
	this.angleDiversion = 
	this.fillStyle = "#000000";
	this.shadowColor = "#000000";
	this.shadowBlur = 2;
	this.generation = 0;
	this.lifespan = 0;
	this.totalDistance = 0;
	this.distance = 0;
};

Snake.prototype = {
	setCanvas: function(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		// this.$canvas = jQuery(canvas);
    // const $canvas = document.getElementById('canvastree');
		this.canvasWidth = canvas.width;
		this.canvasHeight = canvas.height;
	},
	
	next: function() {
		this.draw();
		this.iterate();
		this.randomize();
		this.split();
		this.lifespan++;
		this.die();
	},
	
	draw: function() {
		var context = this.context;
		context.save();
		context.fillStyle = this.fillStyle;
		context.shadowColor = this.shadowColor;
		context.shadowBlur = this.shadowBlur;
		context.beginPath();
		context.moveTo(this.x, this.y);
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();
		context.restore();
	},
	
	iterate: function() {
		var lastX = this.x;
		var lastY = this.y;
		this.x += this.speed * Math.cos(this.angle);
		this.y += this.speed * -Math.sin(this.angle);
		this.radius *= (0.99 - this.generation/250); // minus 0.004 per generation
		var deltaDistance = Math.sqrt(Math.abs(lastX-this.x) + Math.abs(lastY-this.y));
		this.distance += deltaDistance;
		this.totalDistance += deltaDistance;
		if (this.speed > this.radius*2)
			this.speed = this.radius*2;
	},
	
	randomize: function() {
		this.angle += Math.random()/5 - 1/5/2;
	},
	
	reset: function(context) {
		// var $canvas = jQuery(context.canvas);
    var $canvas = document.getElementById('canvastree');
		var margin = 30 + this.radius;
		var width = $canvas.width();
		var height = $canvas.height();
		
		if (this.x < -margin || this.x > width+margin || this.y < -margin || this.y > height+margin) {
			// this.x = width / 2;
			this.y = height;
			// New color
			// var grey = Math.floor(Math.random()*255).toString(16);
			// this.fillStyle = "#" + grey + grey + grey;
			this.fillStyle = "#999";
			this.shadowColor = this.fillStyle;
		}
	},
	
	split: function() {
		// Calculate split chance
		var splitChance = 0;
		// Trunk
		if (this.generation == 0)
			splitChance = (this.distance-this.canvasHeight/5)/100;
		// Branch
		else if (this.generation < 3)
			splitChance = (this.distance-this.canvasHeight/10)/100;
		
		// Split if we are allowed
		if (Math.random() < splitChance) {
			var n = 2+Math.round(Math.random()*2);
			for (var i=0 ; i<n ; i++) {
				var snake = new Snake(this.canvas);
				snake.x = this.x;
				snake.y = this.y;
				snake.angle = this.angle;
				snake.speed = this.speed;
				snake.radius = this.radius * 0.9;
				snake.generation = this.generation + 1;
				snake.fillStyle = this.fillStyle;
				snake.shadowColor = this.shadowColor;
				snake.shadowBlur = this.shadowBlur;
				snake.totalDistance = this.totalDistance;
				this.collection.add(snake);
			}
			this.collection.remove(this);
		}
	},
	
	die: function() {
		if (this.radius < 0.2) {
			this.collection.remove(this);
// 			console.log(this.distance);
		}
	}
}

let SnakeCollection = function(canvas) {
	this.canvas = canvas;
	
	this.snakes = [];
}

SnakeCollection.prototype = {
	next: function() {
		let n = this.snakes.length;
    console.log('n',n)
		for (var s in this.snakes) {
			var snake = this.snakes[s];
			if (this.snakes[s])
				this.snakes[s].next();
		}
	},
	
	add: function(snake) {
		this.snakes.push(snake);
		snake.collection = this;
	},
	
	remove: function(snake) {
		for (var s in this.snakes)
			if (this.snakes[s] === snake)
				this.snakes.splice(s, 1);
	}
}

function randHex() {
	var num = Math.round(Math.random() * 255).toString(16);
	if (num.length == 1)
		num = "0"+num;
	return num;
}

function doCanvasTree() {
	// Convenience
	const $canvas = document.getElementById('canvastree');
  console.log('canvas', $canvas)
	// $canvas = jQuery("canvas#canvastree");
	// let canvas = $canvas[0];
	let context = $canvas.getContext("2d");
	
	// Dimensions
	// var width = $canvas.width();
	// var height = $canvas.height();
	var width = $canvas.offsetWidth;
	var height = $canvas.offsetHeight;
	
	// Set actual canvas size to match css
	// $canvas.attr("width", width);
	// $canvas.attr("height", height);
  // console.log('$canvas.offsetWidth', $canvas.offsetWidth)
	// $canvas.width = $canvas.offsetWidth;
	// $canvas.height = $canvas.offsetHeight;

	// Frame rate
	var frame = 0;
	
	// Snakes
	var n = 2+Math.random()*3;
	var initialRadius = width/50;
	let snakes = new SnakeCollection($canvas);
	for (var i=0 ; i<n ; i++) {
		var snake = new Snake($canvas);
		snake.x = width/2 - initialRadius + i*initialRadius*2/n;
		snake.radius = initialRadius;
		snakes.add(snake);
	}
	
	// Frame drawer
	var interval = setInterval(function() {
		snakes.next();
		
		frame++;
	}, 0);
	
	// fps
  var fpsInterval = setInterval(function() {
    frame = 0;
    if (snakes.snakes.length == 0) {
      clearInterval(interval);
      clearInterval(fpsInterval);
    }
  }, 1000);
};

export default {
  Snake,
  SnakeCollection,
  doCanvasTree
}