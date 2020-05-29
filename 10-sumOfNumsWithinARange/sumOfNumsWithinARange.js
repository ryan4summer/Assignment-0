function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var count = 0;
  for(var i = 0; i < nums.length; i++){
  	if(start == end){
      count ++;
  		break;
  	}
  	if(nums[i] == start){
  		count++;
  	  start = nums[i + 1];
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;