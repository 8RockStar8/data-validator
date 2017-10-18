var Validator = require('./validator');
class PasswordValidator extends Validator{
  	isPassword(pass){
    	let truePass = /^[\w+_-]{6,20}$/;
    	let falsePass = /^(\w+)?(password)(\w+)?$/i;
    	if(truePass.test(pass) && !falsePass.test(pass)) {
      		return true;
    	} else {
    		return false;
    	}
  	}
}

console.log(" --- ");
console.log("extends types data's place");
let vPass = new PasswordValidator();
console.log("isPassword('7812365454') return - " + vPass.isPassword("7812365454"));
console.log("isPassword('password') return - " + vPass.isPassword("password"));
console.log("isPassword('word_32byte') return - " + vPass.isPassword("word_32byte"));
console.log("isPassword('777') return - " + vPass.isPassword("777"));
console.log("isPassword('@#/_kskjdskjfhnfvn') return - " + vPass.isPassword("@#/_kskjdskjfhnfvn"));