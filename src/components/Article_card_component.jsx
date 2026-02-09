import React from 'react'
import { Link } from 'react-router-dom'

function Article_card_component({
  id,           // unique article ID
  title,        // article headline
  date,         // publish date
  authorName,   // full author name
  write,        // article content
  authorAbrev,  // author initials
  deleting,     // delete icon image
  arrowimg,     // read-more arrow image
  onDelete,     // function passed from parent to delete article
}) {

  // Runs when the delete icon is clicked
  function handleDeleteClick(e) {
    // Prevents Link/navigation behavior
    e.preventDefault()

    // Ask user to confirm deletion
    const confirmDelete = window.confirm('Delete this article?')

    // If confirmed, call parent delete function
    if (confirmDelete) {
      onDelete(id)
    }
  }

  return (
    <section id="article_sec">
      <div id="main_div">
        {/* Reserved section (can be used for featured/latest styling) */}
        <div id="latest_div"></div>

        <div id="cards_div">
          <div id="inner_card_divs">
            {/* Date and featured label */}
            <div className="date_div">
              <h4 id="featured">featured</h4>
              <p id="date_jan">{date}</p>
            </div>

            {/* Article title – navigates to full article */}
            <Link to={`/articles/${id}`} id="deFuture">
              {title}
            </Link>
            <br />

            {/* Short preview of article content */}
            <Link to={`/articles/${id}`} id="artificial_intel">
              {write?.slice(0, 120)}
            </Link>

            {/* Visual separator */}
            <hr className="line_through" />

            <div id="icons_divs">
              {/* Author information */}
              <div id="writername_and_initial">
                <div id="initial">{authorAbrev}</div>
                <div id="writer_name">{authorName}</div>
              </div>

              {/* Action icons */}
              <div id="delete_andArrow">
                {/* DELETE ARTICLE BUTTON */}
                <button id="delete_icon" onClick={handleDeleteClick}>
                  <img
                    src={deleting}
                    alt="delete"
                    className="icon_images"
                  />
                </button>

                {/* READ MORE / VIEW FULL ARTICLE */}
                <Link to={`/articles/${id}`} id="arrow_icon">
                  <img
                    src={arrowimg}
                    alt="read more"
                    className="icon_images"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article_card_component
