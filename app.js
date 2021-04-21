let quotes = [];
fetch("https://type.fit/api/verses")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes = data;
		document.getElementById('text').html(quotes[0].text);
		document.getElementById('author').html(quotes[0].author);
  });
