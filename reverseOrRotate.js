// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
function revrot(str, sz){
    let arr = str.split('');
    let mod = arr.length % sz;
    let chunks = []
    for(let i = 0; i < arr.length-mod; i+=sz){
        chunks.push(arr.slice(i, (i+sz)))
    }
    let cubed = chunks.map(chunk => {
        return chunk.reduce((prev, next) => {
            return prev + Math.pow(+next, 3)
        },0)
    })
    for(let i = 0; i < cubed.length; i++){
        if(cubed[i] % 2){
           let num = chunks[i].shift()
           chunks[i].push(num)
        }
        else{
            chunks[i].reverse()
        }
    }
    let strings = chunks.map(val => val.join(''))
    return strings.join('')
}

var test = revrot('12345123461',5)
test