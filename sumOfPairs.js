// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

var sum_pairs=function(ints, s){
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
