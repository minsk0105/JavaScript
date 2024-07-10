const btns = document.querySelectorAll('.question-btn');
const loremText = document.querySelectorAll('.question-text');

btns.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    console.log(event.currentTarget);
  });
});