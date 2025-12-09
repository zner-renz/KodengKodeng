window.addEventListener('scroll', function() {
  const tabBar = document.getElementById('bottomTabBar');
  // Check if user scrolled to (almost) the bottom
  const scrolledToBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 5); // 5px threshold
  if (scrolledToBottom) {
    tabBar.classList.add('visible');
  } else {
    tabBar.classList.remove('visible');
  }
});
