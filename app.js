$(document).ready(function(){

  var box = $('.box');
	var color = 'white';
	var colors = 'white green red blue yellow'

	box.on('click', function(){
		$(this).addClass(color);
	})
	box.on('dblclick', function(){
		$(this).removeClass(colors);
	})
	$('#reset').on('click', function(){
		box.removeClass(color);
	})
	var isPressed = false;
	$('.box').on('mousedown', function(){
		isPressed = true;
	});

	$('.box').on('mouseup', function(){
		isPressed = false;
	});

	$('.box').on('mouseenter', function(){
		if(isPressed){
			$(this).addClass(color);
		}
	});
	$('#red').on('click', function(){
		color = 'red';
	})
	$('#blue').on('click', function(){
		color = 'blue';
	})
	$('#green').on('click', function(){
		color = 'green';
	})
	$('#yellow').on('click', function(){
		color = 'yellow';
	})
	$('#white').on('click', function(){
		color = 'white';
	})
})







































// $(document).ready(function(){
//
// 	var color = "white";
// 		//selector //listener //callback
// 	$('.box').on("click", function(){
// 		$(this).addClass(color); // function body
// 	})
//
// 	$(".box").on('dblclick', function(){
// 		$(this).removeClass(color);
// 	})
//
// 	$('#reset').on('click', function(){
// 		$('.box').removeClass('red blue green yellow white');
// 	})
//
// 	$('#red').on('click', function(){
// 		color = 'red';
// 	})
//
// 	$('#blue').on('click', function(){
// 		color = 'blue';
// 	})
//
// 	$('#green').on('click', function(){
// 		color = 'green';
// 	})
//
// 	$('#yellow').on('click', function(){
// 		color = 'yellow';
// 	})
//
// 	$('#white').on('click', function(){
// 		color = 'white';
// 	})
//
//
//
//
// })
