/**
 * Create array without duplicates 
 *
 * @param {Array} numList iterable 
 * @returns {Array} no duplicates 
 */
function removeDups(numList){
  let map = new Map();
  for (let num of numList){
    map.set(num,"");
  }
  let array = [];
  for (let num of map.keys()) {
    array.push(num);
  }
  return array;
}