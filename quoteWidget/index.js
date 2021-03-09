let request = require('request');




request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", function(err, response, body){
body = JSON.parse(body);
    let randomQuote = body[0]["content"]["rendered"];
document.getElementById("quote").innerHTML = randomQuote; 

});


setInterval(function(){
    request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", function(err, response, body){
    body = JSON.parse(body); 
        let randomQuote = body[0]["content"]["rendered"];
	document.getElementById("quote").innerHTML = randomQuote; 
});
}, 5000);