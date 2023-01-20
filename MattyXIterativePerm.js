/*
Declare a function 'subsetSum' that is given an array of integers and a target number. It should return true if there is a subset of the array that sums up to the target and returns false otherwise. A subset can be any size and the elements do not have to appear consecutively in the array.
Examples:
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)
*/
function subsetSum (arr, target){
  //create a queue (or stack, doesn't matter, I just like breadth first search more, stack is more efficient technically cause it uses pop instead of shift)
  //first node will be the "root" of our tree
  let queue = [{level: 0, sum: 0}];
  //while we have nodes to iterate over
  while(queue.length){
    //take out our first element
    let current = queue.shift();
    const {level, sum} = current;
    //if our sum is equal to the target, return true
    if(sum === target){return true}
    //if we've iterated through all our elements, continue (essentially deleting the current node)
    if(level === arr.length){continue}
    //otherwise, add the two options, take it or leave it
    //leave
    queue.push({level: level + 1, sum: sum});
    //take based on level (you can also call it the index)
    queue.push({level: level + 1, sum: sum + arr[level]})
  }
  //if all nodes and paths have been exhuasted, return false
  return false;
}
console.log(subsetSum([3, 7, 4, 2], 5))           //-> true (3 + 2 = 5)
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) //-> true (3 + 12 + 5 + 12 = 32)
console.log(subsetSum([8, 2, 4, 12], 13))         //-> false
console.log(subsetSum([8, -2, 1, -3], 6))         //-> true (8 + 1 + (-3) = 6)