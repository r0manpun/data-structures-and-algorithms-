// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [ 0, 3, 4, 4, 6, 30, 31 ]

// Double parameter - arrays
// merge the array
// sort the array using inbuilt sort method

function mergeSortedArrays(arr1, arr2) {
  // Concat + Sort O(n+m)log(n+m)
  let mergedArray = [...arr1, ...arr2];
  let sortedArray = mergedArray.sort((a, b) => a - b);

  console.log(sortedArray);
  return sortedArray;
}

function mergeSortedArrays1(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  console.log(mergedArray);
  return mergedArray;
}

// Two Pointer approach
function mergeSortedArrays2(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  console.log(result);

  return result;
}

mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]); // [0, 3, 4, 4, 6, 30, 31]
mergeSortedArrays2([], [4, 6, 30]); // [4, 6, 30]
mergeSortedArrays2([0, 3, 4, 31], []); // [0, 3, 4, 31]
