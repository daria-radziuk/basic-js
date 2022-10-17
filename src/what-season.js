const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const month = date.getMonth();

  if (!date) return 'Unable to determine the time of year!';

  if (!date.getTime) {
    throw new Error('Invalid date!');
  }
  
  if (month === 0 || month === 1 || month === 11) {
    return 'winter'
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring'
  } else if (month === 5 || month === 6 || month === 7) {
    return 'summer'
  } else {
    return 'autumn'
  }
}



/*function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  }
  catch(err) {
    throw new Error('Invalid date!');
  }
  if (isNaN(date.valueOf())) throw new Error('Invalid date!');
  if (!(date instanceof Date)) throw new Error('Invalid date!');

  if (date.getMonth() <= 1 || date.getMonth() === 11) {return "winter"} else
  if (date.getMonth() <= 4) {return "spring"} else
  if (date.getMonth() <= 7) {return "summer"} else
  if (date.getMonth() <= 10) {return "autumn"}

}
*/

module.exports = {
  getSeason
};
