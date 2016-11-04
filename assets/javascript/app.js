var ques = [
	ques1 = {	
		'q': 'What is the total number of bones in the human body?',
		'a': ['32', '196', '206', '512'],
		'c': 2
	},

	ques2 = {
		'q': 'Which rare element would you associate with Marie and Pierre Curie?',
		'a': ['Uranium',  'Gold', 'Platinum', 'Radium'],
		'c': 3
	},

	ques3 = {
		'q': 'The animal kingdom is formally classified into major groups known as',
		'a': ['Orders', 'Families', 'Phyla', 'Sub Phyla'],
		'c': 2
	},

	ques4 = {
		'q': 'Which gas evolves when charcoal is burnt?',
		'a': ['Oxygen', 'Ozone', 'Nitrogen', 'Carbon Dioxide'],
		'c': 3
	},

	ques5 = {
		'q': 'Who invented the miner\'s safety-lamp?',
		'a': ['Thomas Edison', 'Sir Frank Whittle', 'Sir Humphrey Davey', 'Alexander Bell'],
		'c': 2
	},

	ques6 = {
		'c': 'Game over'
	}
]

var yesGifs = [
 	lions = {'src': "assets/images/lions.gif"},
 	pugs = {'src': "assets/images/pugs.gif"},
 	leopard = {'src': "assets/images/leopard.gif"},
 	lizard = {'src': "assets/images/lizard.gif"},
 	style = {'src': "assets/images/style.gif"}
]
 	
var noGifs = [
 	duck = {'src': "assets/images/duck.gif"},
 	parrot = {'src': "assets/images/parrot.gif"},
 	shock = {'src': "assets/images/shock.gif"},
 	slap = {'src': "assets/images/slap.gif"},
 	splash = {'src': "assets/images/splash.gif"}
]

var endGif = "assets/images/massage.gif";

var quesNum = 0;
var number = 8;
var correct = ques[quesNum].c;
var scoreNum = 0;
var ansData;
startButton();

// create start button
function startButton() {
	var but = $('<button>').attr('class', 'btn btn-danger start').html('START');
	$('.main').empty();
	$('.main').append(but);
	$('.resetButton').empty();
	clickStart();
}

// when start button is clicked
function clickStart() {
	$('.start').click(function(){
		$('.start').hide();
		runTimer();
	});
}

// set interval
function runTimer() {
	if (quesNum === 5) {
		$('.resetButton').empty();
		stop();
		score();
	} else {
		number = 4;
		correct = ques[quesNum].c;
	    counter = setInterval(decrement, 1000);
	    $('.timer').html(number);
	    question();
	}
}

// decrease timer
function decrement() {
    number--;
    $('.timer').html(number);
    if (number === 0) {
        stop();
        outOfTime();
    }
}

// load question and answer choices
function question() {
	$('.main').empty();
	$('.resetButton').empty();
	var qu = $('<h3>').html(ques[quesNum].q).attr('class', 'ques');
	$('.main').append(qu);
	for (var i = 0; i < 4; i++) {
		var op = $('<p>').html(ques[quesNum].a[i]).attr({
			'class': 'btn btn-primary list',
			'data-ans': i
		});
		$('.main').append(op);
	}
	playerGuess();
}

// The stop function
function stop(){
    clearInterval(counter);
}

// when timer runs out
function outOfTime() {
	$('.main').html('Out of time!');
	if (quesNum < 5) {
		var m = $('<p>').html('The correct answer is ' + ques[quesNum].a[correct]);
		$('.main').append(m);
		noGif();
	}
	stop();
	nextQues();
}

// click event listener for player guess
function playerGuess() {
	$(document).on('click', '.list', function() {
		ansData = $(this).data('ans');
		$(document).off('click', '.list');
		stop();
		checkAns();
	})	
}

// check if player guess is right or wrong
function checkAns() {
	if (ansData === correct) {
		ansData = '';
		correctAns();
		console.log('correct');
	} else { 
		ansData = '';
		wrongAns();
		console.log('wrong');
	}
}

// if player guessed right
function correctAns() {
	var e = $('<p>').html('The correct answer is ' + ques[quesNum].a[correct]);
	$('.main').html('Correct!').append(e);
	scoreNum++;
	stop();
	yesGif();
	nextQues();
}

// if player guessed wrong
function wrongAns() {
	var e = $('<p>').html('The correct answer is ' + ques[quesNum].a[correct]);
	$('.main').html('Nope!').append(e);
	stop();
	noGif();
	nextQues();
}

// loads gif for right answer
function yesGif() {
	var r = Math.floor(Math.random()*5);
	var g = yesGifs[r].src;
	var i = $('<img>', {src: g});
	i.appendTo($('.resetButton'));
}

// loads gif for wrong answer
function noGif() {
	var r = Math.floor(Math.random()*5);
	var g = noGifs[r].src;
	var i = $('<img>', {src: g});
	i.appendTo($('.resetButton'));
}

// wait to display next question
function wait() {
	setTimeout(runTimer, 1000*5);
}

// sets next question to load
function nextQues() {
		quesNum++;
		stop();
		wait();
}

// display score to player
function score() {
	$('.main').html('GAME OVER! You answered ' + scoreNum + ' out of 5 questions correctly!!');
	stop();
	resetButton();
}

// make reset button
function resetButton() {
	var btn = $('<button class="btn btn-danger reset">').html('RESET');
	var s = $('<img>').attr('src', endGif);
	$('.resetButton').append(btn, s);
	// $('.resetButton').append(s);
	clickReset();
}

// click event listener for reset button
function clickReset() {
	$(document).on('click', '.reset',function() {
		$(document).off('click', '.reset');
		$('.resetButton').empty();
		resetGame();
	})
}

// resets game
function resetGame() {
	quesNum = 0;
	number = 8;
	scoreNum = 0;
	stop();
	startButton();
}