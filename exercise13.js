function targetTerdekat(arr) {
    var oloc = []
    var xloc = []
    var distance = arr.length
    for(var i=0; i<arr.length; i++){
        if(arr[i]==="o"){
            oloc.push([i])
        }
        else if(arr[i]==="x"){
            xloc.push([i])
        }
    }
    if(oloc.length===0 || xloc.length===0) return 0
    for(var i=0; i<oloc.length; i++){
        for(var j=0; j<xloc.length; j++){
            if(Math.abs(oloc[i]-xloc[j])<distance){
                distance = Math.abs(oloc[i]-xloc[j])
            }
        }
    }    
    return distance
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2