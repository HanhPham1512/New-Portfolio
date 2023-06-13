import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { useState } from 'react';

const imageSrc = '/static/images/SimpleWord.png';

export default function Home() {
  const [count, setCount] = useState(0);

  function handleCountChange(event) {
    setCount(parseInt(event.target.value));
  }

  function checkCount() {
    let result = '';

    if (count === 5) {
      result = "Congratulations! You found all 'hello' words.";
    } else if (count > 5) {
      result = "Oops! There are only 5 'hello' words.";
    } else {
      result = "Not quite there yet. Keep searching!";
    }

    document.getElementById('result').textContent = result;
  }

  return (
    <>
      <div>
        <h2>Image Upload</h2>
        <img src={imageSrc} alt="Game" />

        <label htmlFor="count-input">How many 'hello' words can you find?</label>
        <input type="number" id="count-input" value={count} onChange={handleCountChange} />
        <button onClick={checkCount}>Check</button>
        <p id="result"></p>
      </div>
    </>
  );
}
