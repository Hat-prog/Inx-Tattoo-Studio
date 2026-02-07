document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const heroVideo = document.getElementById('heroVideo');
const videoFallback = document.querySelector('.video-fallback');

// Function to attempt video play
function attemptPlay() {
  if (!heroVideo) return;
  
  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Video is playing
        heroVideo.style.opacity = '1';
        if (videoFallback) {
          videoFallback.style.display = 'none';
        }
      })
      .catch((error) => {
        // Autoplay failed, try again on user interaction
        console.log('Autoplay prevented, will play on interaction');
      });
  }
}

if (heroVideo) {
  // Set video properties for mobile Safari
  heroVideo.setAttribute('playsinline', 'true');
  heroVideo.setAttribute('webkit-playsinline', 'true');
  heroVideo.muted = true;
  heroVideo.style.opacity = '1';
  heroVideo.style.display = 'block';
  
  // Error handling
  heroVideo.addEventListener('error', () => {
    if (videoFallback) {
      videoFallback.style.display = 'block';
    }
  });

  // Try to play on multiple events (for mobile Safari compatibility)
  heroVideo.addEventListener('loadedmetadata', attemptPlay);
  heroVideo.addEventListener('loadeddata', attemptPlay);
  heroVideo.addEventListener('canplay', attemptPlay);
  heroVideo.addEventListener('canplaythrough', attemptPlay);
  
  // Initial play attempt
  attemptPlay();

  // Play on any user interaction (mobile Safari workaround)
  const playOnInteraction = () => {
    if (heroVideo.paused) {
      attemptPlay();
    }
    // Remove listeners after first interaction
    document.removeEventListener('touchstart', playOnInteraction);
    document.removeEventListener('click', playOnInteraction);
    document.removeEventListener('scroll', playOnInteraction);
  };
  
  document.addEventListener('touchstart', playOnInteraction, { once: true, passive: true });
  document.addEventListener('click', playOnInteraction, { once: true });
  document.addEventListener('scroll', playOnInteraction, { once: true, passive: true });

  // Resume when page becomes visible again
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && heroVideo.paused) {
      attemptPlay();
    }
  });

  // Handle when video enters viewport (Intersection Observer)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && heroVideo.paused) {
          attemptPlay();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(heroVideo);
  }
}
