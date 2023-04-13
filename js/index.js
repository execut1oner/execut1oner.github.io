// Header Toggle

let menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('.auto-text', {
    strings: ['Emlakçı', 'Yatırım Uzmanı'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 2000,
    loop: true
})

// Active link state
let links = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', e => {
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            links.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});

function showMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("msg").value;

    alert("Thank you for sending an email!\n" + name + "\n" + email + "\n" + "Your mail: " + message);
}