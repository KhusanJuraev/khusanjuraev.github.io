const countYear = document.querySelector('.count-year'),
    countDay = document.querySelector('.count-day'),
    countHour = document.querySelector('.count-hour'),
    countMinute = document.querySelector('.count-minute'),
    countSecund = document.querySelector('.count-second'),
    body = document.querySelector('body');

/* Counter Time Start*/
let ny = 1609459200;
setInterval( () => {
    let date = new Date();
    let tz = date.getTimezoneOffset() * 60;
    let t = Math.floor(Date.now() / 1000);
    let dif = ny - t + tz;
    let day = Math.floor(dif / 86400);
    let hour = Math.floor((dif % 86400) / 3600);
    let min = Math.floor((dif % 3600 )/ 60);
    let sec = dif % 60;
    let year = date.getFullYear();

    if (sec === 0 && min === 0 && hour === 0 && day === 0) {
        year = 2021;
        sec = 0
        min = 0
        hour = 0
        day = 0
        createFirework(63,190,6,2,null,null,null,null,false,true);
        createFirework(50,160,4,1,null,null,null,null,false,true);
        createFirework(30,50,3,5,null,null,null,null,false,true);
    }


    sec = (sec < 10) ? '0' + sec : sec;
    min = (min < 10) ? '0' + min : min;
    hour = (hour < 10) ? '0' + hour : hour;
    day = (day < 10) ? '0' + day : day;

    countSecund.innerHTML = sec;
    countMinute.innerHTML = min;
    countHour.innerHTML = hour;
    countDay.innerHTML = day;
    countYear.innerHTML = year;

}, 1000);

/* Counter Time End */


/* Change Background Start */

const changeBg = document.querySelector('.settingsBlock'),
    btnSettings = document.querySelector('.btnSettings'),
    settingsBg = document.querySelectorAll('.settingsBg');
let bgStorage = localStorage.getItem('number');

if (bgStorage) {
    body.style.backgroundImage = `url(img/bg${bgStorage}.jpg)`;
} else {
    body.style.backgroundImage = `url(img/bg1.jpg)`;
}


btnSettings.addEventListener('click', () => {
    changeBg.animate([{opacity: '0'}, {opacity: '1'}], {duration: 250, fill: "forwards"});
    changeBg.classList.toggle('active');
    document.querySelector('section').addEventListener('click', () => {
        changeBg.classList.remove('active');
    })
})

settingsBg.forEach((value, key) => {
    key++;
    value.addEventListener('click', () => {
        body.style.backgroundImage = `url(img/bg${key}.jpg)`;
        localStorage.setItem('number', key);
    })
})

/* Change Background End */
































