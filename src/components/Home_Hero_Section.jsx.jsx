import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div>
        <section id='section1'>
          <article id='article1'>
            <div id='first_div'>
              <div id='live_edit'><p>. LIVE EDIT V2.0</p></div>

              <h1 id='words_matter'>Write Smarter <span id='matter_span'>Read Deeper.</span></h1>
              <p id='modern_standard'>
                A modern publishing platform built for writers and readers who value clarity, focus, and impact.
              </p>
              <Link to="/Article">
              <button id='start_reading'>
                Start Reading
                <img src="/arrows.png" alt="" id='arrow_img' />
                </button>
              </Link>
              <Link to="/add-story">
              <button id='become_writer'>Become a Writer </button>
              </Link>
            </div>


            <div id='second_div'>
              <div className='secon_divInners'>
              <img src="/star.png" alt="" className='miniImage invert'/>
              <h3 className='invert'>AI Assisted Content</h3>
              <p id='box1_paragraph'>Write with clearity using smart tools that help your idea flow</p>
              </div>


              <div className='secon_divInners2'>
                <img src="/layout.png" alt="" className='miniImage'/>
              <h3>Adaptive Layouts</h3>
              <p>
                Your story look stunning on every screen, every time
              </p>
              </div>
            </div>
          </article>
        </section>
    </div>
  )
}

export default HeroSection