var ques = [
	ques1 = {	
		'q': 'Where?',
		'a': ['Chicago', 'San Francisco', 'Cleveland', 'Kansas City']
	},

	ques2 = {
		'q': 'When?',
		'a': ['Run', 'Walk', 'Bike', 'Dance']
	}

]

// create start button
var but = $('<button>').attr('class', 'btn btn-danger start').html('Start');
$('.main').append(but);

$('.start').click(function(){
	$('.start').remove();
	question();
});

// load question 1
function question() {
	var qu = $('<h3>').html(ques[0].q).attr('class', 'ques');
	$('.main').append(qu);
	for (var i = 0; i < 4; i++) {
		var op = $('<p>').html(ques[0].a[i]).attr('class', 'btn btn-primary list');
		$('.main').append(op);
		setInterval();
	}
}



