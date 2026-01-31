import React from 'react'

function Write_Story() {
  return (
    <section className='story_section'>
        <div className='story_main_div'>
            <div className='publish'>
            <h1 id='publish1'>Publish a Story</h1>
            <p id='mind_today'>What's on your mind today?</p>
        </div>
        <div className='input_areas'>
            <h4 id=''>HEADLINE</h4>
            <input type="text" placeholder='e.g The Art of Minimalist UI' id='headline_input'/>
            <h4>THE NARRATIVE</h4>
            <textarea name="" id="text_area" placeholder='Once upon a time...' ></textarea>
        </div>

        <div className='story_buttons'>
            <button id='publish_button'>Publish Now</button>
            <button id='save_draft'>Save Draft</button>
        </div>
        </div>
    </section>
  )
}

export default Write_Story