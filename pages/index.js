import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Welcome!
          </h1>
     <h1>LWelcome!</h1>
        <p>{siteMetadata.description}</p>
      </div>
      <div>
        <h2></h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {selectedImage && <img src={/static/images/SimpleWord.png} alt="game" />}
      </div>
<label for="count-input">How many 'hello' words can you find?</label>
  <input type="number" id="count-input">
  <button onclick="checkCount()">Check</button>
  <p id="result"></p>

  <script>
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
  </script>
    </>
  )
}
