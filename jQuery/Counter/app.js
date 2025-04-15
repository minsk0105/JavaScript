// set initial count
let count = 0;

// select value and buttons
// const value = document.getElementById('value');
// const btns = document.querySelectorAll('.btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         const styles = event.currentTarget.classList;
//         if (styles.contains('decrease')) {
//             count--;
//         } else if (styles.contains('increase')) {
//             count++;
//         } else count = 0;

//         if (count > 0) value.style.color = 'green';
//         else if (count < 0) value.style.color = 'red';
//         else value.style.color = '#222';

//         value.textContent = count;
//     });
// });

$('.btn'). on ('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) count--;
    else if (styles.contains('increase')) count++;
    else count = 0;

    if (count > 0) $('#value'). css ('color', 'green');
    else if (count < 0) $('#value'). css ('color', 'red');
    else $('#value'). css ('color', '#222');

    $('#value'). text (count);
});