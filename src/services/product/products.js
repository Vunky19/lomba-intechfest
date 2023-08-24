const products = [
  {
    id: 1,
    nama: 'Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 2,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 3,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 4,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 5,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 6,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 7,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 8,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 9,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 10,
    nama: 'Fruit Salad',
    kategori: 'Makanan',
    harga: 20000,
    gambar: 'assets/image/close-up-kiwi-fork-with-bowl-fruit.jpg',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste quia quas possimus labore nostrum accusantium? Voluptas nostrum provident labore facere cupiditate eius eligendi modi facilis, placeat, doloremque delectus sequi officiis nemo ut voluptate nam deleniti laborum distinctio nisi repudiandae vel corporis in corrupti at. Suscipit doloribus quis et blanditiis."
  },
  {
    id: 11,
    nama: 'Buku Bercocok Tanam',
    kategori: 'Buku',
    harga: 145000,
    gambar: 'assets/image/matt-ridley-H-LIL57PHCc-unsplash.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 12,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 13,
    nama: 'Buku Bercocok Tanam',
    kategori: 'Buku',
    harga: 145000,
    gambar: 'assets/image/matt-ridley-H-LIL57PHCc-unsplash.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 14,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 15,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 16,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 17,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 18,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 19,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 20,
    nama: 'Pupuk Oke Joss',
    kategori: 'Pupuk',
    harga: 100000,
    gambar: 'assets/image/potrait-24.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ad veniam tempora quos. Sequi eligendi fugiat deserunt eius quia et odit itaque fuga nihil. Assumenda deleniti blanditiis illum asperiores, doloribus vel consequatur nihil nemo quidem, minus laborum aliquam, itaque modi temporibus molestiae voluptates reiciendis porro neque. Impedit voluptates quisquam nostrum?"
  },
  {
    id: 21,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 22,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 23,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 24,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 25,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 26,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 27,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 28,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 29,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
  {
    id: 30,
    nama: 'Wortel',
    kategori: 'Sayuran',
    harga: 3000,
    gambar: 'assets/image/marcos-ramirez-6PG3k3_SRHU-unsplash.jpg',
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptates totam blanditiis vero, corporis quibusdam, earum laudantium deserunt voluptatum error autem! Animi quia deleniti dicta laboriosam esse quisquam rerum architecto quis unde! Tempore culpa maxime vitae dolorem, officia accusantium delectus eos ipsa molestiae, aperiam iusto sequi praesentium, labore aut. Accusantium!"
  },
]