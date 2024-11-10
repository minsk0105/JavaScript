const sideBtn = document.querySelector('.nav-toggle > i');
const links = document.querySelector('.links');

sideBtn.addEventListener('click', function() {
  if(links.classList.contains("show")) {
    links.classList.remove("show");
  } else {
    links.classList.toggle("show");
  }
});

const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  const logo = document.querySelector('.logo');
  const barIcon = document.querySelector('.nav-toggle > i');

  if(scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
    logo.style.color = 'black';
    barIcon.style.color = 'black';
    links.style.color = 'black';
  }
  else {
    navbar.classList.remove("fixed-nav");
    logo.style.color = '';
    barIcon.style.color = '';
    links.style.color = '';
  }

  if(scrollHeight > 500) {
    topLink.classList.add("show-link");
  }
  else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if(!fixedNav) {
      position = position - navHeight;
    }

    if(navHeight > 0) {
      links.classList.remove("show");
      position = position + links.getBoundingClientRect().height;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});