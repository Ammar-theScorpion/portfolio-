window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const maxScrollTo = document.getElementById('imageHeader').offsetTop-50 || 500;
    console.log(maxScrollTo)
    const opacity = Math.max(0.0, 1 - scrollTop / maxScrollTo)
    const yPosition = Math.min(maxScrollTo, scrollTop / 2)
    const scale = Math.max(1, Math.min( 1+ scrollTop / 1000, 1.4))
    if(opacity === 0){
    }else{
        document.querySelector('.fade-header').style.opacity = opacity
        document.querySelector('.fade-header').style.transform = `translateY(${yPosition}px)`
        document.querySelector('#projectails').style.transform = `scale3d(${scale}, ${scale}, 1)`;
        document.querySelector('#projectails').style.opacity = opacity;
    }

});


/*
const projectails = document.getElementsByClassName("projectails");

document.getElementById('header').addEventListener('mousemove', function(event) {
    const projectWidth = document.getElementById('project').offsetWidth;
    const headerHeight = document.getElementById('header').offsetHeight;

    const followSpeed = 0.05; // Adjust this value to change how closely it follows the mouse (0.05 is slow, 0.5 is faster)

    for (let index = 0; index < projectails.length; index++) {
        const element = projectails[index];
        const rect = element.getBoundingClientRect();
        
        // Get the current element position
        const currentX = rect.left;
        const currentY = rect.top;
        
        // Calculate target positions
        const targetX = (event.clientX / projectWidth) * 100;
        const targetY = (event.clientY / headerHeight) * 100;

        // Interpolate between the current position and the target position
        const translateX = currentX + (targetX - currentX) * followSpeed;
        const translateY = currentY + (targetY - currentY) * followSpeed;

        // Apply combined transform
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
})

*/