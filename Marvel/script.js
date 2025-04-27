document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      // Show the selected slide
      slides[index].classList.add('active');
      
      // Update current index
      currentIndex = index;
    }
    
    // Function to go to the next slide
    function nextSlide() {
      let nextIndex = (currentIndex + 1) % totalSlides;
      showSlide(nextIndex);
    }
    
    // Function to go to the previous slide
    function prevSlide() {
      let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(prevIndex);
    }
    
    // Add click event to the slider
    slider.addEventListener('click', function(e) {
      nextSlide();
    });
    
    // Optional: Add swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    slider.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, false);
    
    function handleSwipe() {
      if (touchEndX < touchStartX) {
        // Swipe left, go to next slide
        nextSlide();
      } else if (touchEndX > touchStartX) {
        // Swipe right, go to previous slide
        prevSlide();
      } else {
        // It was a tap/click, go to next slide
        nextSlide();
      }
    }
    
    // Initialize with the first slide
    showSlide(0);
  });