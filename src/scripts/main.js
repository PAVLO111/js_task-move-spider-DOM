'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const x = e.clientX;
  const y = e.clientY;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  spider.style.left = x - spiderWidth / 2 + 'px';
  spider.style.top = y - spiderHeight / 2 + 'px';

  // spider.style.left = `${e.clientX - spiderWidth / 2}px`;
  // spider.style.top = `${e.clientY - spiderHeight / 2}px`;
});

