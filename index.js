setInterval(()=>{
    let d = new Date()
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()

    hRotate = 30*htime + mtime/2
    mRotate = 6*mtime;
    sRotate = 6*stime;

    hour.style.transform = `rotate(${hRotate}deg)`
    minute.style.transform = `rotate(${mRotate}deg)`
    second.style.transform = `rotate(${sRotate}deg)`
},1000)