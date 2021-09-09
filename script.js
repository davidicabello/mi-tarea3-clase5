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
    document.querySelector('.result').innerText = `La total de tiempo del curso es ${totalHours} Horas,`
}

