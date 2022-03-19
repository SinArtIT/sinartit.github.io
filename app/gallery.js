let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let eventBlocks = document.querySelector('.event-blocks');

let left = 0;

leftArrow.onclick = () => {
  left -= 380;
  eventBlocks.style.left = `${left}px`;
};

rightArrow.onclick = () => {
  left += 380;
  eventBlocks.style.left = `${left}px`;
}