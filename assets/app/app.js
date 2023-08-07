const menu_el = document.querySelector('.menu');
const menuBar_el = document.querySelector('.menu-bar');
const autohide_el = document.querySelector('.auto-hide');
const slider_el = document.querySelector('.slider');
const card_el = document.querySelector('.card');

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

/* Slide */


slider_el.addEventListener('mouseenter', () => {
  slider_el.lastElementChild.classList.replace('opacity-0', 'opacity-100');
});

slider_el.addEventListener('mouseleave', () => {
  slider_el.lastElementChild.classList.replace('opacity-100', 'opacity-0');
});

slider_el.addEventListener('touchstart', () => {
  slider_el.lastElementChild.classList.replace('opacity-0', 'opacity-100');
  slider_el.firstElementChild.classList.add('brightness-50');
})

slider_el.addEventListener('touchend', () => {
  slider_el.firstElementChild.classList.remove('brightness-50');
  slider_el.lastElementChild.classList.replace('opacity-100', 'opacity-0');
});

/* Fetch */

// New Product
fetch('src/product/modal.json')
  .then(response => response.json())
  .then(product => {
    const newProduct = product.Product[product.Product.length - 1];
    let productModal = ''
    productModal += `
    <img src="${newProduct.Gambar}" alt="" class="w-full h-fit transition duration-1000 object-cover group-hover:brightness-50">
    <div class="absolute opacity-0 text-center w-fit font-montserrat font-bold text-3xl my-auto text-white transition duration-1000">
      <h1>${newProduct.Nama}</h1>
      <h1>$${newProduct.Harga}</h1>
      <button class="w-30 p-2 my-2 rounded-md border border-hero text-xl font-normal hover:bg-hero">Shop Now</button>
    </div>
    `
    slider_el.innerHTML = productModal;
  });

fetch('src/product/modal.json')
  .then(response => response.json())
  .then(items => {
    const products = items.Product;
    const trending = products.sort((a,b) => b.Dibeli - a.Dibeli);
    let card = ''
    trending.forEach(item => {
      card += 
      `
      <div class="w-fit h-full p-2 flex flex-col rounded-xl ring ring-gray-100 shadow-lg">
          <div class="h-[50%] w-[25rem] gap-5">
            <img src="${item.Gambar}" alt="" class="rounded-xl">
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
        `
    });
    card_el.innerHTML = card;
  })