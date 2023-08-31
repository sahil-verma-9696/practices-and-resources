const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// *********** move circle with curser ***************

function cuserFollower(){

    window.addEventListener("mousemove",(data)=>{
        // console.log(data)
       document.querySelector("#miniCircle").style.transform = `translate(${data.clientX}px, ${data.clientY}px)`
    })
}
cuserFollower();