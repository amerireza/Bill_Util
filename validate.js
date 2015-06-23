function validateBillId(billId){
	utilCode = billId.substring(billId.length-2,billId.length-1);
	chkDigit1 = billId.substring(billId.length-1,billId.length);
	
	chksum = genrateChksum(billId.substring(0,billId.length-1));
	chksum > 9 ? chkDigit = 0 : chkDigit = chksum;
	if(chkDigit == chkDigit1)
		return true;
	else
		return false;
	
}
 
function validatePayId(PayId){
	chkDigit1 = PayId.substring(PayId.length-2,PayId.length-1);
	chkDigit2 = PayId.substring(PayId.length-1,PayId.length);
 
}
 
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
