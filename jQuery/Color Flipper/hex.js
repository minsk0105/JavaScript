const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById('btn');
// const color = document.getElementById('color');

// btn.addEventListener('click', () => {
//     let hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNumber()];
//     }
//     color.textContent = hexColor;
//     document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * hex.length);
// };

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

$('#btn'). on ('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    $('#color'). text (hexColor);
    $('body'). css ('background-color', hexColor);
});