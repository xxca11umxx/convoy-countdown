document.getElementById("title").innerHTML = EVENT.title;
document.getElementById("server").innerHTML = EVENT.server;
document.getElementById("route").innerHTML = EVENT.route;
document.getElementById("link").href = EVENT.link;


function updateCountdown(){

    const now = new Date();
    const eventDate = new Date(EVENT.date);

    const difference = eventDate - now;


    if(difference <= 0){
        document.getElementById("countdown").innerHTML =
        "CONVOY STARTED!";
        return;
    }


    const days = Math.floor(difference / (1000*60*60*24));
    const hours = Math.floor((difference / (1000*60*60)) % 24);
    const minutes = Math.floor((difference / (1000*60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);


    document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

setInterval(updateCountdown,1000);
updateCountdown();
