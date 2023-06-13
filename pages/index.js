import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'


export default function Home() {
  function checkCount() {
    const countInput = document.getElementById('count-input');
    const count = parseInt(countInput.value);

    if (count === 5) {
      document.getElementById('result').textContent = "Congratulations! You found all 'hello' words.";
    } else if (count > 5) {
      document.getElementById('result').textContent = "Oops! There are only 5 'hello' words.";
    } else {
      document.getElementById('result').textContent = "Not quite there yet. Keep searching!";
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    checkBtn.addEventListener('click', checkCount);
  });

  return (
<div>
      <h2>Image Upload</h2>
      <input type="file" accept="image/*" id="image-input" />
      <img src="" id="/static/images/SimpleWord.png" alt="Game" />

      <label htmlFor="count-input">How many 'hello' words can you find?</label>
      <input type="number" id="count-input" />
      <button id="check-btn">Check</button>
      <p id="result"></p>
    </div>
  );
}


