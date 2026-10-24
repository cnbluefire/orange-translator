(() => {
  const mobile = navigator.userAgentData?.mobile === true || /Android|iPhone|iPad|iPod|IEMobile|Windows Phone|EdgA|EdgiOS|Mobile/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) <= 600);
  document.documentElement.classList.toggle('lt-mobile-ui', mobile);
  const stylesheet = document.querySelector('#mobile-styles');
  if (stylesheet) stylesheet.media = mobile ? 'all' : 'not all';
})();
