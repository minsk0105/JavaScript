const reviews = [
  {
    id: 1,
    nation: "Argentina",
    continent: "South America",
    img : "argentina.svg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quos perferendis magnam iusto, quam itaque voluptatibus. Nam illum sapiente assumenda, veritatis adipisci laudantium quibusdam itaque atque nobis blanditiis dolorum iusto."
  },
  {
    id: 2,
    nation: "Germany",
    continent: "Europe",
    img : "germany.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos sed nam, cum sit eligendi recusandae nesciunt ipsa deserunt voluptates accusamus impedit cumque aliquid alias omnis dignissimos fugit tenetur officia!"
  },
  {
    id: 3,
    nation: "South Korea",
    continent: "Asia",
    img : "korea.svg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque aut cupiditate error numquam ratione cum unde, provident voluptas eveniet laborum temporibus corrupti velit minus blanditiis, illum, totam dignissimos debitis!"
  }
];

const img = document.getElementById('nation-img');
const nation = document.getElementById('nation');
const continent = document.getElementById('continent');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;
;

window.addEventListener('DOMContentLoaded', function() {
  showNation(currentItem);
});

function showNation(hello) {
  const item = reviews[hello];
  img.src = item.img;
  nation.textContent = item.nation;
  continent.textContent = item.continent;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showNation(currentItem);
  console.log(reviews.length);
});

prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = 2;
    // currentItem = reviews.length - 1;
  }
  showNation(currentItem);
});

randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);

  showNation(currentItem);
});