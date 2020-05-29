function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let result = new Set();
  for(var i = 0; i < args.length; i++){
  	args[i].forEach(num =>{
  		if(!result.has(num))
  			result.add(num);
  	});
  }
  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;