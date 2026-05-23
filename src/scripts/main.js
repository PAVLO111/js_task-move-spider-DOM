'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  let posLeft = mouseX - spiderWidth / 2;
  let posTop = mouseY - spiderHeight / 2;

  if (posLeft < 0) {
    posLeft = 0
  }

  if (posTop < 0) {
    posTop = 0;
  }

  const maxLeft = wallWidth - spiderWidth;
  const maxTop = wallHeight - spiderHeight;

  if (posLeft > maxLeft) {
    posLeft = maxLeft;
  }

  if (posTop > maxTop) {
    posTop = maxTop;
  }

  spider.style.left = `${posLeft}px`;
  spider.style.top = `${posTop}px`;
});
