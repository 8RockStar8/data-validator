var Validator = require('./validator');
class URLValidator extends Validator{
  isURL(url){
    let trueUrl = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
    if(trueUrl.test(url)) {
      	return true;
    } else {
    	return false;
    }
  }
}

console.log(" --- ");
console.log("extends types data's place");
let vUrl = new URLValidator();
console.log("isURL('https://www.facebook.com') return - " + vUrl.isURL("https://www.facebook.com"));
console.log("isURL('http://www.url.com') return - " + vUrl.isURL("http://www.url.com"));
console.log("isURL('https://www.newurl.com') return - " + vUrl.isURL("https://www.newurl.com"));
console.log("isURL('www.urlmurl.am') return - " + vUrl.isURL("www.urlmurl.am"));
console.log("isURL('.com') return - " + vUrl.isURL(".com"));
console.log("isURL('http://www.mysite') return - " + vUrl.isURL("http://www.mysite"));