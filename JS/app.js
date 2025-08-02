// Main-Header
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

// Search-bar

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    
    // Permitir clic en el ícono para activar la búsqueda
    searchIcon.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            // Aquí puedes agregar la lógica de búsqueda
            alert('Buscando: ' + searchInput.value);
        }
    });
    
    // Permitir búsqueda con Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            // Aquí puedes agregar la lógica de búsqueda
            alert('Buscando: ' + searchInput.value);
        }
    });
  })

document.addEventListener('DOMContentLoaded', function() {
            const scrollLeftBtn = document.querySelector('.scroll-btn-left');
            const scrollRightBtn = document.querySelector('.scroll-btn-right');
            const cardsContainer = document.querySelector('.cards-c');
            scrollLeftBtn.addEventListener('click', () => {
                cardsContainer.scrollBy({
                    left: -320, // Adjust the scroll amount as needed
                    behavior: 'smooth'
                });
            });
            scrollRightBtn.addEventListener('click', () => {
                cardsContainer.scrollBy({
                    left: 320, // Adjust the scroll amount as needed
                    behavior: 'smooth'
                });
            });
        });