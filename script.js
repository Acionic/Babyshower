document.addEventListener('DOMContentLoaded', () => {
  const butterflies = document.querySelectorAll('.butterfly');
  butterflies.forEach((butterfly) => {
    const startTop = 60 + Math.random() * 30;
    const startLeft = -30 + Math.random() * 160; 
    butterfly.style.top = `${startTop}%`;
    butterfly.style.left = `${startLeft}%`;

    let pathName = 'flutter1';
    if (butterfly.classList.contains('b2')) {
      pathName = 'flutter2';
    } else if (butterfly.classList.contains('b3')) {
      pathName = 'flutter3';
    }

    const duration = 12 + Math.random() * 8;

    butterfly.style.animation = `${pathName} ${duration}s linear infinite`;
  });
});