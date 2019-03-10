function palindrome(kata){
var a
for(var i=0; i<kata.length; i++){
    if(kata[i]===kata[kata.length-1-i]) a = true   //checks if nth letter from the front is the same as nth letter from the back
    else return false    //makes sure the function stops and returns false as soon as a single letter does not match its corresponding letter
}
return a
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); //false