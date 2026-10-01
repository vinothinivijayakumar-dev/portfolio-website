//  PRELOADER 
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Keep preloader visible for 3 seconds (3000 ms)
  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600); // fade-out transition time
  }, 500);
});

// Add shadow when scrolling
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Navbar Scroll Shadow 
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // adjust for navbar height
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//Tying effect
const typingElement = document.querySelector(".typing-text");
const text = "Mern Stack Developer | Full Stack Web Developer";
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // typing speed
  }
}

type();

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//Home image animation
window.addEventListener("load", () => {
  const heroImg = document.querySelector(".hero-img");
  if (heroImg) {
    heroImg.classList.add("show");
  }
});

//Animations For All Sections
AOS.init({
  duration: 700,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
});

const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// set icon based on theme
function updateIcon() {
  if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "☀️";
  } else {
    icon.textContent = "🌙";
  }
}

updateIcon(); // run once on load

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // save theme
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateIcon(); // update icon
});

// Category Filter logic
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Active button 
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");
    projects.forEach(project => {
      if (filter === "all" || project.dataset.category === filter) {
        project.classList.remove("project-hide");
        project.classList.add("project-show");
      } else {
        project.classList.remove("project-show");
        project.classList.add("project-hide");
      }
    });
  });
});
