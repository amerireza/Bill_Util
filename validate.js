function genrateChksum(number){
	sum = 0;
	mulitplyFactor = 2;
	base = 11;
	for(i = number.length-1 ; i >= 0; i--){
		sum += parseInt(number[i]) * mulitplyFactor++;
		if(mulitplyFactor == 8)
			mulitplyFactor = 2;
	}
	//console.log("sum: " + sum);
	//console.log((base - (sum % base)) > 9 ? 0 : (base - (sum % base)));
	return (base - (sum % base));
}

function isBillIdValid(billId){
	billId = normaliseInput(billId);
	chkDigit1 = billId.substring(billId.length-1,billId.length);
	chksum = genrateChksum(billId.substring(0,billId.length-1));

	chksum > 9 ? chkDigit = 0 : chkDigit = chksum;
	if(chkDigit == chkDigit1)
		return true;
	else
		return false;
}


function isPayIdValid(billId, payId){
	billId = normaliseInput(billId);
	payId = normaliseInput(payId);
	chkDigit1 = payId.substring(payId.length-2,payId.length-1);
	chkDigit2 = payId.substring(payId.length-1,payId.length);
	
	chksum = genrateChksum(payId.substring(0,payId.length-2));
	if(chksum == chkDigit1){
		chksum = genrateChksum(billId + payId.substring(0,payId.length-1))
		if(chksum == chkDigit2)
			return true;
		else
			return false;
	}
	else
		return false;
}

function normaliseInput(value){
	value=Number(value).toString();
	return value;
}
