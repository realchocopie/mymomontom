const clockContainer = document.querySelector(".js-clock");
const dateTitle = clockContainer.querySelector("h1");
const clockTitle = clockContainer.querySelector("h2");

function getData(){
    const   date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();

 

    dateTitle.innerText = `${year}. ${month < 10 ? `0${month}`: `${month}`}. ${day < 10 ? `0${day}` : `${day}`}`;

    clockTitle.innerText = `${hour < 10 ? `0${hour}` : `${hour}`} : ${min < 10 ? `0${min}` : `${min}`} : ${sec < 10 ? `0${sec}` : `${sec}`}`; 
}




function init(){
    getData();
    setInterval(getData,1000);
}


init();