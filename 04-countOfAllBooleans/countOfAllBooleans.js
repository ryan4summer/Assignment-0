function countOfAllBooleans(arr) {
  // Insert code here;
  var result = 0;
  for(var i = 0; i <= arr.length; i++ ){
  	if(arr[i] === true || arr[i] === false)
  		result++;
  }
  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleans;