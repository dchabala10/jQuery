$(document).ready(function(){

	//When the mouseovers over a block, change the background coller of the
	//block to whatever color you want

	$(document).on('.mouseover', '.block', function(){
  		$(this).css('background-color','blue');
	
	}).on('.mouseout','.block', function(){
		$(this).css('background-color', 'white');

	});

	$(document).on('.click', '.block', function(){
		$(this).remove();
		
	});

	//Add a block every x seconds
	var counter = 0;
	var frequency = 2000;

	setInterval(function(){
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

	}, frequency);


});

