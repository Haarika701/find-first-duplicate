function findFirstDuplicate(arr) {
  // type your code here

  let elementSet = new Set();
  for(let i = 0 ; i < arr.length ; i++){
    if( elementSet.has(arr[i])) 
    return arr[i];
    elementSet.add(arr[i])
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
//create a variable and assign it to a new set() datastructure
//iterate through the array
//check if the element is present in the set or not. if present, return the element
  //if not present, then add the element to the set and return the element and move on the next element in the array
  //return the -1 if no duplicate is present

// And a written explanation of your solution
// * A Set is a data structure that contains only unique objects/values.
//  * If I check if a value is in a Set before adding it, I'll know if there's
//  * a duplicate. If there's a duplicate, I'll just return that value right 
//  * away because that'll be the first duplicate in the input array. If we
//  * exit iteration without returning anything, that means there's no duplicate, 
//  * so we'll return -1
//  * ********************