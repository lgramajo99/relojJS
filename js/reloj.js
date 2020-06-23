function obtenerHora() {

    let fecha = new Date();

    // console.log(fecha);
    // console.log(fecha.getDate());
    // console.log(fecha.getFullYear());
    // console.log(fecha.getDay());
    // console.log(fecha.getMonth());

    // declarar variable

    let pDia = document.getElementById("dia"),
        pFecha = document.getElementById("fecha"),
        pAnio = document.getElementById("anio"),
        pMes = document.getElementById('mes'),
        pHora = document.getElementById('hora'),
        pMinuto = document.getElementById('minuto'),
        pSegundo = document.getElementById('segundo'),
        pAmPm = document.getElementById('ampm');


    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Nobienbre", "Diciembre"];
    let ampm = ["A.M", "P.M"]

    pDia.innerText = dias[fecha.getDay()];
    pMes.innerText = meses[fecha.getMonth()];
    pFecha.innerText = fecha.getDate();
    pAnio.innerText = fecha.getFullYear();
    pHora.innerText = fecha.getHours();
    pAmPm.innerText = ampm[fecha.getHours];


    if (fecha.getSeconds() < 10) {
        pSegundo.innerText = "0" + fecha.getSeconds();
    } else {
        pSegundo.innerText = fecha.getSeconds();
    }

    if (pMinuto.innerText = fecha.getMinutes() < 10) {
        pMinuto.innerText = "0" + fecha.getMinutes();
    } else {
        pMinuto.innerText = fecha.getMinutes();
    }

    if (pHora.innerText = fecha.getHours() < 10) {
        pHora.innerText = "0" + fecha.getHours();
    } else {
        pHora.innerText = fecha.getHours();
    }
    
    if(pAmPm.innerText = ampm[fecha.getHours] < 12){
        pAmPm.innerText = "AM"
    } else {
        pAmPm.innerText = "AM"
    }
}

window.setInterval(obtenerHora, 1000)