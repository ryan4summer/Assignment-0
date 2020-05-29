function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var result = 1;
  for(var i = 0; i < args.length; i++){
  	result *= args[i];
  }
  return result;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;