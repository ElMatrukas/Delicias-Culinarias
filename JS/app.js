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

// Scroll functionality for all sections
// Popular section
const popularSection = document.querySelector('.Popular');
if (popularSection) {
    const popularLeftBtn = popularSection.querySelector('.scroll-btn-left');
    const popularRightBtn = popularSection.querySelector('.scroll-btn-right');
    const popularContainer = popularSection.querySelector('.cards-p');
    
    if (popularLeftBtn && popularRightBtn && popularContainer) {
        popularLeftBtn.addEventListener('click', () => {
            popularContainer.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
        
        popularRightBtn.addEventListener('click', () => {
            popularContainer.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
    }
}

// New section
const newSection = document.querySelector('.New');
if (newSection) {
    const newLeftBtn = newSection.querySelector('.scroll-btn-left');
    const newRightBtn = newSection.querySelector('.scroll-btn-right');
    const newContainer = newSection.querySelector('.cards-n');
    
    if (newLeftBtn && newRightBtn && newContainer) {
        newLeftBtn.addEventListener('click', () => {
            newContainer.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
        
        newRightBtn.addEventListener('click', () => {
            newContainer.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
    }
}

// Category section
const categorySection = document.querySelector('.Category');
if (categorySection) {
    const categoryLeftBtn = categorySection.querySelector('.scroll-btn-left');
    const categoryRightBtn = categorySection.querySelector('.scroll-btn-right');
    const categoryContainer = categorySection.querySelector('.cards-c');
    
    if (categoryLeftBtn && categoryRightBtn && categoryContainer) {
        categoryLeftBtn.addEventListener('click', () => {
            categoryContainer.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        });
        
        categoryRightBtn.addEventListener('click', () => {
            categoryContainer.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        });
    } 
}

// Draggable category list functionality
const categoryList = document.querySelector('.category-list');
if (categoryList) {
    // Category filtering functionality
    const categoryButtons = categoryList.querySelectorAll('button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected-c' class from all buttons
            categoryButtons.forEach(btn => {
                btn.classList.remove('selected-c');
            });
            
            // Add 'selected-c' class to the clicked button
            this.classList.add('selected-c');
        });
    });
    
    // Draggable functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
        // Prevent dragging when clicking on buttons
        if (e.target.tagName === 'BUTTON') return;
        
        isDown = true;
        categoryList.classList.add('dragging');
        startX = (e.pageX || e.touches[0].pageX) - categoryList.offsetLeft;
        scrollLeft = categoryList.scrollLeft;
    };

    const stopDrag = () => {
        isDown = false;
        categoryList.classList.remove('dragging');
    };

    const drag = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - categoryList.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        categoryList.scrollLeft = scrollLeft - walk;
    };

    categoryList.addEventListener('mousedown', startDrag);
    categoryList.addEventListener('touchstart', (e) => {
        // Prevent dragging when touching on buttons
        if (e.target.tagName === 'BUTTON') return;
        startDrag(e.touches[0]);
    });

    categoryList.addEventListener('mouseleave', stopDrag);
    categoryList.addEventListener('mouseup', stopDrag);
    categoryList.addEventListener('touchend', stopDrag);

    categoryList.addEventListener('mousemove', drag);
    categoryList.addEventListener('touchmove', (e) => {
        drag(e.touches[0]);
    });
}
