/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
    // base case
    if (i === nums.length) return 1;
    // recursive case
    return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = words[0]) {
    // base case
    if (i === words.length) return longestWord.length;

    longestWord = words[i].length > longestWord.length ? words[i] : longestWord;
    // recursive case
    return longest(words, i + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
    // base case
    if (i >= str.length) return newStr;
    // recursive case
    newStr += str[i];
    return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
    // base case
    // compare both ends, if the same continue, otherwise not a palindrome
    let leftidx = i;
    let rightidx = str.length - i - 1;
    // if right index and left index are the same stop recursion
    if (leftidx >= rightidx) return true;
    if (str[leftidx] !== str[rightidx]) return false;
    // recursive case
    return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
    // if we see the value return the index
    if (arr[i] === val) return i;
    // if iteration is complete return -1
    if (i === arr.length) return -1;
    // recursive case
    return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, revStr = "") {
    //iterate from the back of str and add to revStr
    //when iteration is complete return revStr
    if (revStr.length === str.length) return revStr;

    let rightIdx = str.length - i - 1;

    revStr += str[rightIdx];

    return revString(str, i + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arrOfStr = []) {
    //iterate an object find the strings and push to an array
    //when iteration is done return an array of strings
    //use a loop to seach each key for a value of string
    for (const key in obj) {
        if (typeof obj[key] === "string") arrOfStr.push(obj[key]);
        if (typeof obj[key] === "object") gatherStrings(obj[key], arrOfStr);
    }

    return arrOfStr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
    // base case
    let mid = Math.floor((left + right) / 2);
    // if val is found return index
    if (arr[mid] === val) return mid;
    // if val not found return -1
    // if left pointer is >= right pointer
    if (left >= right) return -1;

    // if the value is higher we move the left pointer to the center
    if (val > arr[mid]) left = mid + 1;

    // if lower we move right pointer to the center
    if (val < arr[mid]) right = mid - 1;

    // recursive case will iterate arr
    return binarySearch(arr, val, left, right);
}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};
