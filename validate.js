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

function createBillId(profile, companyCode, serviceCode){

  var tmpBillId = normaliseInput(profile) + companyCode + serviceCode;
  return tmpBillId + genrateChksum(tmpBillId);
}

function createPayId(billId, amount, period, year){
  if(period.length !== 2)
  {
		if(period.length === 1)
			period = '0' + period;
		else
			return null;
	}
  if(year.length !== 1)
	{
		if(year.length === 2)
			year = year[year.length - 1];
		else
			return null;
	}
  amount = amount.substring(0, amount.length-3);

  var chkDigit1 = genrateChksum(amount + year + period);
  var chkDigit2 = genrateChksum(billId + amount + year + period + chkDigit1);

  return amount + year + period + chkDigit1 + chkDigit2;
}

console.log(createBillId("22085730","001","4"));
console.log(createPayId("8803144800146", "320387", "1", "96"));
console.log(isBillIdValid("2208573000142"));
