(() => {
    let contador = 0;
    let elemento;

    const cajas = [
        document.getElementById("cajasoltar"),
        document.getElementById("cajasoltar2"),
        document.getElementById("cajasoltar3")
    ];

    function iniciar(){
        document.querySelectorAll(".imagenes").forEach(img => {
            img.setAttribute("draggable", "true"); // Asegura que sea arrastrable
            img.addEventListener("dragstart", e => {
                elemento = e.target;
                e.dataTransfer.setData("text", elemento.id);
            });
        });

        cajas.forEach(caja => {
            ["dragenter", "dragover"].forEach(ev => {
                caja.addEventListener(ev, e => e.preventDefault());
            });
            caja.addEventListener("drop", soltado);
        });
    }

    function soltado(e){
        e.preventDefault();
        const id = e.dataTransfer.getData("text");
        const imagen = document.getElementById(id);
        imagen.style.display = "none";

        const contenedor = e.target.tagName === "P" ? e.target.parentNode : e.target;
        contenedor.innerHTML = `<img src="${imagen.src}" width="100%" height="100%">`;

        contador++;
        if (contador === 3) validar();
    }

    function validar(){
        const solucion = ["Rompe1.png", "rompe2.png", "Rompe3.png"];
        const ok = cajas.every((caja, i) => caja.querySelector("img").src.includes(solucion[i]));

        document.querySelector(".cajas").style.gap = "0px";
        document.querySelector(".cajas").style.transform = "scale(1.5)";
        cajas.forEach(caja => caja.style.border = "0");

        setTimeout(() => {
            document.querySelector(".cajas").style.transform = "scale(1)";
        }, 3000);

        setTimeout(() => {
            const titulo = document.querySelector(".espacio-titulo");
            const cajasCont = document.querySelector(".cajas");

            if(ok){
                titulo.innerHTML = `¡Felicitaciones!<br>Puzzle correctamente resuelto`;
                cajasCont.style.opacity = "0";
            } else {
                titulo.innerHTML = `Lo sentimos, puzzle no resuelto.<br>Intenta de nuevo <img width="50px" src="./assets/icons/icons8-double-down-80.png"/>`;
                cajasCont.style.backgroundColor = "#000";
                cajasCont.style.opacity = "0.7";
            }

            titulo.style = "animation:feliz 3s forwards;position:relative;color:white; text-shadow: 2px 2px #808080, 6px 6px black";

        }, 6000);
    }
    function reinicio() {
        window.location.reload();
    }
    window.reinicio = reinicio;
    iniciar();
})();

const navChange=()=>{
    
  
    if(window.innerHeight*0.1 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
        
       
    }
} 
