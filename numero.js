
let entrada=document.querySelector(".entrada");
let salida=document.querySelector(".salida");
let jugar=document.querySelector(".jugar");
let reset=document.querySelector(".reset");
let ms_resultado=document.querySelector(".ms_resultado");
let ms_p=document.querySelector(".ms_p");
jugar.addEventListener("click",function(){
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
        salida.style.display="none";

        },2000)
    }
}
function evaluar(){
// creamos un numero aleatorio entre 0 y 99****
    let ran=Math.round(Math.random()*99)
// Esta condicion evalua si el campo esta vacio o no**
    if(entrada.value==""){
        salida.style.display="block";
        salida.innerHTML="Ingrese un numero";
        salida.style.background="yellow";
        salida.style.color="rgb(0, 0, 0)";
        setTimeout(function(){
            salida.style.display="none"
        },2000)
    }else{
        salida.style.display="block";
// Aqui analizamos si el numero aleatorio es menor a 10; le agregamos un 0 antes***
        if(ran<10){
            ran="0"+ran;
        }else{
            ran;
        }
        salida.innerHTML="Salió el: "+ran;
        salida.style.background="rgb(1, 87, 1,.5)";
        salida.style.color="rgb(255, 255, 255)";
        jugar.style.display="none";
        reset.style.display="block";
      comparar()
    }
}
function comparar(){
    // si el valor ingresado es menor a 10, la funcion le agrega un cero antes**
    if(entrada.value<10 && entrada.value.length<2){
        entrada.value="Ingresaste el: "+"0"+entrada.value
    }else{
        entrada.value="Ingresaste el: "+entrada.value
    }
// si el valor ingresado es igual al numero random, se ejecuta la siguiente condición***
    if(entrada.value==salida.innerHTML){
        ms_resultado.classList.toggle("ver_ms");
        ms_resultado.style.background="rgb(1, 87, 1)";
        ms_p.innerHTML="Ganador 😊";
        salida.style.color="rgb(255, 255, 255)";
        salida.style.background="rgb(1, 87, 1,.8)";

        setTimeout(function(){
        ms_resultado.classList.toggle("ver_ms");
        },2000)
    }else{
        ms_resultado.classList.toggle("ver_ms");
        ms_resultado.style.background="rgb(128, 1, 1)";
        salida.style.background="rgb(128, 1, 1,.8)";
        salida.style.color="rgb(255, 255, 255)";
        ms_p.innerHTML="Perdedor 😥";
        setTimeout(function(){
        ms_resultado.classList.toggle("ver_ms");
        },2000)
    }
}
// si damos click en el boton reset, se ejecuta la siguiente funcion**
reset.addEventListener("click",function(){
    entrada.value="";
    salida.style.display="none"
    salida.innerHTML=""
    reset.style.display="none";
    jugar.style.display="block";
})