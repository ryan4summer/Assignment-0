function isPalindrome(word) {
  // Insert code here;
  var result = true;
  for(var i = 0; i < (word.length/2); i++){
  	if(word.charAt(i) != word.charAt(word.length - i - 1))
  		result = false;
  }
  return result;
}

// Do not edit this line;
module.exports = isPalindrome;