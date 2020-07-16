const getRow = function(commaSeparatedString){
  return commaSeparatedString.split(',')
}

//did above code



if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;
