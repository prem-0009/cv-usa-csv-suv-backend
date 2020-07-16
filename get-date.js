const getDate = function(rowArr){
  return rowArr[3]
}




//did above code
if (typeof getDate === 'undefined') {
  getDate = undefined;
}


module.exports = getDate;
