const imageSrc = '/static/images/SimpleWord.png';

function checkCount() {
  const countInput = document.getElementById('count-input');
  const count = parseInt(countInput.value);
  const result = document.getElementById('result');

  if (count === 5) {
    result.textContent = "Congratulations! You found all 'hello' words.";
  } else if (count > 5) {
    result.textContent = "Oops! There are only 5 'hello' words.";
  } else {
    result.textContent = "Not quite there yet. Keep searching!";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const countInput = document.getElementById('count-input');
  const checkBtn = document.getElementById('check-btn');
  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = 'Game';
  document.body.appendChild(image);

  checkBtn.addEventListener('click', checkCount);
});
