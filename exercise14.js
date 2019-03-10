function mengelompokkanAngka(arr) {
    var out = [[],[],[]]
    for(var i=0; i<arr.length; i++){
       if(arr[i]%3===0){
           out[2].push(arr[i])    //for numbers that are divisible by 3
       }
       else if(arr[i]%2===0){
           out[0].push(arr[i])    //for even numbers that are not divisible by 3
       }
       else{
           out[1].push(arr[i])    //for odd numbers that are not divisible by 3
       }
    }
    return out
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]