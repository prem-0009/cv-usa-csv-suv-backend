const getRow = require('./get-row.js')

const getRows = function(newLineSeparatedString){
  //split the string separated with '\n'
  //loop through the elements
  //split the string separated with ',' and push to new empty array
  //finish loop
  //return the new array
  let newString = newLineSeparatedString.split('\n');
  let result = [];
  for ( const element of newString){
    result.push(element.split(','))//or
    //or result.push(getRow(element))
  }

  return result;
  
}




if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
