const cartBody = document.querySelector('.cart-body');

function showProduct() {
  const items = JSON.parse(localStorage.getItem('cart'));
  let card = '';
  items.forEach(product => {
    card += `
            <div class="flex border">
              <div class="p-5 flex items-center">
                <input type="checkbox" name="" id="checkout">
              </div>
              <div class="w-full p-2">
                <img src="../../${product.gambar}" alt="" class="w-full h-full object-cover">
              </div>
              <div class="p-5 flex flex-col justify-between w-full">
                <div class="flex justify-between">
                  <h1 class="font-montserrat text-2xl font-bold">${product.nama}</h1>
                  <i data-feather="trash" class="cursor-pointer"></i>
                </div>
                <div class="flex justify-between items-center w-full">
                  <h1 class="font-bold font-montserrat text-xl">${product.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h1>
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
              </div>
            </div>
    `
  })
  cartBody.innerHTML = card;
}

showProduct()