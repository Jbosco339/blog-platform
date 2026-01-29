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
            <div id='second_div'>
              <div id='second_div_inner1'>
                <div id='second_div_inner12'>
                  <img src="/star.png" alt="" id='star'/>
                  <p id='ai_assisted'>AI Assisted <br /> Content</p>
                  
                </div>
              </div>


              <div id='second_div_inner2'>
                <div id='second_div_inner22'>
                  <img src="/layout.png" alt="" id='layout'/>
                  <p id='adaptive'>
                    Adaptive <br /> Layouts
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
    </div>
  )
}

export default HeroSection