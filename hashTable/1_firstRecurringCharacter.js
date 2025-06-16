// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// parameter - array
// nested loop - O(n^2)
// best approach - O(n)

// Naive approach
function firstRecurringCharacter(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}
// changed to this so it can return the element that recurs
function firstRecurringCharacter1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}
// time complexity -O(n^2)
// space complexity - O(1)

// Hash Map
function firstRecurringCharacter2(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  return undefined;
}
// time complexity - O(n)
// space complexity - O(n)

// Hash Set
function firstRecurringCharacter3(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    } else {
      set.add(arr[i]);
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter1([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringCharacter1([2, 3, 4, 5]));
