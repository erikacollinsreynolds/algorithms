// Practice making a HashTable
/* Notes:
  A simple hash function does the following:
    - takes in the value
    - loops through each character
    - return a character code for each character
    - multiplies it by the index
    - adds it to the initial hash value
    - we use the remainder operator so we don't get above the length of the Array size
*/


// // Part 1: create an array in the constructor using size as the parameter
// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//   }

//   // Part 2: create the hash function which will return a hash value, the value will simply be the location where our data will be stored
//   // Note: this hash function is simple, building a reliable one is a complex cryptography topic
//   hashFunction(value) {
//     let hash = 0;
//     for (let i = 0; i < value.length; i++) {
//       hash = (hash + value.charCodeAt(i) * i) % this.table.length;
//     }
//     return hash;
//   }

//   // Part 3: create set method that adds items to the hash HashTable
//   set(key, value) {
//     let memoryLocation = this.hashFunction(key);
//     if (!this.table[memoryLocation]) {
//       this.table[memoryLocation] = [];
//     }
//     this.table[memoryLocation].push([key, value]);
//     return this.table;
//   }

//   // Part 4: create get method that retrieves items from hash HashTable
//   getItems(key) {
//     let memoryLocation = this.hashFunction(key);
//     if (!this.table[memoryLocation]) return null;

//     return this.table[memoryLocation].find((x) => x[0] === key)[1];
//   }
// }

// // Create a hashTable with the size of 4 (is this indexes???)
// const hashTable = new HashTable(4);

// // Invoke the hashFunction which will return a value which represents the index where it should be stored 
// console.log(hashTable.hashFunction('Hey')); // 3
// console.log(hashTable.hashFunction('Love')); //2

// // Set key-value in memory/hashTable
// console.log(hashTable.set('Victor', 24)) //[ <1 empty item>, [ [ 'Victor', 24 ] ], <2 empty items> ]
//blah