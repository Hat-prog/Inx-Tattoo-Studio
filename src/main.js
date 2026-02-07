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

if (heroVideo) {
  heroVideo.style.opacity = '1';
  heroVideo.style.display = 'block';
  
  heroVideo.addEventListener('error', () => {
    if (videoFallback) {
      videoFallback.style.display = 'block';
    }
  });

  heroVideo.addEventListener('loadeddata', () => {
    heroVideo.play().catch(() => {});
  });

  heroVideo.addEventListener('canplay', () => {
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (videoFallback) {
          videoFallback.style.display = 'block';
        }
      });
    }
  });

  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      if (videoFallback) {
        videoFallback.style.display = 'block';
      }
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && heroVideo.paused) {
      heroVideo.play().catch(() => {});
    }
  });
}
