var ques = [
	ques1 = {	
		'q': 'Where?',
		'a': ['Chicago', 'San Francisco', 'Cleveland', 'Kansas City'],
		'c': 0
	},

	ques2 = {
		'q': 'When?',
		'a': ['Run', 'Walk', 'Bike', 'Dance']
	}

]

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
		$('.start').remove();
		question();
	});
}

// load question
var quesNum = 0;
function question() {
	var qu = $('<h3>').html(ques[quesNum].q).attr('class', 'ques');
	$('.main').append(qu);
	for (var i = 0; i < 4; i++) {
		var op = $('<p>').html(ques[quesNum].a[i]).attr({
			'class': 'btn btn-primary list',
			'data-ans': i
		});
		$('.main').append(op);
	}
	runTimer();
	checkAns();
}

// set interval
function runTimer(){
    counter = setInterval(decrement, 1000);
}

// The decrement function.
var number = 3;
function decrement(){
    number--;
    $('.timer').html('Time remaining: ' + number);
    if (number === 0){
        stop();
        // outOfTime();
    }
}

// The stop function
function stop(){
    clearInterval(counter);
}

function outOfTime() {
	$('.main').html('Out of time!');
}

var correct = ques[quesNum].c;
function wrong() {
	var e = $('<p>').html('The correct answer is ' + ques[quesNum].a[correct]);
	$('.main').html('Nope!').append(e);
}

function checkAns() {
	$('.list').click(function(){
		
	})
}