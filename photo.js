// Scroll animation for gallery items
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle scroll animation
  function handleScrollAnimation() {
    galleryItems.forEach(item => {
      if (isInViewport(item) && !item.classList.contains('visible')) {
        item.classList.add('visible');
      }
    });
  }
  
  // Initial check on page load
  handleScrollAnimation();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Add resize event listener to handle responsive changes
  window.addEventListener('resize', handleScrollAnimation);
});