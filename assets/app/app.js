const menu_el = document.querySelector('.menu');
const menuBar_el = document.querySelector('.menu-bar')

menu_el.addEventListener('click', () => {
  menu_el.firstElementChild.classList.toggle(`rotate-45`);
  menu_el.firstElementChild.classList.toggle(`translate-y-1`);
  menu_el.lastElementChild.classList.toggle('-rotate-45');
  menu_el.lastElementChild.classList.toggle(`-translate-y-[0.5rem]`);
  menuBar_el.classList.toggle('-translate-y-full');
});