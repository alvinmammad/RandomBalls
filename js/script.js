var arr2=[];
var count=0;
var btn = document.createElement("button");
btn.addEventListener("click", myFnc);
btn.style.width = "50px";
btn.style.height = "50px";
btn.style.borderRadius = "50%";
btn.style.background = "cyan";
btn.innerHTML="CLick Me";	
btn.style.fontFamily = "Tahoma";
var arr = [];
document.body.appendChild(btn);
//------------------------//
function myFnc() {
	function collect(newevent){
	var x=newevent.clientX;
	var y=newevent.clientY;

}
{
var ball = document.createElement("div");
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.background="chocolate";
ball.style.position = "absolute";
ball.style.borderRadius = "100%";
ball.style.top=Math.floor(Math.random()*500)+1+"px";
ball.style.left=Math.floor(Math.random()*1300)+1+"px";
document.body.appendChild(ball);
arr.push(ball);
count++;
}

// console.log(count);
}
//-------------------------//
document.body.addEventListener("click", collect);
