/*Setting Up Interval:setInterval is used to repeatedly execute a function every specified time
interval—in this case, every 1000 milliseconds (1 second). */
setInterval(()=>{
    /*Select DOM Elements */
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot')
    let dotS = document.querySelector('.s_dot');

    /* Getting The Current Time */
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h>=12 ? 'PM':'AM';

    /*Convert to 12 Hour Formate*/
    if(h>12){
        h = h-12;
    }

    /*Adding Leading Zero if sing hour/minute/second */
    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;

    /*Update Textual Time Display*/
    hours.innerHTML = h + 'Hours';
    minutes.innerHTML = m + 'Minutes';
    seconds.innerHTML = s + 'Seconds';
    ampm.innerHTML = ap;

    /*Update Circular Time Indicator*/
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    /*Update Dot Time Position Indicators */
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
  }, 1000);