let user = {
  age: 25,
  name: "Roman",
  magic: true,
  scream: function () {
    console.log("Hola!!!");
  },
};

user.age; // O(1)
user.spell = "abcra ka dabra"; // O(1)
console.log(user);

user.scream(); // O(1)

// PROBLEM with HASH TABLE
// - Hash Collision: inserts more than one value in a same memory address as hash table have limited space

const a = new Map(); // also a type of object but takes any kind of datatypes as Key and are in insertion order
const b = new Sets(); // similar to Map but only stores key as the data