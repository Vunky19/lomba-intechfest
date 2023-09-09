const width = window.innerWidth;

/* Nav Bar */
const autohide_el = document.querySelector('.auto-hide');
document.addEventListener("DOMContentLoaded", function () {

  if (autohide_el) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;

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

/* Nav Bar animate */
const hamburger_el = document.querySelector('.menu');
const menu_bar = document.querySelector('.menu-bar');
hamburger_el.addEventListener('click', () => {
  hamburger_el.firstElementChild.classList.toggle(`rotate-45`);
  hamburger_el.firstElementChild.classList.toggle(`translate-y-1`);
  hamburger_el.lastElementChild.classList.toggle('-rotate-45');
  hamburger_el.lastElementChild.classList.toggle(`-translate-y-[0.5rem]`);
  menu_bar.classList.toggle('-translate-y-full')
});

/* Product */
const product = document.querySelector('#product');
function showProduct() {
  let card = '';
  const items = products.filter(item => item.kategori === 'Makanan');
  items.forEach((item, i) => {
    if (i < 6 && width > 1024) {
      card += `
              <div data-id="${item.id}" class="product-card p-3 h-fit border border-gray-400 rounded-md ${i === 2 || i === 3 ? 'row-span-2 col-span-2' : ''} hover:border hover:border-hero cursor-pointer hover:scale-105 duration-500 bg-white" >
                <div>
                  <img src="${item.gambar}" alt="" class="w-full h-full object-cover">
                </div>
                <div class="pt-5 flex flex-col justify-between h-52">
                    <a href="" class="hover:text-blue-700 hover:underline w-fit">
                      <h1 class="font-bold text-xl">${item.nama}</h1>
                    </a>
                    <p>${item.description.substring(0, 100)}...</p>
                  <div class="flex justify-between">
                    <h1 class="font-montserrat font-bold text-lg">${item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
                    <button class="btn-product py-1 px-3 border border-[#111d13] hover:bg-[#111d13] duration-500 hover:text-white" data-id="${item.id}">Add To Cart</button>
                  </div>
                </div>
              </div>
        `
    } else if (i < 4) {
      card += `
            <div data-id="${item.id}" class="product-card p-3 h-fit border border-gray-400 rounded-md ${i === 2 || i === 3 ? '2xl:row-span-2 2xl:col-span-2' : ''} hover:border hover:border-hero cursor-pointer hover:scale-105 duration-500 bg-white" >
              <div>
                <img src="${item.gambar}" alt="" class="w-full h-full object-cover">
              </div>
              <div class="pt-5 flex flex-col justify-between h-52">
                  <a href="" class="hover:text-blue-700 hover:underline w-fit">
                    <h1 class="font-bold text-xl">${item.nama}</h1>
                  </a>
                  <p>${item.description.substring(0, 100)}...</p>
                <div class="flex justify-between">
                  <h1 class="font-montserrat font-bold text-lg">${item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
                  <button class="btn-product py-1 px-3 border border-[#111d13] hover:bg-[#111d13] duration-500 hover:text-white" data-id="${item.id}">Add To Cart</button>
                </div>
              </div>
            </div>
      `
    }
  });
  product.innerHTML = card;
}

showProduct();

/* Vegetables and Fruits */
const vegetables_fruits_el = document.querySelector('.vegetables-fruits');
function showVegetablesAndFruits() {
  let card = '';
  const items = products.filter(item => item.kategori === 'Sayuran' || item.kategori === 'Buah')
  items.forEach((item, i) => {
    if (i < 4) {
      card += `
            <div data-id="${item.id}" class="product-card h-fit w-auto border border-gray-300 p-3 hover:border hover:border-hero cursor-pointer hover:scale-105 duration-500">
              <div class="h-56 overflow-hidden group">
                  <img src="${item.gambar}" alt="" class="w-full h-full object-cover group-hover:scale-110 duration-1000 group-hover:brightness-75">
              </div>
              <div class="pt-5 flex flex-col justify-between h-52">
                  <a href="" class="hover:text-blue-700 hover:underline w-fit">
                    <h1 class="font-bold text-xl">${item.nama}</h1>
                  </a>
                  <p>${item.description.substring(0, 100)}...</p>
                <div class="flex justify-between">
                  <h1 class="font-montserrat font-bold text-lg">${item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
                  <button class="btn-product py-1 px-3 border border-[#111d13] hover:bg-[#111d13] duration-500 hover:text-white" data-id="${item.id}">Add To Cart</button>
                </div>
              </div>
            </div>
      `
    }
  });
  vegetables_fruits_el.innerHTML = card;
}

showVegetablesAndFruits();

/* Other Product */
const other_product_el = document.querySelector('.other-product');
function showOtherProducts() {
  let card = '';
  const items = products.filter(item => item.kategori === 'Buku' || item.kategori === 'Pupuk')
  items.forEach((item, i) => {
    if (i < 4) {
      card += `
          <div data-id="${item.id}" class="product-card h-fit w-auto border border-gray-300 p-3 hover:border hover:border-hero cursor-pointer hover:scale-105 duration-500">
            <div class="h-56 overflow-hidden group">
                <img src="${item.gambar}" alt="" class="w-full h-full object-cover group-hover:scale-110 duration-1000 group-hover:brightness-75">
            </div>
            <div class="pt-5 flex flex-col justify-between h-52">
                <a href="" class="hover:text-blue-700 hover:underline w-fit">
                  <h1 class="font-bold text-xl">${item.nama}</h1>
                </a>
                <p>${item.description.substring(0, 100)}...</p>
              <div class="flex justify-between">
                <h1 class="font-montserrat font-bold text-lg">${item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
                <button class="btn-product py-1 px-3 border border-[#111d13] hover:bg-[#111d13] duration-500 hover:text-white" data-id="${item.id}">Add To Cart</button>
              </div>
            </div>
          </div>
      `
    }
  });
  other_product_el.innerHTML = card;
}

showOtherProducts();

/* Page Detail */
let id = 0;
document.addEventListener('click', (e) => {
  if (e.target.offsetParent.classList.contains('product-card')) {
    id = e.target.offsetParent.dataset.id;
    localStorage.setItem('idProduct', id);
  };
});

const btnDetail = document.querySelectorAll('.product-card');
btnDetail.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = './src/page/detail-product.html'
  });
});

/* Cart icon */
const cart_icon = document.querySelector('.cart');
cart_icon.addEventListener('click', () => {
  window.location.href = './src/page/cart.html'
})