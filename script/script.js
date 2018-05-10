var ball1 = document.querySelector(".first");
ball1.style.left=0;
ball1.style.top=0;

var ball2 = document.querySelector(".second");
ball2.style.top = 0;
ball2.style.left = "calc(100% - 40px)";

var ball3 = document.querySelector(".third");
ball3.style.left = "0";
ball3.style.top = "300px";

var ball4 = document.querySelector(".fourth");
ball4.style.left = "calc(100% - 40px)";
ball4.style.top = "300px";

var play = document.querySelector(".Play");

play.addEventListener("click", function(){
	ball1.style.left=ball2.style.left;
	ball1.style.top=ball2.style.top;

	function secondMove(){
		ball2.style.top=ball4.style.top;
		ball2.style.left=ball4.style.left;
	}
	var mySet1 = setTimeout(secondMove, 850);


	function thirdMove(){
		ball4.style.top=ball3.style.top;
		ball4.style.left=ball3.style.left;
	}
	var mySet2 = setTimeout(thirdMove, 1700);

	function fourthMove(){
		ball3.style.top="0";
		ball3.style.left="0";
	}
	var mySet3 = setTimeout(fourthMove, 2550);
	var pause = document.querySelector(".Pause");
	pause.addEventListener("click", function(){
	clearTimeout(mySet1);
	clearTimeout(mySet2);
	clearTimeout(mySet3);

	var restart = document.querySelector(".Restart");
	restart.addEventListener("click",function(){

                 ball1.style.left = 0;
                 ball1.style.top = 0;

                 ball2.style.top = 0;

                 ball4.style.left = "calc(100% - 40px)";

                 ball3.style.top="300px";




          	})
})
})

