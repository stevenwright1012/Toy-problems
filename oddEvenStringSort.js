//Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated


// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

function sortMyString(S) {
    var odds = []
    var evens = []
    var arr = S.split('')
    arr.forEach((val, i) => i%2 === 0 ? evens.push(val) : odds.push(val))
    return `${evens.join('')} ${odds.join('')}`;
}

