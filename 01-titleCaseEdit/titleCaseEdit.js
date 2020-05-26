function titleCaseEdit(title) {
  // Insert code here;
  for(var i = 0; i <= title.length; i++){
  	if(i == 0)
  		title = title.charAt(0).toUpperCase() + title.slice(1);
  	else if(title.charAt(i) == " ")
  		title = title.slice(0, i)+ " " + title.charAt(i + 1).toUpperCase() + title.slice(i + 2);
  }
  return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;