
// 1. Describe
  /*
    Struktur Data adalah cara mempresentasikan data, ada banyak metode seperti Stack Queue dll
    dalam Stack data disimpan pertama akan dikeluarkan terakhir,
  */

// ------------
// 2. Implement
function test(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i]*arr[i]
  }
  var j = arr.length
  while(j>0){
    console.log(arr.pop());
    j--
  }

}
var input = [2,3,2] //4,9,4
test(input)

// ------------
// 3. Get real
/*
contohnya adalah ketika kita menumpuk piring satu persatu sampai sepuluh
kemudian ketika kita akan mengambil piring tersebut maka kita akan mengambil dari piring yang kita letakkan terakhir
*/
