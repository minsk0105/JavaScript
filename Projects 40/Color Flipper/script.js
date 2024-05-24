const btn = document.querySelector('.btn');
const color = document.querySelector('.textcont');
const colors = ["green","red","rgba(133,122,100)","#f15025"];

btn.addEventListener('click', function() {
  const randomNum = random();
  console.log(randomNum);

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function random() {
  return Math.floor(Math.random() * colors.length);
}