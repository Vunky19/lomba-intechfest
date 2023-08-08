const menu_el = document.querySelector('.menu');
const menuBar_el = document.querySelector('.menu-bar');
const autohide_el = document.querySelector('.auto-hide');
const newProduct_el = document.querySelector('.new-product-modal');
const card_el = document.querySelector('.card');
const widthCard = document.querySelector('.card').offsetWidth / 3;
const arrow_el = document.querySelectorAll('.slide svg');
const hover = document.querySelector('.modal-hover');
const animate_text = document.querySelector('.modal-hover-text');
const animate_box = document.querySelector('.modal-hover-box');
const animate_icon = document.querySelector('.modal-hover-icon');
const animate_image = document.querySelector('.modal-hover-image');

/* Menu */

menu_el.addEventListener('click', () => {
  menu_el.firstElementChild.classList.toggle(`rotate-45`);
  menu_el.firstElementChild.classList.toggle(`translate-y-1`);
  menu_el.lastElementChild.classList.toggle('-rotate-45');
  menu_el.lastElementChild.classList.toggle(`-translate-y-[0.5rem]`);
  menuBar_el.classList.toggle('-translate-y-full');
});

/* Nav Bar */

document.addEventListener("DOMContentLoaded", function () {

  if (autohide_el) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scroll_top / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);

      if (scroll_top < last_scroll_top) {
        autohide_el.classList.remove('-translate-y-full');
        autohide_el.classList.add('translate-y-0');
      } else {
        autohide_el.classList.remove('translate-y-0');
        autohide_el.classList.add('-translate-y-full');
      }
      last_scroll_top = scroll_top;
    });
  }
});

/* Hover */

newProduct_el.addEventListener('mouseenter', () => {
  newProduct_el.lastElementChild.classList.replace('opacity-0', 'opacity-100');
});

newProduct_el.addEventListener('mouseleave', () => {
  newProduct_el.lastElementChild.classList.replace('opacity-100', 'opacity-0');
});

newProduct_el.addEventListener('touchstart', () => {
  newProduct_el.lastElementChild.classList.replace('opacity-0', 'opacity-100');
  newProduct_el.firstElementChild.classList.add('brightness-50');
})

newProduct_el.addEventListener('touchend', () => {
  newProduct_el.firstElementChild.classList.remove('brightness-50');
  newProduct_el.lastElementChild.classList.replace('opacity-100', 'opacity-0');
});

// New Product

(() => {
  const newProduct = product[product.length - 1];
  let productModal = '';
  productModal += `
  <img src="${newProduct.Gambar.slice(6, newProduct.Gambar.length)}" alt="" class="w-full h-fit transition duration-1000 object-cover group-hover:brightness-50">
  <div class="absolute opacity-0 text-center w-fit font-montserrat font-bold text-3xl my-auto text-white transition duration-1000">
      <h1>${newProduct.Nama}</h1>
      <h1>$${newProduct.Harga}</h1>
      <button class="w-30 p-2 my-2 rounded-md border border-hero text-xl font-normal hover:bg-hero">Shop Now</button>
  </div>
  `;
  newProduct_el.innerHTML = productModal;
})();


/* Trending product */

// Element

(() => {
  const trending = product.sort((a, b) => b.Dibeli - a.Dibeli);
  let card = '';
  trending.forEach(item => {
    card += `
    <div class="w-fit h-full p-2 flex flex-col rounded-xl ring ring-gray-100 shadow-lg max-md:w-[19.5rem] bg-slate-100">
          <div class="h-[50%] w-[25rem] gap-5 max-md:w-full">
            <img src="${item.Gambar.slice(6, item.Gambar.length)}" alt="" class="rounded-xl w-full h-full object-cover">
          </div>
  
          <div class="grow relative">
            <span class="flex mt-3 justify-between text-xl font-medium">
              <h1>${item.Nama}</h1>
              <h1>$${item.Harga}</h1>
            </span>
            <h1>Sold: ${item.Dibeli}</h1>
            <button class="-bottom-0 absolute p-2 bg-hero text-white rounded-md hover:brightness-75">Add to Cart</button>
          </div>
      </div>
    `;
  });
  card_el.innerHTML = card;
})();

// Slide

let isDragStart = false, prevPageX, prevScrollLeft;

console.log(card_el.scrollLeft)

arrow_el.forEach(icon => {
  icon.addEventListener('click', () => {
    console.log(card_el.scrollLeft)
    card_el.scrollLeft += icon.id == 'left' ? -widthCard : widthCard;
  })
});

card_el.addEventListener('touchstart', e => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = card_el.scrollLeft;
});

card_el.addEventListener('touchmove', e => {
  if (!isDragStart) return;
  e.preventDefault();
  let position = (e.pageX || e.touches[0].pageX) - prevPageX;
  card_el.scrollLeft = prevScrollLeft - position;
});

card_el.addEventListener('touchend', () => {
  isDragStart = false;
});


/* Category */
hover.addEventListener('touchstart', () => {
  animate_text.classList.replace('opacity-0', 'opacity-100');
  animate_box.classList.replace('opacity-0', 'opacity-100');
  animate_icon.classList.replace('-translate-x-full', 'translate-x-0');
  animate_image.classList.add('scale-125');
});

hover.addEventListener('touchstart', () => {
  animate_text.classList.replace('opacity-100', 'opacity-0');
  animate_box.classList.replace('opacity-100', 'opacity-0');
  animate_icon.classList.replace('translate-x-0', '-translate-x-full');
  animate_image.classList.remove('scale-125');
});
