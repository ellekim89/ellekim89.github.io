$(function(){
	$('#intro').modal('show');

	
	var running = true;
	var gameBoard = []
	var clickCount = 0
	var score = 0
	var oneScore = 0
	var twoScore = 0
	var playerOne= true
	
	var clickOne =""
	var clickTwo =""
	var classOne =""
	var classTwo =""





	shuffleGame();

	//Shuffles the board
	function shuffleGame(){
		running = true
		$('img').addClass("visibility");
		score = 0
		clickCount = 0
		var parent = $(".game-wrapper");
    	var divs = parent.children();
    	while (divs.length) {
        	parent.append(divs.splice(Math.floor(Math.random() 
        	* divs.length), 1)[0]);
		}
	}



	//PLAY AGAIN BUTTON
	$('.shuffle').click(function (){
		//console.log('SHUFFLING!')
		$('img').addClass("visibility");
		shuffleGame();
		$('.score').text("");
	 	$('.score').append('No clicks.');
	 	$('h3').text('');
	 	$('h3').append("Player 1's turn!")
		playerOne = true
		running = true;

	});

	// function removeClass(){
	// 	classTwo.addClass("visibility");
		
	// }

	//MATCHING FUNCTION
	 $('.game-wrapper').find('div').on('click', function(){
	 	console.log(gameBoard.length)
		console.log(playerOne)
	 	if (running === true){
	 		score = score + 1;
	 	}
	 	$('.score').text('');
	 	$('.score').append(score + ' clicks.');
	 	//console.log(score)
	 	if(running === false){
	 		return;
	 	}
	 	if((clickCount % 2 === 0) && ($('img',this).attr('class') === 'visibility')) {
	 		clickOne = $('img',this).attr('src');
	 		//console.log(clickOne);
	 		classOne = $('img',this);
	 		//clickOne = $('img',this).val();
	 		clickCount = clickCount + 1;
	 		//score = score + 1;
	 		$('img', this).removeClass("visibility");
	 	}else if((clickCount % 2 != 0) && ($('img',this).attr('class') === 'visibility')){
	 		clickTwo = $('img',this).attr('src');
	 		//console.log(clickTwo);
	 		classTwo = $('img',this);
	 		//clickTwo = $('img',this).val();
	 		clickCount = clickCount + 1;
	 		//score - score + 1
	 		//setInterval(removeClass, 500);
	 		$('img', this).removeClass("visibility");
	 			if(clickOne != clickTwo){
	 				//classOne.addClass("visibility");
	 				setTimeout(function(){
	 					classOne.addClass("visibility");
       					classTwo.addClass("visibility");
  						 }, 300);
	 				//classTwo.addClass("visibility");
	 				//console.log(setInterval(removeClass, 500));
	 			} else {
	 				gameBoard.push(clickOne, clickTwo)
	 				checkEnd();
	 				return;
	 			}
	 		}

      });

	 function checkEnd(){
	 	if (gameBoard.length != 16){
	 		return;
	 	} else if (playerOne === true) {
	 		oneScore = score
	 		alert("It is Player 2's turn!");
	 		running = false;
	 		playerOne = false
	 		$('h3').text('');
	 		$('h3').append("Player 2's turn!")
	 		gameBoard = []
	 		shuffleGame();
	 	} else {
	 		twoScore = score
	 		running = false;
	 			if (oneScore < twoScore){
	 				$('#WinnerOne').modal('show');
	 				$('h3').text('');
	 				$('h3').append("Player 1 Wins!")
	 			} 
	 			else if(twoScore < oneScore){
	 				$('#WinnerTwo').modal('show');
	 				$('h3').text('');
	 				$('h3').append("Player 2 Wins!")
	 			}
	 			else{
	 				$('#WinnerTie').modal('show');
	 				$('h3').text('');
	 				$('h3').append("It's a tie!")
	 			}
	
	 	}
	 };


	//
});