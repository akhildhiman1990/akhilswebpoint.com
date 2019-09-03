/**
 * @author Akhil
 */
var dates = document.getElementById("dayfield");
var days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var years = document.getElementById("yearfield");
var month = document.getElementById("monthfield");
var today = new Date();
// Date of Birth Start
function daysselect()
{
	dates.options.length=0;
	var mon = document.getElementById('monthfield').value;
	var year = document.getElementById('yearfield').value;
	var date = dates.value;
	if((mon == 'January') || (mon == 'March') || (mon == 'May') || (mon == 'July') || (mon == 'August') || (mon == 'October') || (mon == 'December'))
	{
			for (var d = 0; d < days.length; d++) {
	        var opt = document.createElement('option');
	        opt.innerHTML = days[d];
	        opt.value = days[d];
	        dates.appendChild(opt);
	    }
	}
	else if((mon == 'April') || (mon == 'June') || (mon == 'September') || (mon == 'November'))
	{
		for (var d=0;d<30;d++)
		{
			var opt = document.createElement('option');
			opt.innerHTML = days[d];
			opt.value = days[d];
			dates.appendChild(opt);
		}
	}
	else if(mon == 'February')
	{
		for (var d=0;d< 28;d++)
		{
			var opt = document.createElement('option');
			opt.innerHTML = days[d];
			opt.value = days[d];
			dates.appendChild(opt);
		}
	}
}
function yearselect()
{
	dates.options.length = 0;
	var year = years.value;
	var mon = month.value;
	var day = dates.value;
	if(((year % 4) == 0) && (mon == "February"))
	{
		for (var d=0; d<29; d++)
		{
			var opt = document.createElement('option');
			opt.innerHTML = days[d];
			opt.value = days[d];
			dates.appendChild(opt);
		}
	}
	else
	{
		daysselect();
	}
}
function monthselect(){
	month.options.length = 0;
    for (var m = 0; m < months.length; m++) {
        var opt = document.createElement('option');
        opt.innerHTML = months[m];
        opt.value = months[m];
        month.appendChild(opt);
    }
	// Year Select
    var thisyear = today.getFullYear()
    for (var y = 0; y < 40; y++) {
        years.options[y] = new Option(thisyear, thisyear)
        thisyear -= 1
    }
}
// Date of Birth End
monthselect();
daysselect();