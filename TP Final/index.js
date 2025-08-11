
const navChange=()=>{
   console.log(window)
  
    if(window.innerHeight*0.1 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        document.querySelector("#card1").style="animation:aparecerIzq 3s 1s forwards;"
        document.querySelector("#card2").style=" animation:aparecerDerecha 3s forwards;"
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
        
       
    }
   
}