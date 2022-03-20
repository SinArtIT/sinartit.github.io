let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let eventBlocks = document.querySelector('.event-blocks');
let eventsBlock = document.querySelectorAll('.events-block');
console.log(eventsBlock[0]);
let left = 0;

leftArrow.onclick = () => {
  left += eventsBlock[0].offsetWidth + 30;
  eventBlocks.style.left = `${left}px`;
};

rightArrow.onclick = () => {
  left -= eventsBlock[0].offsetWidth + 30;
  eventBlocks.style.left = `${left}px`;
}