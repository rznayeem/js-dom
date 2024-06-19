function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}
const makeOrangeId = document.getElementById('make-orange');
makeOrangeId.onclick = makeOrange;
function makeOrange() {
  document.body.style.backgroundColor = 'orange';
}
const makeGrayButton = document.getElementById('make-gray');
makeGrayButton.onclick = function makeGray() {
  document.body.style.backgroundColor = 'gray';
};
console.log(document.querySelector('body, heading , btn'));
