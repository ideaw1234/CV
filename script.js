window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader")
    const hide = document.querySelector("#hide")
    loader.classList.add("loader-hidden")
    hide.classList.add('loaded')
})

setTimeout(function() {
    document.querySelector('.textstyle').classList.remove('textstyle');
}, 5000);

