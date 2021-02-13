'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
resizeCanvas();
var ctx = canvas.getContext('2d');
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 20;
draw();

function draw(){
    while (X < canvas.width){
        ctx.beginPath();
        ctx.fillStyle = '#948e8e';
        ctx.arc(X,Y,R,0,2*Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#948e8e'
        ctx.fill();
        ctx.stroke();
        X += 0.01;
        ctx.fill();
        ctx.rect(0,0,canvas.width, canvas.height);
    }
}

function move(){
    requestAnimationFrame(move)
}

function resizeCanvas () {
    let width = scaleByPixelRatio(canvas.clientWidth);
    let height = scaleByPixelRatio(canvas.clientHeight);
    if (canvas.width != width || canvas.height != height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

function scaleByPixelRatio (input) {
    let pixelRatio = window.devicePixelRatio || 1;
    return Math.floor(input * pixelRatio);
}