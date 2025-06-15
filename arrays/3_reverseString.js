// Create a function that reverses a string:
// 'Hi My name is Roman' should be:
// 'namoR si eman yM iH'

// Single Parameter - string
// split the string into array
// reverse the array and join
//  O(n)

function reverse(str) {
  const splitStrArray = str.split("");
  const reverseStrArray = splitStrArray.reverse();
  const finalStr = reverseStrArray.join("");

  console.log(finalStr);
}

function reverse1(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards.join(""));

  return backwards.join("");
}

function reverse2(str) {
  console(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}

const reverse3 = (str) => {
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
};

const reverse4 = (str) => {
  console.log([...str].reverse().join(""));
  [...str].reverse().join("");
};

reverse4("Hi My name is Roman");
