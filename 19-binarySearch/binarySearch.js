class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if(nums.length == 1)
    	return nums[0] == target;
    if(nums.length % 2 == 0){
    	if(target == (nums[Math.floor(nums.length / 2)-1]))
	 		return true;
	    else if(target < (nums[Math.floor(nums.length / 2)-1]))
	 		return this.binarySearch(nums.slice(0,(nums.length / 2)),target);
	 	else 
	 		return this.binarySearch(nums.slice((nums.length / 2 )),target);
 	}else{
 		if(target == (nums[Math.floor(nums.length / 2)]))
	 		return true;
 		if(target < (nums[Math.floor(nums.length / 2)]))
	 		return this.binarySearch(nums.slice(0,((nums.length / 2) )),target);
	 	else
	 		return this.binarySearch(nums.slice((nums.length / 2) ),target);
 	}
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;