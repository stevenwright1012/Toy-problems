//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(digits){
    var arr = digits.split("")
    var bin = arr.map(val => {
        if(val < 5){
            return 0
        }
        return 1
    })
    return bin.join('')
}


//One line
var fakeBin2 = x => x.split('').map(val => val < 5 ? 0 : 1).join('')
