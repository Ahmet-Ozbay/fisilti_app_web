// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDarkScheme ? 'dark' : 'light');
    localStorage.setItem('theme', prefersDarkScheme ? 'dark' : 'light');
  }
  
  // Update theme toggle button state
  updateThemeToggleButton();
});

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Animation for smooth transition
  document.documentElement.classList.add('theme-transition');
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition');
  }, 300);
  
  updateThemeToggleButton();
}

function updateThemeToggleButton() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeToggles = document.querySelectorAll('.theme-toggle');
  
  themeToggles.forEach(toggle => {
    const moonIcon = toggle.querySelector('.moon-icon');
    const sunIcon = toggle.querySelector('.sun-icon');
    
    if (currentTheme === 'dark') {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  });
}



// Coming soon message
function showComingSoon(e) {
  e.preventDefault();
  const message = document.getElementById('coming-soon');
  message.style.display = 'block';
  
  // Hide message after 3 seconds
  setTimeout(function() {
    message.style.display = 'none';
  }, 3000);
}

// Mobile menu toggle
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener("DOMContentLoaded", function() {
  const storedLang = localStorage.getItem('preferredLang');
  const currentPage = window.location.pathname.split("/").pop();

  if (!storedLang) {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("tr") && currentPage === "index-en.html") {
      window.location.href = "index.html";
      return;
    }
    if (!userLang.startsWith("tr") && currentPage === "index.html") {
      window.location.href = "index-en.html";
      return;
    }
  }

  const pageLang = document.documentElement.lang;
  const trLink = document.getElementById("tr-link");
  const enLink = document.getElementById("en-link");

  if (pageLang === "tr") {
    trLink.classList.add("active-language");
  } else if (pageLang === "en") {
    enLink.classList.add("active-language");
  }

  trLink.addEventListener("click", function() {
    localStorage.setItem("preferredLang", "tr");
  });
  enLink.addEventListener("click", function() {
    localStorage.setItem("preferredLang", "en");
  });
});

