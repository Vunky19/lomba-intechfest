const menu_el = document.querySelector('.menu');
const menuBar_el = document.querySelector('.menu-bar');
const autohide_el = document.querySelector('.auto-hide');
const slider_el = document.querySelector('.slider');

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

/* slider_el.addEventListener('mouseenter', () => {
  if (slider_el.childElementCount === 1) {
    setTimeout(() => {
      slider_el.innerHTML +=
        `
    <div class="absolute text-center w-fit font-montserrat font-bold text-3xl my-auto text-white transition duration-1000">
      <h1>Fruit Salad</h1>
      <h1>$3,29</h1>
      <button class="w-30 p-2 my-2 border border-hero text-xl font-normal hover:bg-hero">Shop Now</button>
    </div>
    `
    }, 1000)
  } else {
    slider_el.lastElementChild.classList.remove('hidden');
  }
});

slider_el.addEventListener('mouseleave', () => {
  if (slider_el.childElementCount > 1) {
    slider_el.lastElementChild.classList.add('hidden');
  }
}) */