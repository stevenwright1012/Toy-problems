// optimize
// function findX(n) {
//     let x = 0;
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < 2*n; j++)
//         x += i + j;
//     }
//     return x;
//   }
function findX(n) {
    let x = 0
    let n2 = (n*2)
    let res = ((n * (n+1))/2) - n
    let res2 =  ((n2 * (n2+1))/2) - n2
    return (res2*n) + (res*n2)
  }

  let test = findX(2)
  test