// Header scroll effect
window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
                header.classList.add('scrolled');
      } else {
                header.classList.remove('scrolled');
      }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = revealElements[i].getBoundingClientRect().top;
                const elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
                        revealElements[i].classList.add('active');
          }
      }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Initial check

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                              window.scrollTo({
                                                top: target.offsetTop - 80,
                                                behavior: 'smooth'
                              });
                }
      });
});

// Menu Tab Logic
const menuTabs = document.querySelectorAll('.menu-tab');
const menuContents = document.querySelectorAll('.menu-content');

menuTabs.forEach(tab => {
      tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                                   menuTabs.forEach(t => t.classList.remove('active'));
                menuContents.forEach(c => c.classList.remove('active'));

                                   // Add active class to clicked tab and corresponding content
                                   tab.classList.add('active');
                const target = tab.getAttribute('data-tab');
                document.getElementById(target).classList.add('active');
      });
});

// Booking Modal Logic
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
const bookButtons = document.querySelectorAll('.book-btn, .check-btn');

bookButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
                // Prevent default if it's an anchor but we want the modal
                                   if (btn.tagName === 'A') e.preventDefault();

                                   bookingModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable scroll
      });
});

closeModal.addEventListener('click', () => {
      bookingModal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Enable scroll
});

// Close modal on overlay click
bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
                bookingModal.classList.remove('active');
                document.body.style.overflow = 'auto';
      }
});

// Form submission (demo)
document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                const originalText = btn.textContent;

                                    btn.textContent = 'Processing...';
                btn.disabled = true;

                                    setTimeout(() => {
                                                  alert('Action completed successfully!');
                                                  btn.textContent = originalText;
                                                  btn.disabled = false;
                                                  bookingModal.classList.remove('active');
                                                  document.body.style.overflow = 'auto';
                                                  form.reset();
                                    }, 1500);
      });
});
