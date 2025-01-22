const slide = document.querySelector('.slide_box');
const inner = document.querySelector('.inner_slide');
let slideWidth = slide.clientWidth;

let start = 0;
let end = 0;

const items = document.querySelectorAll('.item');
let max = items.length;
let current = 1;

const next = () => {
    current++;
    // console.log(current);

    if (current <= max) {
        const offset = slideWidth * (current - 1);
        inner.style.transform = `translateX(-${offset}px)`;
    } else {
        current--;
    }
};

const prev = () => {
    current--;
    // console.log(current);

    if (current > 0) {
        const offset = slideWidth * (current - 1);
        inner.style.transform = `translateX(-${offset}px)`;
    } else {
        current++;
    }
};

slide.addEventListener('mousedown', (e) => {
    start = e.pageX;
});

slide.addEventListener('mouseup', (e) => {
    end = e.pageX;

    if (start > end) {
        next();
    } else {
        prev();
    }
});