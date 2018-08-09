let snaps = 0;
function snap(flashPile, turtlePile){
    for(let i =0; i < turtlePile.length; i ++){
        if(turtlePile[i] === flashPile[i]){
            snaps++
            flashPile.splice(0,i+1)
            turtlePile.splice(0,i+1)
            return snap(flashPile, turtlePile)
        }
        if(turtlePile[i] === flashPile[i+1]){
            snaps++
            flashPile.splice(0,i+2)
            turtlePile.splice(0,i+1)
            return snap(flashPile, turtlePile)
        }
    }
    let result = snaps
    snaps =0;
    return result;
}

let test = snap([ '3','K','5','A','5','6','7','J','7','9','10','Q','Q','6','8','7','4','J','8','9','K','J','10','4','K','4' ], [ '2','8','9','Q','A','K','6','3','J','2','4','3','3','8','A','2','6','7','9','10','A','5','Q','10','2','5' ])
test