let v_btn=document.querySelector(".jugar_num");
let car_btn=document.querySelector(".jugar_car");
let otra_btn=document.querySelector(".jugar_otra");
let in_num=document.querySelector(".inp_num");
let panta=document.querySelector(".visor")

v_btn.addEventListener("click",function(){
    mostrarNum();
    car_btn.style.transform="scale(1)";
    v_btn.style.transform="scale(0)"
})
function mostrarNum(){
let numero=Math.floor(Math.random()*99)
  if(numero<10){
    panta.innerHTML="0"+numero;
  }else{
    panta.innerHTML=numero;
  }
  if(in_num.value==""){
      panta.innerHTML="Ingrese un numero";
  }
}
car_btn.addEventListener("click",function(){
    verificar();
    ver_car()
v_btn.style.transform="scale(0)";
otra_btn.style.transform="scale(1)";
car_btn.style.transform="scale(0)";
})
function ver_car(){
    document.querySelector(".carta").classList.toggle("girar")
}
otra_btn.addEventListener("click",function(){
    document.querySelector(".carta").classList.toggle("girar")
panta.innerHTML="";
in_num.value=""
v_btn.style.transform="scale(1)";
otra_btn.style.transform="scale(0)"
})
function verificar(){
    if(in_num.value<10){
        in_num.value="0"+in_num.value;
    }
if(in_num.value==panta.innerHTML){
    document.querySelector(".p_msj").innerHTML="Ganadór";
    document.querySelector(".p_msj").style.background="green";
}else{
    document.querySelector(".p_msj").innerHTML="Perdedor";
    document.querySelector(".p_msj").style.background="red";
}
if(in_num.value!=""){
    document.querySelector(".mensaje").classList.toggle("ver_ms");
    setTimeout(function(k){
        document.querySelector(".mensaje").classList.toggle("ver_ms")
     },2000)
}
if(in_num.value=="0"){
    document.querySelector(".p_msj").innerHTML="Ingrése un numero";
    document.querySelector(".p_msj").style.background="yellow";
    document.querySelector(".p_msj").style.color="black";
}
}