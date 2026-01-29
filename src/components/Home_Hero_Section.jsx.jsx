import React from 'react'

function HeroSection() {
  return (
    <div>
        <section id='section1'>
          <article id='article1'>
            <div id='first_div'>
              <div id='live_edit'><p>. LIVE EDIT V2.0</p></div>

              <h1 id='words_matter'>Words that <span id='matter_span'>Matter.</span></h1>
              <p id='modern_standard'>
                The modern standard for digital publishing. Connect with a global audience through beautiful, focused typography.
              </p>
              <button id='start_reading'>
                Start Reading
                <img src="/arrows.png" alt="" id='arrow_img' />
                </button>
              <button id='become_writer'>Become a Writer </button>
            </div>
            <div id='second_div'>2</div>
          </article>
        </section>
    </div>
  )
}

export default HeroSection