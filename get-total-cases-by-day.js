const getDate = require('./get-date.js')
const getTotalCases = require('./get-total-cases.js')

const getTotalCasesByDay = function(dateString, arr2d){

  for (const elements of arr2d){
    if (dateString === getDate(elements)){
      
      return getTotalCases(elements);
    }
  }
}


//did above

if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
