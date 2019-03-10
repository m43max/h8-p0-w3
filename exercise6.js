function numberNotPalindrome(num){
    var a = String(num)
    var out
    for(var i=0; i<a.length; i++){    //checks if nth letter from the front is the same as nth letter from the back
        if(a[i]===a[a.length-1-i]){
            out = false
        }
        else return true
    }
    return out
}

function angkaPalindrome(num){
    var next = num+1
    var i=0
    while(numberNotPalindrome(next)){    //if var "next" is not a palindrome, next is incremented by 1
        next+=1
        i++
    }
    return next    
}

//TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001