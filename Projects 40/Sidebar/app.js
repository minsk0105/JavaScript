const sideToggleBtn = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const btn = document.querySelector('.sidebar-toggle > i');
const closeBtn = document.querySelector('.close-btn');

sideToggleBtn.addEventListener('click', function() {
  btn.classList.toggle("spin");
  if(sideBar.classList.contains("show")) {
    sideBar.classList.remove("show");
  }
  else {
    sideBar.classList.add("show");
  }
});

closeBtn.addEventListener('click', function() {
  sideBar.classList.remove("show");
  btn.classList.remove("spin");
})