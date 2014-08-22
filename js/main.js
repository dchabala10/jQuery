var interval;
var speed;
var counter = 0;
var levelInterval;

$(document).ready(function(){

	//When the mouseovers over a block, change the background coller of the
	//block to whatever color you want

	$(document).on('mouseover', '.block', function(){
  		$(this).css('background-color','blue');
	
	}).on('mouseout','.block', function(){
		$(this).css('background-color', 'white');

	});

	$(document).on('click', '.block', function(){
		$(this).remove();
		
	});

	//Add a block every x seconds
	
	
	
	$('.go-button').click(function(event){
		
		if ($(this).text() == 'GO!'){
			var level = $('.level').val();

			if (level == "EXTREME"){
				speed -= speed * .10;

			} else if (level == "Lame Sauce"{

			} else if (level == "Baby"){

			}


			setTimer(speed, 'start');
			$(this).text('PAUSE!');
			$('.starting-speed').prop("disabled", true);
		} else {
			setTimer(speed, 'pause');
			$(this).text('GO!');
			$('.starting-speed').prop("disabled", false);
		}

	});

	$('.restart-button').click(function(event){
		location.reload();

	});


});

function setTimer(speed, type){


	speed = ($('.starting-speed').val() * 1000);


	if (type == 'start'){

		interval = setInterval(function(){
		if(counter == 0){
			$('body').append('<div class="row"><div class="block">New Block</div></div>');
			counter++;
		
		} else if (counter > 0 && counter < 3){
			$('.row').last().append('<div class="block">New Block</div>');
			counter++;
		
			} else {
				$('.row').last().append('<div class="block">New Block</div>');
				counter = 0;
					
				}		

			}, speed);

		} else if (type == 'pause'){
			clearInterval(interval);
		}

   	
   	}

function setFrequency(frequency, speed, type, level){


	levelInterval = setInterval(function(){
		if (type == 'start'){

			setTimer(speed, 'pause');
			setTimer(speed, 'start');

		} else{
			clearInterval(levelInterval);
		}

	}, frequency);

}
