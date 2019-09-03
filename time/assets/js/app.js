$(document).ready(function() {
    var clock;
	var diff;
	var incCounter;
    var currentDate = new Date();
    var futureDate = new Date('12/12/2018');
	if (futureDate > currentDate) {
		incCounter = true;
		diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
		$(".caption").html("Welcome to my world in");
	} else {
		incCounter = false;
		diff = currentDate.getTime() / 1000 - futureDate.getTime()/1000;
		$(".caption").html("Thank you for being part of my world since");
	}
    clock = $('.clock').FlipClock(diff, {
      clockFace: 'DailyCounter',
      countdown: incCounter
    });	
});
