function countdown(){
    var now = new Date();
    var eventDate = new Date(2023, 7, 22, 21, -2); // year, month-1, (day, hour, minute)

    var currentTime = now.getTime();
    console.log("currentTime" + " " +currentTime);
    var eventTime = eventDate.getTime();
    console.log("eventTime" + " " + eventTime);

    var remTime = eventTime - currentTime;
    console.log("remTime" + " " + remTime);

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10 ) ? "0" + h : h;
    m = (m < 10 ) ? "0" + m : m;
    s = (s < 10 ) ? "0" + s : s;

   

    if( d<=0 && h<=0 && m<=0 && s<=0 ){

        document.getElementById("your").innerHTML = "YOUR TIME IS UP!";
        alert("YOUR TIME IS UP!");
        // clearTimeout(remTime);
        d = 00;
        h = 00;
        m = 00;
        s = 00;
        document.getElementById("days").innerHTML = d;
        document.getElementById("hours").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;

       } else {

        document.getElementById("days").innerHTML = d;
        document.getElementById("hours").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;
        setTimeout(countdown, 1000);
       }
   
}

countdown();