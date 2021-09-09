//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
let $videoHours = document.querySelectorAll('.horas');
let $videoMinutes = document.querySelectorAll('.minutos');
let $videoSeconds = document.querySelectorAll('.segundos');
let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;
document.querySelector('#button-calc').onclick = function () {
    for (let i = 0; i < $videoHours.length; i++) {
        totalHours += Number ($videoHours[i].value);
        console.log(totalHours);
    }

}

