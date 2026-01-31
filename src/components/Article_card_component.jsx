import React from 'react'

function Article_card_component({featured, title, date, authorName, authorNameInitial, paragraph, deleting, arrowimg,}) {
  return (
    <section id='article_sec'>
      <div id='main_div'>
        <div id='latest_div'>
          
          
        </div>
        <div id='cards_div'>
          <div id='inner_card_divs'>
            <div className='date_div'>
            <h4 id='featured'>{featured}</h4>
            <p id='date_jan'>{date}</p>
            </div>
            <h2 id='deFuture'>{title}</h2>
            <p id='artificial_intel'>{paragraph}</p>
            <hr className='line_through'/>

            <div id='icons_divs'>
              <div id='writername_and_initial'>
                <div id='initial'>{authorNameInitial}</div>
                <div id='writer_name'>{authorName}</div>
              </div>

              <div id='delete_andArrow'>
                <div id='delete_icon'><img src={deleting} alt="" className='icon_images' />
                  
                </div>
                <div id='arrow_icon'><img src={arrowimg} alt="" className='icon_images'/>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        


      
      </div>
      
    </section>
  )
}

export default Article_card_component