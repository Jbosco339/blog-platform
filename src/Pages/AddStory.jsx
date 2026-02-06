import React, { useState } from 'react'
import Write_Story from '../components/Write_Story'
import { useNavigate } from 'react-router-dom'

function AddStory() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    narrative: "",
    authorname: "",
    authorabrev: "",
  })
  //state to show success message
  const [successMessage, setSuccessMessage] = useState("")

  //handle form submit
  function handleSubmit (e){
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      date: new Date().toDateString(),
      title:formData.title,
      write: formData.narrative,
      authorName: formData.authorname,
      authorAbrev: formData.authorabrev
    }
    //get the articles data from local storage (it returns a string or null)
    const existingPosts = JSON.parse(localStorage.getItem('articles')) || []
    //convert the string to a javascript array using JSON.parse()
    //if nothing exists in localstorage yet (null), use an empty array instead
    
    //create a new array where the new post is placed at the begining
    const updatedPost = [newPost, ...existingPosts]
    //spread operator (...) copies all existing posts after the new post

    //save the updated array back into localstorage
    localStorage.setItem('articles', JSON.stringify(updatedPost))
    //convert the array back to string using JSON.stringify()
    //localstorage only stores data as strings


    //show success message
    setSuccessMessage('story published successfully!')

    //wait 1.5 seconds before redirect
    setTimeout (() =>{
      navigate('/articles')
    }, 1500)
  }
  return (
   <section id='addstory_wrapper'>
    <form onSubmit={handleSubmit} className='story_section'>
        <div className='story_main_div'>
            <div className='publish'>
            <h1 id='publish1'>Publish a Story</h1>
            <p id='mind_today'>What's on your mind today?</p>
        </div>
        <div className='input_areas'>
            <h4 id=''>HEADLINE</h4>
            <input 
            type="text" 
            placeholder='e.g The Art of Minimalist UI' 
            value={FormData.headline_input}
            id='headline_input'
            onChange={(e) =>
                setFormData ({...FormData, headline_input: e.target.value })
            }
            />
            
            <h4>THE NARRATIVE</h4>
            <textarea 
            name="" 
            id="text_area" 
            cols='30'
            rows='10'
            placeholder='Once upon a time...'
            value={formData.narrative}
            onChange={(e) =>
              setFormData({...formData, text_area: e.target.value})
            }
            ></textarea>


            {/* AUTHOR NAME */}
            <h4>AUTHOR NAME</h4>
            <input 
            type="text" 
            placeholder='e.g William Shakes' 
            value={formData.authorname}
            id='author_name2'
            onChange={(e) =>
              setFormData({...formData, author_name2: e.target.value})
            }
            
            />
            <br /> <br /><br />
            {/* AUTHOR ABBR */}
            <h4>AUTHOR ABBREVIATION</h4>
            <input 
            type="text" 
            placeholder='Name Abbreviation e.g B.A' 
            value={formData.authorname}
            id='author_name3'
            onChange={(e) =>
              setFormData({...formData, author_name3: e.target.value})
            }
            
            />

        </div>

        <div className='story_buttons'>
            <button id='publish_button' type='submit'>Publish Now</button>
            <button id='save_draft' type='submit'>Save Draft</button>
        </div>
        </div>
        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <p style={{color: 'green', marginTop: '10px'}}>
            {successMessage}
          </p>
        )}
    </form>
     <div>
        {/* <Write_Story/> */}
    </div>
   </section>
  )
}

export default AddStory