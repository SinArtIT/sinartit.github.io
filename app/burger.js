let lineWrapper = document.querySelector('.line-wrapper');
let navBurger = document.querySelector('.nav-burger');
let liElements = document.querySelectorAll('.nav-burger li');

lineWrapper.onclick = function () {
  this.classList.toggle('line-active');

  if (this.classList.contains('line-active')) navBurger.style.display = 'flex';
  else navBurger.style.display = 'none';
}

liElements.forEach(element => {
  element.onclick = () => {
    lineWrapper.classList.remove('line-active');
    navBurger.style.display = 'none';
  }
});

