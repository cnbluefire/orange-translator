(() => {
  const mobile = /Android|iPhone|iPad|iPod|IEMobile|Windows Phone|EdgA|EdgiOS|Mobile/i.test(navigator.userAgent);
  document.documentElement.classList.toggle('lt-mobile-ui', mobile);
  const stylesheet = document.querySelector('#mobile-styles');
  if (stylesheet) stylesheet.media = mobile ? 'all' : 'not all';
})();
