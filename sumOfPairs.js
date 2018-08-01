// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

var sum_pairs1=function(ints, s){
    let temp
    let index = Infinity
    for(let i = 0; i < ints.length - 1; i++){
        for(let j = i + 1; j < ints.length; j++){
            if(ints[i] + ints[j] === s && j < index){
                temp = [ints[i] , ints[j]]
                index = j;
            }
        }
    }
    return temp;
}

let test1 = sum_pairs1([10, 5, 2, 3, 7, 5, 0], 10)
test1

var sum_pairs=function(ints, s){
    let temp
    let index = Infinity;
    for(let i = 0; i< index && i < ints.length; i ++){
        let newIndex = ints.indexOf(s - ints[i], i+1)
        if(newIndex !== -1 && newIndex < index){
            index = newIndex
            temp = [ints[i], ints[newIndex]]
        }
    }
    return temp;
}

let test = sum_pairs([1,2,3,4,1,0], 2)
test