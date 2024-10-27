window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const maxScrollTo = 500
    const opacity = Math.max(0, 1 - scrollTop / maxScrollTo)
    const yPosition = Math.min(100, scrollTop / 2)
    const scale = Math.max(1, Math.min( 1+ scrollTop / 1000, 1.4))
    console.log(scale)
    if(opacity === 0){
    }else{
        document.querySelector('.fade-header').style.opacity = opacity
        document.querySelector('.fade-header').style.transform = `translateY(${yPosition}px)`
        document.querySelector('#projectails').style.transform = `scale3d(${scale}, ${scale}, 1)`;
        document.querySelector('#projectails').style.opacity = opacity;
    }



})

function openPopup() {
    document.getElementById('popup').classList.remove('hidden')
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden')
}
