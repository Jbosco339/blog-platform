import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ArticleDetails() {
  // Get article ID from the URL
  const { id } = useParams()

  // State to store the selected article
  const [article, setArticle] = useState(null)

  // Runs when the component mounts or when the ID changes
  useEffect(() => {
    // Get all articles from localStorage
    const storedArticles =
      JSON.parse(localStorage.getItem('articles')) || []

    // Find the article that matches the URL ID
    const selectedArticle = storedArticles.find(
      (item) => item.id.toString() === id
    )

    // Save found article to state
    setArticle(selectedArticle)
  }, [id])

  // If article is still loading or not found, show a message
  if (!article) {
    return (
      <p style={{ textAlign: 'center', marginTop: '40px' }}>
        Article not found or loading...
      </p>
    )
  }

  return (
    <section id="back2_section">
      <div id="back2_div">
        {/* Back to articles feed */}
        <Link to="/article" id="back_arrowdiv">
          <img src="/back2.png" alt="back arrow" id="backArrow" />
          <h3 id="back_2_Feed">Back to Feed</h3>
        </Link>

        {/* Author info */}
        <div id="initilas_div">
          <h1 id="grace_init">{article.authorAbrev}</h1>
          <h3>
            {article.authorName}
            <br />
            <span id="verifiedNew">
              Verified Author · {article.date}
            </span>
          </h3>
        </div>

        {/* Article title */}
        <h1 id="future_design22">{article.title}</h1>

        {/* Article content */}
        <div id="paragraphs_div">
          <p id="paragraph1">{article.write}</p>
        </div>
      </div>
    </section>
  )
}

export default ArticleDetails
