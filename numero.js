
let entrada=document.querySelector(".entrada");
let cerrar=document.querySelector(".cerrar_suerte");
let salida=document.querySelector(".salida");
let output=document.querySelector(".output");
let jugar=document.querySelector(".jugar");
let reset=document.querySelector(".reset");
let ms_resultado=document.querySelector(".ms_resultado");
let ms_p=document.querySelector(".ms_p");
jugar.addEventListener("click",function(){
//   comparar()

  soloNumeros();


})
function soloNumeros(){
    let input=entrada.value;
    let permitido="0123456789";
    let contar=0;
    for(i=0;i<=input.length-1;i++){
        for(x=0;x<=permitido.length-1;x++){
            if(input[i]==permitido[x]){
                contar++;
            }
        }
    }
    if(input.length==contar){
    // Aqui llamamos a la funcion evaluar()
  evaluar()
    }else{
        salida.style.display="block";
        salida.style.background="yellow";
        salida.style.color="rgb(0, 0, 0)";
        salida.innerHTML="Ingrese solo numeros";
        setTimeout(function(){
        // salida.style.display="none";
        salida.style.background="white";
        salida.style.color="rgb(0, 0, 0,.1)";
        salida.innerHTML="Resultado";


        },2000)
    }
}
function evaluar(){
// creamos un numero aleatorio entre 0 y 99****
    var ran=Math.round(Math.random()*99)
// Esta condicion evalua si el campo esta vacio o no**
    if(entrada.value==""){
        salida.style.display="block";
        salida.innerHTML="Ingrese un numero";
        salida.style.background="yellow";
        salida.style.color="rgb(0, 0, 0)";
        setTimeout(function(){
        salida.style.color="rgb(0, 0, 0,.1)";
        salida.style.background="white";

            salida.innerHTML="Resultado";

        },2000)
    }else{
        salida.style.display="block";
// Aqui analizamos si el numero aleatorio es menor a 10; le agregamos un 0 antes***
        if(ran<10){
            ran="0"+ran;
        }else{
            ran;
        }
        salida.innerHTML=ran;
        salida.style.background="rgb(1, 87, 1,.5)";
        salida.style.color="rgb(255, 255, 255)";
        jugar.style.display="none";
        reset.style.display="block";
      comparar()
    }
}
function comparar(){
    // let r=ran
    // si el valor ingresado es menor a 10, la funcion le agrega un cero antes**
    if(entrada.value<10 && entrada.value.length<2){
        entrada.value="0"+entrada.value
    }else{
        entrada.value=entrada.value

    }
// si el valor ingresado es igual al numero random, se ejecuta la siguiente condición***
    if( salida.innerHTML===entrada.value){
        ms_resultado.classList.toggle("ver_ms");
        ms_resultado.style.background="rgb(0, 0, 0)";
        ms_p.style.color="rgb(0, 255, 0)";
        ms_p.style.border="solid rgb(0,255,255) 2px";

        ms_p.innerHTML="Ganaste 😊 👏👏👏"+"<br>"+"Ingresaste el numero: "+"<span class='num_gane'>"+entrada.value+"</span>"+"<br>"+
        "Salio el numero: "+"<span class=' num_gane'>"+salida.innerHTML+"</span>";;
        salida.style.color="rgb(255, 255, 255)";
        salida.style.background="rgb(1, 87, 1,.8)";

        // setTimeout(function(){
        // ms_resultado.classList.toggle("ver_ms");
        // },4000)
    }else{
        ms_resultado.classList.toggle("ver_ms");
        ms_resultado.style.background="rgb(0, 155, 255)";
        salida.style.background="rgb(128, 1, 1,.8)";
        salida.style.color="rgb(255, 255, 255)";
        ms_p.style.color="rgb(255, 0, 0)";
        // ms_p.style.border="solid red 2px";
        ms_p.style.background="rgb(0, 0, 0)";
        ms_p.innerHTML="Perdiste 😥"+"<br>"+"Ingresaste el numero: "+"<span class='num'>"+entrada.value+"</span>"+"<br>"+
        "Salio el numero: "+"<span class=' num'>"+salida.innerHTML+"</span>";
        // setTimeout(function(){
        // ms_resultado.classList.toggle("ver_ms");
        // },5000)
    }
}
cerrar.addEventListener("click",function(){
    ms_resultado.classList.toggle("ver_ms")
})
// si damos click en el boton reset, se ejecuta la siguiente funcion**
reset.addEventListener("click",function(){
    entrada.value="";
    salida.innerHTML="Resultado";
    salida.style.background="white";
    salida.style.color="rgb(0, 0, 0,.1)";
    reset.style.display="none";
    jugar.style.display="block";
})