// items
const menu = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    category: "all",
    price: 15.99,
    img: "./images/pizza.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ut voluptates numquam totam porro enim repudiandae tenetur inventore minima facere deserunt voluptatibus sit id, obcaecati, cumque molestiae. Laborum, distinctio atque!`, 
  },

  {
    id: 2,
    title: "Aglio Olio Pasta",
    category: "pasta",
    price: 13.99,
    img: "./images/pasta.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ut voluptates numquam totam porro enim repudiandae tenetur inventore minima facere deserunt voluptatibus sit id, obcaecati, cumque molestiae. Laborum, distinctio atque!`, 
  },

  {
    id: 3,
    title: "Croissant",
    category: "bread",
    price: 7.99,
    img: "./images/croissant.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ut voluptates numquam totam porro enim repudiandae tenetur inventore minima facere deserunt voluptatibus sit id, obcaecati, cumque molestiae. Laborum, distinctio atque!`, 
  },

  {
    id: 4,
    title: "Cafe Latte",
    category: "drink",
    price: 8.99,
    img: "./images/cafelatte.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ut voluptates numquam totam porro enim repudiandae tenetur inventore minima facere deserunt voluptatibus sit id, obcaecati, cumque molestiae. Laborum, distinctio atque!`, 
  }
]

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//load items
window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);

  const categories = menu.reduce(function(values, length) {
    if (!values.includes(length.category)) {
      values.push(length.category);
    }
    // console.log(values);
    return values;
  }, ["all"]);
  // console.log(categories);

  const categoryBtns = categories.map(function(category) {
    return `
    <button class="filter-btn" type="button"
        data-id=${category}>
          ${category}
        </button>`;
  }).join("");
  // console.log(categoryBtns);
  container.innerHTML = categoryBtns;
  
  const filterBtns = container.querySelectorAll('.filter-btn');

  //filter-items
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem) {
        // console.log(menuItem.category); //함수 category가 아닌 menu의 값
        if (menuItem.category === category) { //함수 category와 menu의 category의 값이 같으면 값을 반환
          console.log(menuItem);
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenuItems(menu);
        // console.log(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });

});

function displayMenuItems(menuItems) {
  // console.log(menuItems);
  let displayMenu = menuItems.map(function(item) {
    // console.log(displayMenu);

    return `
          <article class="menu-item">
            <div class="img-box">
              <img src=${item.img} alt=${item.title}>
            </div>
            <header class="menu-name">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="text-info">
              ${item.desc}
            </p>
          </article>
          `;
  });
  
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}








// const hello = [1,2,3,4];

// window.addEventListener('DOMContentLoaded', function() {
//   let hi = hello.map(function(item) {
//     console.log(item);
//     return item;
//   });
//   console.log(hi);
// });