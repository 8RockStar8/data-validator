var Validator = require('./validator');
class ArmPhoneValidator extends Validator{
  	isArmPhoneNumber(phonenum){
    	let armPHonenum = /^(055\d{6}|095\d{6}|077\d{6}|093\d{6}|094\d{6}|098\d{6}|091\d{6}|099\d{6}|041\d{6}|043\d{6}|010\d{6}|[+]374\d{8}|[+]37410\d{6})$/;
    	if(armPHonenum.test(phonenum)) {
    		return true;
    	} else {
    		return false;
    	}
  	}
}


console.log(" --- ");
console.log("extends types data's place");
let vArmPhone = new ArmPhoneValidator();
console.log("isArmPhoneNumber(+37491999999) return - " + vArmPhone.isArmPhoneNumber(+37491999999));
console.log("isArmPhoneNumber(091999999) return - " + vArmPhone.isArmPhoneNumber(091999999));
console.log("isArmPhoneNumber(+37477991177) return - " + vArmPhone.isArmPhoneNumber(+37477991177));
console.log("isArmPhoneNumber(+78197564849) return - " + vArmPhone.isArmPhoneNumber(+78197564849));
console.log("isArmPhoneNumber() return - " + vArmPhone.isArmPhoneNumber());
console.log("isArmPhoneNumber('+37491999999') return - " + vArmPhone.isArmPhoneNumber("+37491999999"));
console.log("isArmPhoneNumber('091999999') return - " + vArmPhone.isArmPhoneNumber("091999999"));
console.log("isArmPhoneNumber('+37477991177') return - " + vArmPhone.isArmPhoneNumber("+37477991177"));
console.log("isArmPhoneNumber('+78197564849') return - " + vArmPhone.isArmPhoneNumber("+78197564849"));
console.log("isArmPhoneNumber('091999999') return - " + vArmPhone.isArmPhoneNumber("091999999"));
console.log("isArmPhoneNumber('+37400000000') return - " + vArmPhone.isArmPhoneNumber("+37400000000"));
console.log("isArmPhoneNumber(+37400000000) return - " + vArmPhone.isArmPhoneNumber(+37400000000));