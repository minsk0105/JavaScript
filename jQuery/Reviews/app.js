// local reviews data
const reviews = [
    {
        id: 1,
        nations: "south korea",
        continent: "asia",
        img: "https://i.namu.wiki/i/IpVSj-BLH7WtjivfEInwSes-HO22iclfabXs6xh5dm8vJ_W5mXV9QTvPoIFFiLC2M4g2p_lQk0zWMgnAw09LXA.svg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt cumque, soluta nam amet dolorum architecto ratione asperiores repellendus aut non facilis natus totam! Unde quas quo ipsa eius quod?",
    },
    {
        id: 2,
        nations: "brazil",
        continent: "south america",
        img: "https://i.namu.wiki/i/fDDPBbr2SMqIlBxO9AXXSJZZXcE4aiFqjm_XxdiMt1y0pRWMGP1YSE5ECEkWZCg5OTHHWXfsxO6-B2HjEGQExTT5B7zckoVM8P8VIVGTDEdqL_A8-tCIOGEAQ0Hj2zjhPfNrpImEHh2TqKfd8NG-Dw.svg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, aperiam soluta? Ducimus ullam saepe veritatis ratione, molestias, nobis earum impedit sequi quas voluptates omnis optio nihil vel? Incidunt, saepe porro!",
    },
    {
        id: 3,
        nations: "egypt",
        continent: "africa",
        img: "https://i.namu.wiki/i/A3c_5Mhoyb8Fnt0TKTI5wj5RmjJzauQ4mcCqFMAWM8we8bLNIEk48aVYOGIpGXSdPIMH3sGHDtadejbZTGFW1Q.svg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati sequi ducimus ullam cupiditate officiis, laborum assumenda sapiente, molestiae quas laboriosam quasi ex nam commodi, consequatur perferendis harum eligendi porro.",
    },
    {
        id: 4,
        nations: "france",
        continent: "europe",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMy8TG7bzjYJwWvnUzp8gA-1dOpoANU7z5g&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus provident similique quod modi labore in ad ex unde alias eveniet quaerat cumque illum, cupiditate quia saepe excepturi veniam sit necessitatibus!",
    },
];

// const img = document.getElementById('country_img');
// const nation = document.getElementById('country');
// const continent = document.getElementById('continent');
// const info = document.getElementById('info');

// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const randomBtn = document.querySelector('.surprise');

// set starting item
let currentItem = 0;

// // load initial item
// window.addEventListener('DOMContentLoaded', () => {
//     showCountry();
// });

// // show country based on item
// function showCountry() {
//     const item = reviews[currentItem];
//     img.src = item.img;
//     nation.textContent = item.nations;
//     continent.textContent = item.continent;
//     info.textContent = item.text;
// };

// // show next country
// nextBtn.addEventListener('click', () => {
//     currentItem++;
//     if (currentItem > reviews.length - 1) currentItem = 0;
//     showCountry();
// });

// // show prev country
// prevBtn.addEventListener('click', () => {
//     currentItem--;
//     if (currentItem < 0) currentItem = reviews.length - 1;
//     showCountry();
// });

// // show random country
// randomBtn.addEventListener('click', () => {
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showCountry();
// });

$('document'). ready (() => {
    showCountry();
});

function showCountry() {
    const item = reviews[currentItem];
    $('#country_img').attr('src', item.img);
    $('#country').text(item.nations);
    $('#continent').text(item.continent);
    $('#info').text(item.text);
};

$('#next'). on ('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) currentItem = 0;
    showCountry();
});

$('#prev'). on ('click', () => {
    currentItem--;
    if (currentItem < 0) currentItem = reviews.length - 1;
    showCountry();
});

$('.surprise'). on ('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showCountry();
});