const strings = ["a", "b", "c", "d"]; // 4 bits
//                0,   1,   2,   3
// 4*4 = 16 bytes of storage

strings[2]; // 3rd item: 'c' O(1)

// PUSH - adds last item to array
strings.push("e"); // O(1)

// POP - removes last item from array
strings.pop(); // O(1)

// UNSHIFT - adds item to the beginning of the array
strings.unshift("x"); // O(n)

// SPLICE - adds item to the any position of the array
strings.splice(2, 0, "roman"); // O(n/2) —> O(n)

// SHIFT - removes item from the beginning of the array
// strings.shift(); // 0(1)

// in C++ creating array
// int a[20];
// int b[5] {1,2,3,4,5};
// in Javascript and Python arrays are automatically dynamic

console.log(strings);

const set = new Set();
const obj = new Object()

console.log(obj.hasOwnProperty());
