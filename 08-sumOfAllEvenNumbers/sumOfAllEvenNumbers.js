function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  var result = 0;
  for(var i = 0; i <= nums.length; i++){
  	if(nums[i] % 2 == 0)
  		result++;
  }
  return result;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;