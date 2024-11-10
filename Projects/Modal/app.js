const openBtn = document.querySelector('.modal-btn');
const ModalBox = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.modal-container > i');

openBtn.addEventListener('click', function() {
  ModalBox.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  ModalBox.style.display = '';
});