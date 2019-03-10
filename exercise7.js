function hitungJumlahKata(kalimat) {
    var k = kalimat.trim()    //Removes whitespace in front and after sentence, just in case.
    if(k.length<1) return 0
    var jumlah = 1
    for(var i=0; i<k.length; i++){
        if(k[i]===" "){
            jumlah += 1
        }
    }
    return jumlah
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5