const colors = ['green', 'red', 'rgb(133, 122, 200)', '#f15025'];

// const btn = document.getElementById('btn');
// const color = document.getElementById('color');

// btn.addEventListener('click', function() {
//     // get random number between 0 - 3
//     const randomNumber = getRandomNumber();
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// };

$('#btn'). on ('click', function() {
    const randomNumber = getRandomNumber();
    $('body'). css ('background-color', colors[randomNumber]);
    $('#color'). text (colors[randomNumber]);
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};