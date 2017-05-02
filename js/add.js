function make_base_auth(user, password) {
  var tok = user + ':' + password;
  //var hash = Base64.encode(tok);
  return tok;
}

$(document).ready(function(){
    $("#addBtn").click(function(){
        var url = 'http://127.0.0.1:5000/quotes/add';

        $.ajax({
            url: url, 
            type: "POST",
            contentType: "application/json",
            headers: {"Authorization" : "Basic " + btoa("root:password")},
            data: JSON.stringify({"quote_text": "This is another quote", "author": "Again me"}),
            success: function( data ) { 
                alert( "success" + data.quote.id);
            }
        });
    });
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