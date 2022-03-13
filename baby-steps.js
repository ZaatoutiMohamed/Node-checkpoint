
// console.log(process.argv)
// function sum (arr) {
//     var total = 0
//     for (var i =2; i<arr.length ; i++){
//         total += +arr[i] 
//     }
//     return total
// }

// console.log(sum (process.argv));


var total = 0
    for (var i =2; i<process.argv.length ; i++){
        total += +process.argv[i] 
    }

console.log(total)