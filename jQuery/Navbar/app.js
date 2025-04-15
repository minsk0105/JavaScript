// const navToggle = document.getElementById('bar');
// const navHeader = document.querySelector('header');
// const nav = navHeader.querySelector('ul');

// navToggle.addEventListener('click', () => {
//     if (nav.classList.contains("mobile")) {
//         navHeader.classList.toggle("show");
//     }
// });

$('#bar'). on ('click', () => {
    if ($('nav > ul').hasClass('mobile')) {
        // addClass, removeClass, toggleClass
        $('header').toggleClass('show');
    }
});