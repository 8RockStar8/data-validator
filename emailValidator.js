var Validator = require('./validator');
class EmailValidator extends Validator{
  	isEmail(email){
    	let vEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    	if(vEmail.test(email)) {
      		return true;
    	} else {
    		return false;
    	}
  	}
}

console.log(" --- ");
console.log("extends types data's place");
let vEmail = new EmailValidator();
console.log("isEmail('test@gmail.com') return - " + vEmail.isEmail("test@gmail.com"));
console.log("isEmail('testgmail.com') return - " + vEmail.isEmail("testgmail.com"));
console.log("isEmail('test@gmail,com') return - " + vEmail.isEmail("test@gmail,com"));
console.log("isEmail('test@.com') return - " + vEmail.isEmail("test@.com"));
console.log("isEmail('@gmail.com') return - " + vEmail.isEmail("@gmail.com"));
console.log("isEmail('789') return - " + vEmail.isEmail("789"));
console.log("isEmail() return - " + vEmail.isEmail());