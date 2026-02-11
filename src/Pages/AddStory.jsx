import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddStory() {
  // useNavigate lets us redirect the user programmatically
  const navigate = useNavigate()

  // State to store all form input values
  const [formData, setFormData] = useState({
    title: '',        // article headline
    narrative: '',    // main story content
    authorname: '',   // author's full name
    authorabrev: '',  // author's abbreviation (initials)
  })

  // State to show a success message after publishing
  const [successMessage, setSuccessMessage] = useState('')

  // Runs when the form is submitted
  function handleSubmit(e) {
    // Prevents the browser from refreshing the page
    e.preventDefault()

    // Create a new article object
    const newPost = {
      id: Date.now(),                       // unique ID based on timestamp
      date: new Date().toDateString(),      // readable date
      title: formData.title,                // headline
      write: formData.narrative,            // story content
      authorName: formData.authorname,      // author name
      authorAbrev: formData.authorabrev,    // author abbreviation
    }

    // Get existing articles from localStorage (or empty array if none)
    const existingPosts =
      JSON.parse(localStorage.getItem('articles')) || []

    // Add the new article to the beginning of the list
    const updatedPost = [newPost, ...existingPosts]

    // Save updated articles list back to localStorage
    localStorage.setItem('articles', JSON.stringify(updatedPost))

    // Show success message
    setSuccessMessage('Story published successfully!')

    // Redirect to articles page after 1.5 seconds
    setTimeout(() => {
      navigate('/article')
    }, 1500)
  }

  return (
    <section id="addstory_wrapper">
      {/* Form wrapper */}
      <form onSubmit={handleSubmit} className="story_section">
        <div className="story_main_div">
          {/* Page heading */}
          <div className="publish">
            <h1 id="publish1">Publish a Story</h1>
            <p id="mind_today">What's on your mind today?</p>
          </div>

          {/* Input fields */}
          <div className="input_areas">
            {/* HEADLINE INPUT */}
            <h4>HEADLINE</h4>
            <input
              type="text"
              placeholder="e.g Consistency Pays"
              value={formData.title}
              id="headline_input"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            {/* STORY CONTENT */}
            <h4>THE NARRATIVE</h4>
            <textarea
              id="text_area"
              cols="30"
              rows="10"
              placeholder="Once upon a time..."
              value={formData.narrative}
              onChange={(e) =>
                setFormData({ ...formData, narrative: e.target.value })
              }
            />

            {/* AUTHOR NAME */}
            <h4>AUTHOR NAME</h4>
            <input
              type="text"
              placeholder="e.g William Shakes"
              value={formData.authorname}
              id="author_name2"
              onChange={(e) =>
                setFormData({ ...formData, authorname: e.target.value })
              }
            />

            <br />
            <br />
            <br />

            {/* AUTHOR ABBREVIATION */}
            <h4>AUTHOR ABBREVIATION</h4>
            <input
              type="text"
              placeholder="Name Abbreviation e.g B.A"
              value={formData.authorabrev}
              id="author_name3"
              onChange={(e) =>
                setFormData({ ...formData, authorabrev: e.target.value })
              }
            />
          </div>

          {/* Action buttons */}
          <div className="story_buttons">
            {/* Submits the form */}
            <button id="publish_button" type="submit">
              Publish Now
            </button>

            {/* Does nothing yet (future feature) */}
            <button id="save_draft" type="button">
              Save Draft
            </button>
          </div>
        </div>

        {/* Success message shown after publishing */}
        {successMessage && (
          <p style={{ color: 'green', marginTop: '10px' }}>
            {successMessage}
          </p>
        )}
      </form>
    </section>
  )
}

export default AddStory
