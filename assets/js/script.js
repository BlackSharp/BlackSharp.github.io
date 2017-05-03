$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 3, 23),
		newYear = true;
	
	
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "Дней: " + days +", ";
			message += "часов: " + hours + ", ";
			message += "минут: " + minutes + " и ";
			message += "секунд: " + seconds + " <br />";
			
			if(newYear){
				message += "осталось до ЕГЭ! <br /> Клик на № кабинета, чтобы увидеть ФИО учителя";
			}
			else {
				message += "осталось до момента через 10 дней!";
			}
			
			note.html(message);
		}
	});
	
});
