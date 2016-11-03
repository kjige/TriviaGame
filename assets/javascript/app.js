var ques = [
	ques1 = {	
		'q': 'Where?',
		'a': ['Chicago', 'San Francisco', 'Cleveland', 'Kansas City'],
		'c': 0
	},

	ques2 = {
		'q': 'When?',
		'a': ['Run', 'Walk', 'Bike', 'Dance'],
		'c': 1
	}

]

var quesNum = 0;
var number = 6;
var correct = ques[quesNum].c;
startButton();

// create start button
function startButton() {
	var but = $('<button>').attr('class', 'btn btn-danger start').html('Start');
	$('.title').append(but);
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
	number = 6;
    counter = setInterval(decrement, 1000);
    $('.timer').html('Time remaining: ' + number);
    question();
}

// decrease timer
function decrement() {
    number--;
    $('.timer').html('Time remaining: ' + number);
    if (number === 0) {
        stop();
        outOfTime();
    }
}

// load question and answer choices
function question() {
	$('.main').empty();
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
}

// click event listener for player guess
var ansData;
function playerGuess() {
	$(document).on('click', '.list', function() {
		ansData = $(this).data('ans');
		checkAns();
	})	
}

// check if player guess is right or wrong
function checkAns() {
		if (ansData === correct) {
			correctAns();
			console.log('correct');
		}
		if (ansData !== correct) {
			wrongAns();
			console.log('wrong');
		}
}

// if player guessed right
function correctAns() {
	var e = $('<p>').html('The correct answer is ' + ques[quesNum].a[correct]);
	$('.main').html('Correct!').append(e);
	quesNum++;
	stop();
	wait();
}

// if player guessed wrong
function wrongAns() {
	var e = $('<p>').html('The correct answer is ' + ques[quesNum].a[correct]);
	$('.main').html('Nope!').append(e);
	quesNum++;
	stop();
	wait();
}

// wait to display next question
function wait() {
	setTimeout(runTimer, 1000*2);
	checkQues();
}

// check if all questions answered
function checkReset() {
	if (quesNum === 2) {
		score();
	}
}

// display score to player
function score() {

}

// when game ends
function endGame() {

}