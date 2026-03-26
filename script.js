// Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = navLinks.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Reveal Animation Hook
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
            
            // Trigger progress bar if present
            const progressFill = reveal.querySelector('.progress-fill');
            if (progressFill && progressFill.dataset.progress) {
                setTimeout(() => {
                    progressFill.style.width = progressFill.dataset.progress;
                }, 300);
            }
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Navbar blur effect on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});
