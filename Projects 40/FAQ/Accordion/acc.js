const btns = document.querySelectorAll('.box-btn');

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let currentItem = btn.parentNode;
    let classToggle = currentItem.classList.contains("show");

    removeClass();

    if(!classToggle) {
      currentItem.classList.add("show");
    }
  });
});

function removeClass() {
  btns.forEach(function(btn) {
    if(btn.parentNode.classList.contains("show")) {
      btn.parentNode.classList.remove("show");
    };
  });
}