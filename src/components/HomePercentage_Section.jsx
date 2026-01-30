import React from 'react'

function Percentage_Section() {
  return (
    <section id='sec_percentage'>
        <hr className='sec2_hr'/>
        <article id='sec2_art2'>
            <div className='percentage_divs'>
                <h1 className='percentage_header'>45k+</h1>
                <p className='mini_paragraph'>Active Readers</p>
            </div>
            <div className='percentage_divs'>
                <h1 className='percentage_header'>12k+</h1>
                <p className='mini_paragraph'>Stories Told</p>
            </div>
            <div className='percentage_divs'>
                <h1 className='percentage_header'>890</h1>
                <p className='mini_paragraph'>Daily Authors</p>
            </div>
            <div className='percentage_divs'>
                <h1 className='percentage_header'>100%</h1>
                <p className='mini_paragraph'>OPEN SOURCE</p>
            </div>
        </article>
        <hr className='sec2_hr'/>

        <div id='sec2_main2_div'>
            <div id='first_main'>
                <h1 id='everything_happy'>
                    Everything you need.
                </h1>
                <p id='built_from'>
                    Built from the ground up for speed, SEO, and developer happiness.
                </p>
            </div>
            <div id='second_main'>
                <div id='sec2_blackdiv'>
                    <div id='black_innerdiv'>
                        <h2 id='real_time'>Real-time Analytics</h2>
                    <p id='watch_ur_story'>
                        Watch your stories go viral with our integrated real-time tracking dashboard.
                    </p>
                    </div>
                    {/* <div id='black_div2'>oo</div> */}
                </div>

                <div id='sec2_purple'>
                    <img src="/security.png" alt="" id='security' />
                    <h3 id='secure_default'>Secure by Default</h3>
                    <p id='end_end'>
                        End-to-end encryption for all your <br /> private drafts.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Percentage_Section