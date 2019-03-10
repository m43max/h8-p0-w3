function groupAnimals(animals) {
    animals.sort()
    var out = [[animals[0]]]    //creates a subarray in new array "out" with the first animal as its value
    for(var i=1; i<animals.length; i++){
        if(animals[i][0]===out[out.length-1][0][0]){    //checks if first letter of first animal in last subarray of array "out" is the same as the first letter of current animal being checked
            out[out.length-1].push(animals[i])
        }
        else{
            out[out.length] = [animals[i]]
        }
    }
    return out
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]