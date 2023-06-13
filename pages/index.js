import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import React, { useState } from 'react'

export default function Home({ posts }) {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setSelectedImage(URL.createObjectURL(file))
  }

  const checkCount = () => {
    const countInput = document.getElementById('count-input')
    const count = parseInt(countInput.value)

    if (count === 5) {
      document.getElementById('result').textContent = "Congratulations! You found all 'hello' words."
    } else if (count > 5) {
      document.getElementById('result').textContent = "Oops! There are only 5 'hello' words."
    } else {
      document.getElementById('result').textContent = "Not quite there yet. Keep searching!"
    }
  }

  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <p>{siteMetadata.description}</p>
      </div>
      <div>
        <h2>Image Upload</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {selectedImage && <img src="/static/images/SimpleWord.png" alt="game" />}
      </div>
      <label htmlFor="count-input">How many 'hello' words can you find?</label>
      <input type="number" id="count-input" />
      <button onClick={checkCount}>Check</button>
      <p id="result"></p>
    </>
  )
}
