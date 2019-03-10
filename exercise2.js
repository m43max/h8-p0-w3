function balikString (string){
    var reverse = ""
    for(var i=string.length-1; i>=0; i--){
        reverse += string[i]
    }
    return reverse
}

// TESTING
console.log(balikString("hello world!"))
//console.log(balikString("abcdefg"))