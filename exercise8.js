function pasanganTerbesar(num){
    var a = String(num)
    var numberpair = Number(a[0] + a[1])
    for(var i=1; i<a.length-1; i++){
        if(Number(a[i] + a[i+1])>numberpair){
            numberpair = Number(a[i] + a[i+1])
        }
    }
    return numberpair
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99