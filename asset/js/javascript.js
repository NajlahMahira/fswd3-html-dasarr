
var tanyalagi = true;
while (tanyalagi) {





// pilihan player
 var player = prompt('kuy pilih: gunting, batu, kertas');





//pilihan komputer
var user = Math.random();

if(user <  0.34 ) {
    user = 'batu';
}else if(user >= 0.34 && user < 0.67 ) {
    user = 'gunting';
}else{
    user = 'kertas';
}







//permainan

var hasil = '';

if(player == user ) {
    hasil = 'Seri dong';
}else if(player == 'gunting'){
    if(user == 'batu'){
        hasil = 'kalah';
    } else {
        hasil = 'menang';
    }
}else if(player == 'batu' ) {
    if ( user == 'gunting' ) {
        hasil = 'menang';
    } else {
        hasil = 'kalah';
    }
}else if(player == 'kertas') {
    if(user == 'gunting' ){
        hasil = 'kalah';
    }else  {
        hasil = 'menang';
    }
}else {
    hasil = 'anda memasukan pilihan yang salah';
}



//tampilkanhasil

alert('kamu memilih :'  +player + ' dan lawan mu memilih '  + user + '\n maka hasilnya kamu '  + hasil);


tanyalagi = confirm('mau maun lagi?');

}

alert('terima kasih sudah main...')