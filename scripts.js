document.addEventListener('DOMContentLoaded', () => {
    // Carousel effect
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    function showNextItem() {
      // Hide all items
      carouselItems.forEach(item => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
  
      // Move to the next item
      currentIndex = (currentIndex + 1) % carouselItems.length;
    }
  
    // Auto scroll every 3 seconds
    setInterval(showNextItem, 3000);
  
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you for contacting us! We will get back to you shortly.');
      contactForm.reset();
    });
  });
  