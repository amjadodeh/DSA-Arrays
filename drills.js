// 5. URLify a string
const URLify = (string) => {
  return string.trim().replace(/\s/g, '%20');
};

console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));

// 6. Filtering an array
const filterArray = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const item = array.shift();
    if (item >= 5) array.push(item);
  }
  return array;
};

console.log(filterArray([1, 2, 3, 4, 5, 6, 7]));

// 7. Max sum in the array
const maxSum = (array) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let item of array) {
    tempSum += item;
    maxSum = Math.max(maxSum, tempSum);
    if (tempSum < 0) tempSum = 0;
  }
  return maxSum;
};

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// 8. Merge arrays
const mergeArrays = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => a - b);
};

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// 9. Remove characters
const removeChar = (string, del) => {
  let tempArr = [];
  let newString = [];
  let outputString = '';
  for (let i = 0; i < del.length; i++) {
    tempArr.push(del[i]);
  }
  for (let j = 0; j < string.length; j++) {
    let caught = false;
    tempArr.forEach((i, index) => {
      if (i === string[j]) {
        caught = true;
      }
      if (tempArr.length - 1 === index && caught === false)
        newString.push(string[j]);
    });
  }
  for (let k = 0; k < newString.length; k++) {
    outputString += newString[k];
  }
  return outputString;
};

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// 10. Products
const products = (arr) => {
  let products = [];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let tempArray = arr.filter((j) => j !== arr[i]);
    temp = tempArray.reduce((acc, cur) => acc * cur);
    products.push(temp);
  }
  return products;
};

console.log(products([1, 3, 9, 4]));

// 11. 2D array
let twoDArray = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
const TwoDArr = (array) => {
  const rows = [];
  const columns = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(0)) rows.push(i);
  }
  for (let num in rows) {
    for (let j = 0; j < array[num].length; j++) {
      if (array[num][j] === 0 && !columns.includes(0)) {
        columns.push(j);
      }
    }
  }
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (columns.includes(x) || rows.includes(y)) {
        array[y][x] = 0;
      }
    }
  }
  return array;
};

console.log(TwoDArr(twoDArray));

// 12. String rotation
const strRotation = (str1, str2) => {
  for (let i = 0; i < str2.length; i++) {
    str2 = str2.slice(1) + str2[0];
    if (str1 === str2) {
      return true;
    }
  }
  return false;
};

console.log(strRotation('amazon', 'azonma'));
console.log(strRotation('amazon', 'azonam'));
