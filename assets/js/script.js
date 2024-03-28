document.querySelectorAll('.image-grid img').forEach(image => {
    image.addEventListener('click', function() {
      const lightboxImage = document.querySelector('.lightbox-img');
      lightboxImage.src = this.src;
      document.querySelector('.lightbox').style.display = 'flex';
    });
  });
  
  function closeLightbox() {
    document.querySelector('.lightbox').style.display = 'none';
  }
  
  // Permite cerrar el lightbox también al presionar Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('open');
  });
  
  