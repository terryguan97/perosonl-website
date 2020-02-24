	///////////////////////////////////////////
	/*setting up canvas from here*/
	var cv = document.getElementById("canvas");
	var ctx = cv.getContext("2d");
	/*to here setting up canvas*/
	///////////////////////////////////////////
	//SETUP FUNCTION : EXECUTED ONLY ONCE
	
	var mouseX, mouseY;
	var keyPressed;
	var pressedKey;	
	
	var mouseX, mouseY;
	var keyPressed;
	var pressedKey;
	var x = [];
	var y = [];
	var rad = [];
	var xsp = [];
	var ysp =[];
	var lng = 100;
	w = 840;
	v = 300;
	u = 200;
	var ctx = canvas.getContext('2d'),
	fontBase = 1000,
	fontSize = 100,
	ratio;
	
	var a = [];
	var c = [];
	
	
	var n = [];
	var m = [];
	var o = [];
	var radius = [];
	var currentRing = 0;
	var length = 10;
	
	var image = document.getElementById('terry');
	
	
	function setup() {
		ctx.canvas.width  = window.innerWidth; 
		ctx.canvas.height = window.innerHeight;
		for  (var i = 0; i < lng; i++) {
			x [i] = cv.width/2;
			y [i] = cv.height/2;
			rad[i] = Math.random() * 30 + 10;
			xsp[i] = Math.random() * 5 - 2;
			ysp[i] = Math.random() * 5 - 2;
			
			a[i] = Math.random() * .7- 0;
			c[i] = "rgba(255,255,255," + a[i] + ")";
		}
	}
	
	function draw() {
		clear();
		for (var i = 0; i < lng; i++) { //BOUNCING BALLS 
			ctx.beginPath();
			ctx.arc(x[i],y[i],rad[i],0,Math.PI*2);
			ctx.fillStyle = c[i];
			ctx.fill();
			ctx.closePath();
			x[i] += xsp[i];
			y[i] += ysp[i];
			
			if (x[i] < 0 + rad[i] || x[i] > cv.width - rad[i]) {
				xsp[i] = xsp[i] * -1;
			}
			
			if (y[i] < 0 + rad[i] || y[i] > cv.height - rad[i]) {
				ysp[i] = ysp[i] * -1;
			}
		}
		
		ctx.drawImage(image,cv.width/2-350, cv.height-850,700,850); //IMAGE
		
		/*for (var j = 0; j < length; j++) {  //PUDDLE EFFECT
			ctx.beginPath();
			radius[j] +=2;
			ctx.arc(n[j],m[j],radius[j],0,Math.PI*2)
			o[j] -= 0.01;
			ctx.strokeStyle = "rgba(255,255,255," + o[j] + ")";
			ctx.stroke();
			ctx.closePath();
		} */
		
		ctx.fillStyle = "white"; //TEXT
		ctx.font =  getFont();
		words(); 
		
		if (cv.width <= 1600 && cv.width >= 1434){
			w=720;
			v=300;
			u = 200;
		} else if (cv.width >= 1600) {
			w = 840;
			v= 300;
			u = 200;
		} 
		
		if (cv.width <= 1434) {
			w = 625;
			v=250;
			u = 200;
		}
		
		if (cv.width <= 1250) {
			u = -250000;
			w=400000;
			v= 50000;
		} else {
			u = 200;
		}
	}
	
	function clear() {
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(0,0,cv.width,cv.height);
	}
	
	function getFont() {
		var ratio = fontSize / fontBase;
		var size = canvas.width * ratio;
		
		return (size|0) + 'px Major Mono Display';
	}
	
	function words() {
		ctx.fillText("Terry",cv.width/2-w,cv.height/2+u);
		ctx.fillText("Guan",cv.width/2+v,cv.height/2+u);
	}
	/*Event Functions*/
	function mouseDown() {
	/*[currentRing] = mouseX;
		m[currentRing] = mouseY;
		radius[currentRing] = 10;
		o[currentRing] = 1;
		if (currentRing > length) {
			currentRing = 0;
		}else {
			currentRing ++;
		}*/
	}
	
	function mouseUp() {
	}
	
	function mouseMove(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
		
	}

	
	
	window.addEventListener("resize", setup);
	canvas.addEventListener('mousedown', mouseDown);
	canvas.addEventListener('mousemove', mouseMove);
	canvas.addEventListener('mouseup', mouseUp);
	//canvas.addEventListener('mouseleave', mouseUp);
	setup();
	setInterval(draw, 30);