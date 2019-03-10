function dataHandling2(arr){
    arr.splice(1,1,"Roman Alamsyah Elsharawy")
    arr.splice(2,1,"Provinsi Bandar Lampung")
    arr.splice(4,2,"Pria", "SMA Internasional Metro")
    var tanggal = arr[3].split("/")
    var namabulan
    switch (tanggal[1]){    //menulis nama bulan
        case "01": namabulan = "Januari"
        break
        case "02": namabulan = "Februari"
        break
        case "03": namabulan = "Maret"
        break
        case "04": namabulan = "April"
        break
        case "05": namabulan = "Mei"
        break
        case "06": namabulan = "Juni"
        break
        case "07": namabulan = "Juli"
        break
        case "08": namabulan = "Agustus"
        break
        case "09": namabulan = "September"
        break
        case "10": namabulan = "Oktober"
        break
        case "11": namabulan = "November"
        break
        case "12": namabulan = "Desember"
        break
        default: namabulan = "Bulan harus dalam format angka dua digit, antara 01 dan 12."
    }
    tanggal.sort(function(a, b){return b-a})    //sort array "tanggal" in reverse order
    console.log(arr)
    console.log(namabulan)
    console.log(tanggal)
    console.log(tanggal.join("-"))    //join tanggal, bulan and tahun, memisahkannya dengan char "-"
    console.log(arr[1].slice(0,15))    //membataskan nama sebanyak 15 karakter
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);