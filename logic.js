// simple click animation for links
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.links-vertical a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // brief scale down animation
      link.style.transition = 'transform 0.12s ease';
      link.style.transform = 'scale(0.9)';
      setTimeout(() => {
        link.style.transform = 'scale(1)';
      }, 120);

      // if link is a placeholder "#" prevent page jump
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
  });
});
