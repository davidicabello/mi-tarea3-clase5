const $calculateButton = document.querySelector('#button-calc');
let $videoHours = document.querySelectorAll('.horas');
let $videoMinutes = document.querySelectorAll('.minutos');
let $videoSeconds = document.querySelectorAll('.segundos');

let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;
$calculateButton.onclick = function () {
    let totalTime = new Date(0, 0, 0);
    for (let i = 0; i < $videoHours.length; i++) {
        totalHours += Number($videoHours[i].value);
        
    }
    for (let i = 0; i < $videoMinutes.length; i++) {
        totalMinutes += Number($videoMinutes[i].value);
        
    }
    for (let i = 0; i < $videoSeconds.length; i++) {
        totalSeconds += Number($videoSeconds[i].value);
        
    }
    totalTime.setHours(totalHours);
    totalTime.setMinutes(totalMinutes);
    totalTime.setSeconds(totalSeconds);

  

    document.querySelector('.result').innerText =

        `La total de tiempo del curso es ${totalTime.getHours()} Horas, ${totalTime.getMinutes()} minutos, ${totalTime.getSeconds()} segundos`
}


/*
const totalSecondsSum =  totalHours*3600 + totalMinutes*60 + totalSeconds;
const totalHoursVideos = totalSeconds / 3600;
const totalMinutesVideos = (totalSecondsSum % 3600) / 60);
const totalSecondsVideos = ((totalSecondsSum % 3600) % 60);


document.querySelector('.result').innerText = 
`La suma total del tiempo en los videos es de: 
${Math.trunc(totalHoursVideos)} horas, ${Math.trunc(totalMinutesVideos)} minutos y ${Math.trunc(totalSecondsVideos)} segundos`

*/