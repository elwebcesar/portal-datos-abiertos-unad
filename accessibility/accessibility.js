// ------------------------------------------------------------
// ICO SVG COLOR - svg-inject.min.js
// ------------------------------------------------------------

SVGInject(document.querySelectorAll("img.ico_control"));


// ------------------------------------------------------------
// ACTIVE CONTROL
// ------------------------------------------------------------

const accessibilityControls = document.querySelector('#accessibility');
const accessibilityBtn = document.querySelector('#accessibility__btn');

accessibilityBtn.addEventListener('click', function() {
  accessibilityControls.classList.toggle("active");
});


// ------------------------------------------------------------
// FONT SIZE
// ------------------------------------------------------------

const htmlElement = document.querySelector('html');
const btnIncrease = document.querySelector('#increaseFont');
const btnDiminish = document.querySelector('#diminishFont');

const classes = ["f0", "f1", "f2", "f3", "f4"];
const lengthclasses = classes.length
let classIndex = 2;


btnIncrease.addEventListener('click', function() {
  let previousClass = classIndex;
  classIndex++;
  classIndex = (classIndex == classes.length) ? classes.length - 1 : classIndex;
  changeClass(previousClass, classIndex);

  if(classIndex >= (lengthclasses-1)) {
    this.disabled = true;
  }
  else {
    btnDiminish.disabled = false;
  }
});

btnDiminish.addEventListener('click', function () {
  let previousClass = classIndex;
  classIndex--;
  classIndex = (classIndex < 0) ? 0 : classIndex;
  changeClass(previousClass, classIndex);

  if(classIndex <= 0) {
    this.disabled = true;
  }
  else {
    btnIncrease.disabled = false;
  }
});

function changeClass(previous, next) {
  console.log(previous, next, '---- ' ,lengthclasses);

  if(previous != next) {
    htmlElement.classList.remove(classes[previous]);
    htmlElement.classList.add(classes[next]);
  }
}


// ------------------------------------------------------------
// DARK MODE
// ------------------------------------------------------------

const elementDoom = document.body;
const btnDarkMode = document.querySelector('#btnDarkMode');

btnDarkMode.addEventListener('click', function() {
  elementDoom.classList.toggle("dark-mode");
});


// ------------------------------------------------------------
// RESET
// ------------------------------------------------------------

document.getElementById('reset').addEventListener('click', function () {
  htmlElement.removeAttribute('class');
  elementDoom.removeAttribute('class');
  classIndex = 2;

  btnIncrease.disabled = false;
  btnDiminish.disabled = false;
});