$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 5, 23),
		newYear = false;
	
	
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "Дней: " + days +", ";
			message += "часов: " + hours + ", ";
			message += "минут: " + minutes + " и ";
			message += "секунд: " + seconds + " <br />";
			
			if(newYear){
				message += "осталось до ЕГЭ по информатике и ИКТ! <br /> Клик на № кабинета, чтобы увидеть ФИО учителя";
			}
			else {
				message += "осталось до ЕГЭ по информатике и ИКТ! <br /> Клик на № кабинета, чтобы увидеть ФИО учителя";
			}
			
			note.html(message);
		}
	});
	
});
