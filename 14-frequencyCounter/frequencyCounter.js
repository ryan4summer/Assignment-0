function frequencyCounter(word) {
  // Insert code here;
  var result = new Object();
  var x,temp = "";
  for(var i = 0; i < word.length; i++){
  	if(i == 0)
  		result[word.charAt(i)] = 1;
  	else{
	  	for(x in result){
	  		if(word.charAt(i) == x){
	  			result[x] = result[x] + 1;
	  			break;
	  		}
	  		else{
	  			result[word.charAt(i)] = 1;
	  		}
	  	}
	 }
  }
  return result;
}

// Do not edit this line;
module.exports = frequencyCounter;