$(document).ready(function(){
	$.get("http://127.0.0.1:5000/quotes/random", function(data, status){
        document.getElementById("quote_text").innerHTML = data.quote.quote_text;
    	document.getElementById("quote_author").innerHTML = data.quote.author;
    });
	var cookieVal = getCookie("testa");
	if (cookieVal !== ""){
		//alert("cookie: " + cookieVal);		
	}
	setCookie("testa", "testVal", 1);
});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookieNoStore(cname, cvalue){
	var d = new Date();
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}