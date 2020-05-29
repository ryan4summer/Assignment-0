function pairSum(nums, target) {
  // Insert code here;
  var result = false;
  var temp = 0;
  if(nums.length <= 1 )
  	throw 'The input of array should not less than 2';
  for(var i = 0; i < nums.length; i++){
  	for(var j = 0; j < nums.length; j++){
  		if(i == j)
  			break;
  		result = ((nums[i] + nums[j])==target);
  		if(result)
  			return result;
  	}
  }


  return result;
}

// Do not edit this line;
module.exports = pairSum;