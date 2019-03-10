function dataHandling (arr){
    var newarr = []
    for (var i=0; i<arr.length; i++){
        newarr +=("Nomor ID: " + arr[i][0] + "\n" + "Nama Lengkap: " + arr[i][1] + "\n" + "TTL: " + arr[i][2] + " " + arr[i][3] + "\n" + "Hobi: " + arr[i][4])
        if (i<arr.length-1){
            newarr += "\n\n"    //spacing
        }
    }
    return newarr
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))