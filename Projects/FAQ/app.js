const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);
  btn.addEventListener('click', function() {
    // console.log(question);
    questions.forEach(function(item) {
      // console.log(item);
      if(item != question) {
        item.classList.remove("open-icon");
      }
      question.classList.toggle("open-icon");

      // console.log(question);
      console.log(item);
    });
  });
});

// btns.forEach(function(btn) {
//   btn.addEventListener('click', function(a) {
//     const question = a.currentTarget.parentElement.parentElement;

//     question.classList.toggle("open-icon");
//   });
// });