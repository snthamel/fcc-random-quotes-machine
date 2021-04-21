let quotes = [];
$(document).ready(function () {
	$.ajax({
		url: "https://type.fit/api/quotes",
		method: 'GET',
		dataType: 'json',
		success: function (data) {
			quotes = data;
			showRandomQuote();
		},
		error: function (xhr, status, error) {
			console.log(error);
		}
	});

	$('button#new-quote').on('click', showRandomQuote);
});

function showRandomQuote() {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomIndex];
	$('span#text').html(randomQuote.text);
	$('span#author').html(randomQuote.author);
}
