// Back Button
document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-back')) {
    localStorage.removeItem('idProduct')
    window.location.href = 'http://127.0.0.1:5500/index.html'
  }
})

const idProduct = localStorage.getItem("idProduct")
const detail_body = document.querySelector('.detail-product')
function showDetailProduct() {
  const product = products.find((item) => item.id == idProduct)
  const content = `
                  <div class="relative w-full">
                    <span class=" p-5 absolute top-0 cursor-pointer">
                      <i data-feather="arrow-left" class="btn-back"></i>
                    </span>
                    <img src="../../${product.gambar}" alt="" class="w-full h-full object-cover">
                    <span class="p-5 absolute top-0 right-0">
                      <i data-feather="heart"></i>
                    </span>
                  </div>
                  <div class="w-full px-5 py-3 flex flex-col">
                  <div class="flex justify-between">
                    <h1 class="font-bold text-5xl">${product.nama}</h1>
                    <button class="add-to-cart px-6 bg-hero text-white rounded-md hover:bg-opacity-80" data-id="${product.id}">Add to cart</button>
                  </div>
                  <h1 class="uppercase text-gray-300 font-semibold">${product.kategori}</h1>
                  <h1>Rating: 5/5</h1>
                  <h1>Description: </h1>
                  <p>${product.description}</p>
                  <div class="my-4">
                    <h1 class="font-bold uppercase text-lg">Quantity: </h1>
                    <div class="border border-gray-300 w-fit flex rounded-sm">
                      <button class="p-1 border-r border-gray-300">
                        <i data-feather="minus"></i>
                      </button>
                      <input type="text" class="h-full block p-1 w-20 text-center text-xl" value="1">
                      <button class="p-1 border-l border-gray-300">
                        <i data-feather="plus"></i>
                      </button>
                    </div>
                  </div>
                    <h1 class="font-bold text-lg uppercase">Review: </h1>
                    <div class="review h-full overflow-y-scroll"></div>
                  </div>
  `
  detail_body.innerHTML = content
}

showDetailProduct()

/* Review */
const review_el = document.querySelector('.review');
function showReview() {
  let card = '';
  review.forEach(item => {
    card += `
              <div class="border p-4">
                <div class="flex items-center">
                  <div class="w-12 h-12 mr-5">
                    <img src="../../${item.foto}" alt="" class="w-full h-full object-cover rounded-full">
                  </div>
                  <div class="w-full">
                    <div class="flex justify-between items-center">
                      <h1 class="font-bold">${item.nama}</h1>
                      <h1 class="font-bold text-gray-400">${item.date.toLocaleString('id-ID', { year: 'numeric', month: '2-digit', day: 'numeric' })}</h1>
                    </div>
                    <i data-feather="star" class="text-gray-100 ${item.rating >= 1 ? 'fill-yellow-400' : ''}  -ml-2 inline-block"></i>
                    <i data-feather="star" class="text-gray-100 ${item.rating >= 2 ? 'fill-yellow-400' : ''} -ml-2 inline-block"></i>
                    <i data-feather="star" class="text-gray-100 ${item.rating >= 3 ? 'fill-yellow-400' : ''} -ml-2 inline-block"></i>
                    <i data-feather="star" class="text-gray-100 ${item.rating >= 4 ? 'fill-yellow-400' : ''} -ml-2 inline-block"></i>
                    <i data-feather="star" class="text-gray-100 ${item.rating >= 5 ? 'fill-yellow-400' : ''} -ml-2 inline-block"></i>
                  </div>
                </div>
                <p class="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, vero.</p>
              </div>
    `
  })
  review_el.innerHTML = card;
}

showReview();

/* Suggested Items*/
const suggestedProduct_el = document.querySelector('.suggested-product');
function showSuggestedProduct() {
  const id = parseInt(idProduct)
  const product = products.filter(item => item.id !== id);
  let card = '';
  product.forEach((item, i) => {
    if (i < 4) {
      card += `
          <div class="h-fit w-auto border border-gray-300 p-3">
            <div class="h-56 overflow-hidden">
              <a href="" class="group">
                <img src="../../${item.gambar}" alt="" class="w-full h-full object-cover group-hover:scale-110 duration-1000 group-hover:brightness-75">
              </a>
            </div>
            <div class="pt-5 flex flex-col justify-between h-52">
                <a href="" class="hover:text-blue-700 hover:underline w-fit">
                  <h1 class="font-bold text-xl">${item.nama}</h1>
                </a>
                <p>${item.description.substring(0, 100)}</p>
              <div class="flex justify-between">
                <h1 class="font-montserrat font-bold text-lg">${item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
                <button class="btn-product py-1 px-3 border border-[#111d13] hover:bg-[#111d13] duration-500 hover:text-white" data-id="${item.id}">Buy Now</button>
              </div>
            </div>
          </div>
      `
    }
  });
  suggestedProduct_el.innerHTML = card;
}

showSuggestedProduct();

/* Cart icon */
const cart_icon = document.querySelector('.cart');
cart_icon.addEventListener('click', () => {
  window.location.href = 'cart.html'
})

/* Add to cart */
const addToCart = document.querySelector('.add-to-cart');
const cart_el = document.querySelector('.cart-mark');
addToCart.addEventListener('click', () => {
  cart_el.classList.remove('hidden')
  const id = (parseInt(addToCart.dataset.id));
  const product = products.find(item => item.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart))
})