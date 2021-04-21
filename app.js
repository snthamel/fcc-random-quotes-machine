let quotes = [];
$(document).ready(function () {
	$.ajax({
		url: "https://type.fit/api/quotes",
		method: 'GET',
		dataType: 'json',
		success: function (data) {
			quotes = data;
			$('span#text').html(quotes[0].text);
			$('span#author').html(quotes[0].author);
		},
		error: function (xhr, status, error) {
			console.log(error);
		}
	});
});
