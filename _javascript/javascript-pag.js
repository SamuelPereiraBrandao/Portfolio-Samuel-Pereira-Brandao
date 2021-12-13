// horas
function comecarhorario()
{
var horario1=new Date();
var h=horario1.getHours();
var m=horario1.getMinutes();
var s=horario1.getSeconds();

m=checarhorario(m);
s=checarhorario(s);
document.getElementById('txt1').innerHTML=h+":"+m+":"+s;
t=setTimeout('comecarhorario()',500);
}
function checarhorario(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
//Modificando as imagens html css e javascript
function sair(){
    document.getElementById("img0").src="_imagens/html.png"
}
function modificai(tipo){
    if(tipo == 1){
        document.getElementById("img0").src="_imagens/css.png"

    }
    if(tipo == 2){
        document.getElementById("img0").src="_imagens/html.png"

    }
    if(tipo == 3){
        document.getElementById("img0").src="_imagens/javascript.png"

    }
}
//modificando as imagens do menu
function modificar2(tipo2){
    if(tipo2 == 1){
        document.getElementById("foto-samuel1").src="_imagens/samuel-pereira.png.jpg"
    }
    if(tipo2 == 2){
        document.getElementById("foto-samuel1").src="_imagens/samuel-sobre.jpg"
    }
    if(tipo2 == 3){
        document.getElementById("foto-samuel1").src="_imagens/samuel-ling.jpg"
    }
    if(tipo2 == 4){
        document.getElementById("foto-samuel1").src="_imagens/samuel-midia.jpg"
    }
    if(tipo2 == 5){
        document.getElementById("foto-samuel1").src="_imagens/samuel-contato.jpg"
    }
    if(tipo2 == 6) {
        document.getElementById("foto-samuel1").src="_imagens/samuel-form.jpg"
    }
}
function sair2(){
    document.getElementById("foto-samuel1").src="_imagens/samuel-pereira.png.jpg"
}
function sair3(){
    document.getElementById("foto-samuel1").src="_imagens/samuel-sobre.jpg"
}
