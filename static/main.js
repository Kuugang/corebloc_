let body = document.querySelector('body')
let mobileMenuToggler = document.querySelector('.mobile-toggle')
let navList = document.querySelector('.nav-list')
document.getElementById("back-to-top").onclick = function() {topFunction()};
var open = false
window.sr = ScrollReveal({ reset: true });

mobileMenuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
    if (open == false){
        opened();
    }else{
        closed();
    };
});

function opened() {
    var top = -163;
    var id = setInterval(frame, 1)
    function frame (){
        if (top == 97) {
            clearInterval(id)
        }else{
            top+=4;
            navList.style.top = top + "%"
        }
    };
    open = true
}

function closed(){
    var top = 101
    var id = setInterval(frame, 1)
    function frame(){
        if (top == -163){
            clearInterval(id)
        }else{
            top-=6;
            navList.style.top = top + '%'
        }
    }
    open = false
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

sr.reveal('.fade-in',{
    opacity:0,
    duration:300,
    delay:100,
});