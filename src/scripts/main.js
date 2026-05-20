'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  let x = e.clientX;
  let y = e.clientY;
  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
  // spider.styles.backgroundColor = 'red';
  spider.styles.display = 'none';


});

