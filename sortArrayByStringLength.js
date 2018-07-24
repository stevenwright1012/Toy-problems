// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function sortByLength (array) {
    for(let j = 0; j < array.length; j++){
        for(let i = 0; i < array.length -1; i++){
            if(array[i].length > array[i + 1].length){
                let temp = array[i];
                array[i] = array[i+1];
                array[i +1] = temp;
            }
        }
    }
    return array;
};