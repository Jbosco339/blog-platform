import React, { useEffect, useState } from 'react'
import Article_header from '../components/Article_header'
import Article_card_component from '../components/Article_card_component'
import image3 from '../assets/images/right-up.png'
import image1 from '../assets/images/delete (1).png'

function Articles() {
  // State to hold all articles retrieved from localStorage
  const [articles, setArticles] = useState([])

  // Runs once when the component mounts
  // Fetches saved articles from localStorage
  useEffect(() => {
    const storedArticles =
      JSON.parse(localStorage.getItem('articles')) || []
    setArticles(storedArticles)
  }, [])

  // Handles deleting an article
  function handleDelete(id) {
    // Remove the article with the matching id
    const updatedArticles = articles.filter(
      article => article.id !== id
    )

    // Update state so UI refreshes immediately
    setArticles(updatedArticles)

    // Update localStorage so deletion persists on reload
    localStorage.setItem(
      'articles',
      JSON.stringify(updatedArticles)
    )
  }

  return (
    <section id="articles_page">
      <article id="articles_page_inner">
        {/* Page header component */}
        <Article_header />

        {/* Show a message when there are no articles */}
        {articles.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              marginTop: '20px',
              fontStyle: 'italic',
            }}
          >
            No articles found. Be the first to publish a story!
          </p>
        ) : (
          // Render an article card for each article in the array
          articles.map(article => (
            <Article_card_component
              key={article.id}          // Unique key for React
              {...article}              // Spread article properties as props
              onDelete={handleDelete}   // Pass delete function to child
              deleting={image1}         // Delete icon image
              arrowimg={image3}         // Read-more arrow image
            />
          ))
        )}
      </article>
    </section>
  )
}

export default Articles
