function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var result = 0;
  for(var i = 0; i <= arr.length; i++){
  	if(typeof(arr[i]) == "string" || typeof(arr[i]) == "boolean")
  		result ++;
  }
  return result;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;