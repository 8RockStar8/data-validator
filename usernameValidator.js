var Validator = require('./validator');
class UsernameValidator extends Validator{
  	isUserName(username){

    	let trueUsername = /^[\w+_-]{4,24}$/;
    	if(trueUsername.test(username)) {
      		return true;
    	} else {
    		return false;
    	}
  	}
}

console.log(" --- ");
console.log("extends types data's place");
let vUsername = new UsernameValidator();
console.log("isUserName('First Usernmame') return - " + vUsername.isUserName("First Usernmame"));
console.log("isUserName('First_Usernmame') return - " + vUsername.isUserName("First_Usernmame"));
console.log("isUserName('Just name') return - " + vUsername.isUserName("Just name"));
console.log("isUserName('Just_name') return - " + vUsername.isUserName("Just_name"));
console.log("isUserName('name') return - " + vUsername.isUserName("name"));
console.log("isUserName('WTF here') return - " + vUsername.isUserName("WTF here"));
console.log("isUserName('noname') return - " + vUsername.isUserName("noname"));
console.log("isUserName() return - " + vUsername.isUserName());