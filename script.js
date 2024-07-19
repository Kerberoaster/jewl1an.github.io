// JavaScript to control the bubbles' random directions and interactions
document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        emoji.style.top = `${Math.random() * 100}vh`;
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDuration = `${Math.random() * 20 + 10}s`;
        emoji.style.animationDelay = `${Math.random() * 10}s`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-170px";
        }
        prevScrollpos = currentScrollPos;
    }
});
