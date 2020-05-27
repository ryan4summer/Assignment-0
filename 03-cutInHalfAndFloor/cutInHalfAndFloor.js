function cutInHalfAndFloor(num) {
  // Insert code here;
  if(num % 2 != 0)
  	num = num / 2 - 0.5;
  else
  	num /= 2;
  return num
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;