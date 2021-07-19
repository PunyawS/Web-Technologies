function cToF(celsius){
    var cTemp = celsius;
    var ctoFahr = cTemp *9 / 5 + 32;
    var message = cTemp + "\xB0C is " + ctoFahr + "\xB0F";
    console.log(message);
}

function ftoC(fahrengeit){
    var ftemp = fahrengeit;
    var ftoCel = (ftemp - 32) * 5 / 9;
    var message = ftemp + "\xB0F is " + ftoCel + "\xB0C";
    console.log(message)
}

cToF(30);
ftoC(86);
