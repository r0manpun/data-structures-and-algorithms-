// const nemo = ['nemo'];

// function findNemo(array){
//     for(let i=0; i<array.length;i++){
//         if(array[i]==='nemo'){
//             console.log('Found NEMO!')
//         }
//     }
// }

// findNemo(nemo)

// const boxes = [0,1,2,3,4,5]

// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]);
//     console.log(boxes[2]);
// }

// logFirstTwoBoxes(boxes)

// CHALLANGE
// function funChallange(input){
//     let a= 10; //O(1)
//     a= 50+3; //O(1)

//     for(let i =0; i <input.length; i++){ // O(n)
//         anotherFunction(); // O(n)
//         let stranger = true; // O(n)
//         a++; //O(n)
//     }

//     return a; //O(1)
// }

// funChallange();
// O(4 + 5n)

// const boxes=['a','b','c','d','e']

// function logAllPairsofArray(array){
//     for(let i=0; i< array.length; i++){
//         for(let j=0; j<array.length; j++){
//            console.log(array[i],array[j]);
//         }
//     }
// }

// logAllPairsofArray(boxes)

// Q: Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1= ['a','b','c','x']
// const array2 = ['z','y','i']
// should retrun false.
// ------------------------------------
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','x']
// should return true.

// 2 parameters - arrays -no size limit
// retun true or false

// naive/brute force approach
// nested loop- O(n^2)

// function containsCommenItem(arr1,arr2){
//     for(let i = 0; i<arr1.length; i++){
//         for(let j = 0; j <arr2.length; j++){
//             if(arr1[i]===arr2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// O(a*b) same as O(n^2)

// Hash Table
// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
//}
// array2[index] === obj.properties

// const array1= ['a','b','c','x']
// const array2 = ['z','y','i']
// should retrun false.
// ------------------------------------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true.

// function containsCommenItem2(arr1, arr2) {
//   // loop through first array and create object where properties === items in the array
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }
//   // loop through second array and check if item in second array exists on created object.
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsCommenItem2(array1, array2));

// function containsCommenItem3(arr1, arr2) {
//   return arr1.some((item) => arr2.includes(item));
// }

// console.log(containsCommenItem3(array1, array2));

// Google interview Question

// 2 parameters - array , num/sum
// return true or false

// naive approach O(n^2)
// function hasPairWithSum(arr, sum) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) return true;
//     }
//   }
//   return false;
// }

// console.log(hasPairWithSum([1,99,3,4,5],100))

// Better approach O(n)
function hasPairWithSum2(arr,sum){
    // 
    const mySet = new Set();
    const len = arr.length;
    for(let i=0; i<len;i++){
        if(mySet.has(arr[i])){
            return true
        }
        mySet.add(sum-arr[i])
    }
    return false;
}

console.log(hasPairWithSum2([1, 99, 3, 4, 5], 10));
