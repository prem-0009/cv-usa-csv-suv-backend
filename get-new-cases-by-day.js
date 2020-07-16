const getDate = require('./get-date.js')
const getNewCase = require('./get-new-cases.js')

const getNewCasesByDay = function(stringDate, arr2d){
  for ( const arr of arr2d){
    if ( stringDate === getDate(arr)){
      return getNewCase(arr)
    }
  }
}
//did above 



if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
