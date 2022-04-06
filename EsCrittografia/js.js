function crittografia(){
var alfabeto =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var testochiaro=document.getElementById("testoinchiaro").value;
testochiaro=testochiaro.replaceAll(" ","");
var testocifrato="";
var testodecifrato="";
var chiavi = document.getElementById("chiavi").value;
const array=chiavi.split(";");
var ichiave=0;

for(var i=0; i<testochiaro.length;i++){
    var posizione= alfabeto.indexOf(testochiaro[i]);
    testocifrato +=alfabeto[(posizione + parseInt(array[ichiave])) % 26];
    ichiave=(ichiave+1) % array.length;
}
document.getElementById("testocifrato").innerHTML=testocifrato;

ichiave=0;

for(var i=0; i<testocifrato.length;i++){
    var posizione= alfabeto.indexOf(testocifrato[i]);
    testodecifrato +=alfabeto[(posizione - parseInt(array[ichiave])+ 26 ) % 26];
    console.log((posizione - parseInt(array[ichiave])+ 26 ) % 26);
    ichiave=(ichiave+1) % array.length;
    
}

document.getElementById("testodecifrato").innerHTML=testodecifrato;
}