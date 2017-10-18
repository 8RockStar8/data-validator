class Validator {
	constructor(num, sum) {
		num + sum;
	}

	isString(str){
		if(typeof(str) === "string") {
			return true ;
		} else {
	    	return false;
	    }
	}

	isNumber(num){
		let number = /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/;
		if(number.test(num)) {
			return true;
		} else {
			return false;
		}
	}

	isInteger(num){
		let numInteger = /^[+-]?([0-9]+)$/;
	    if(numInteger.test(num)) {
	      	return true;
	    } else {
	    	return false;
	    }
	}

	isFloat(num){
	    let numFloat = /^[+-]?(([0-9]{5})+([.][0-9]*)?|[.][0-9]+)$/;
	    if(numFloat.test(num)) {
	      	return true;
	    } else {
	    	return false;
	    }
	}

	isDate(d){
	    if(Date.parse(d)) {
	      	return true;
	    } else {
	    	return false;
	    }
	}

	isSpecialSymbol(sym){
	    let specialSymbol = /^[!@#\$%\^\&*\)\(+=~._-]+$/;
	    if(specialSymbol.test(sym)) {
	      	return true;
	    } else {
	    	return false;
	    }
	}
}

let validator = new Validator();
console.log(" --- validatoration string --- ");
console.log("isString('some string') return - " + validator.isString("some string"));
console.log("isString(77) return - " + validator.isString(77));
console.log("isString('77') return - " + validator.isString("77"));
console.log("isString() return - " + validator.isString());
console.log("");
console.log(" --- validatoration number --- ");
console.log("isNumber(888) return - " + validator.isNumber(888));
console.log("isNumber(88.8) return - " + validator.isNumber(88.8));
console.log("isNumber('888') return - " + validator.isNumber("888"));
console.log("isNumber('hello') return - " + validator.isNumber("hello"));
console.log("isNumber() return - " + validator.isNumber());
console.log("");
console.log(" --- validatoration integer --- ");
console.log("isInteger(888) return - " + validator.isInteger(888));
console.log("isInteger(88.8) return - " + validator.isInteger(88.8));
console.log("isInteger('888') return - " + validator.isInteger("888"));
console.log("isInteger('8.88') return - " + validator.isInteger("8.88"));
console.log("isInteger('hello') return - " + validator.isInteger("hello"));
console.log("isInteger() return - " + validator.isInteger());
console.log("");
console.log(" --- validatoration float --- ");
console.log("isFloat(888) return - " + validator.isFloat(888));
console.log("isFloat(.5) return - " + validator.isFloat(.5));
console.log("isFloat('888') return - " + validator.isFloat("888"));
console.log("isFloat('8.88') return - " + validator.isFloat("8.88"));
console.log("isFloat('hello') return - " + validator.isFloat("hello"));
console.log("isFloat() return - " + validator.isFloat());
console.log("");
console.log(" --- validatoration date --- ");
console.log("isDate(18.10.2017) return - " + validator.isDate(18,10,2017));
console.log("isDate(2017.10.18) return - " + validator.isDate(2017,10,18));
console.log("isDate(1940.10.15) return - " + validator.isDate(1940,10,15));
console.log("isDate(15.09.1965) return - " + validator.isDate(15,09,1965));
console.log("isDate('hello') return - " + validator.isDate("hello"));
console.log("isDate() return - " + validator.isDate());
console.log("isDate(888) return - " + validator.isDate(888));
console.log("isDate('2017.10.18') return - " + validator.isDate("2017.10.18"));
console.log("");
console.log(" --- validatoration special symbol --- ");
console.log("isSpecialSymbol('+') return - " + validator.isSpecialSymbol("+"));
console.log("isSpecialSymbol('-') return - " + validator.isSpecialSymbol("-"));
console.log("isSpecialSymbol('*') return - " + validator.isSpecialSymbol("*"));
console.log("isSpecialSymbol('=') return - " + validator.isSpecialSymbol("="));
console.log("isSpecialSymbol('.') return - " + validator.isSpecialSymbol("."));
console.log("isSpecialSymbol('_') return - " + validator.isSpecialSymbol("_"));
console.log("isSpecialSymbol('#') return - " + validator.isSpecialSymbol("#"));
console.log("isSpecialSymbol('@') return - " + validator.isSpecialSymbol("@"));
console.log("isSpecialSymbol('!') return - " + validator.isSpecialSymbol("!"));
console.log("isSpecialSymbol('\\(') return - " + validator.isSpecialSymbol("\("));
console.log("isSpecialSymbol('\\)') return - " + validator.isSpecialSymbol("\)"));
console.log("isSpecialSymbol('$') return - " + validator.isSpecialSymbol("$"));
console.log("isSpecialSymbol('\\$') return - " + validator.isSpecialSymbol("\$"));
console.log("isSpecialSymbol('%') return - " + validator.isSpecialSymbol("%"));
console.log("isSpecialSymbol('\\%') return - " + validator.isSpecialSymbol("\%"));
console.log("isSpecialSymbol('^') return - " + validator.isSpecialSymbol("^"));
console.log("isSpecialSymbol('\\^') return - " + validator.isSpecialSymbol("\^"));
console.log("isSpecialSymbol('&') return - " + validator.isSpecialSymbol("&"));
console.log("isSpecialSymbol('\\&') return - " + validator.isSpecialSymbol("\&"));
console.log("isSpecialSymbol('\\#') return - " + validator.isSpecialSymbol("\#"));
console.log("isSpecialSymbol('\\@') return - " + validator.isSpecialSymbol("\@"));
console.log("isSpecialSymbol('\\!') return - " + validator.isSpecialSymbol("\!"));
console.log("isSpecialSymbol('Hello symbols') return - " + validator.isSpecialSymbol("Hello symbols"));

module.exports = Validator;