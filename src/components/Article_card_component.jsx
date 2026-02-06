import React from 'react'
import { Link } from 'react-router-dom'

function Article_card_component({id, featured, title, date, authorName, authorNameInitial, paragraph, deleting, arrowimg,}) {
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
            <Link to={`/articles/${id}`} id='deFuture'>{title}</Link><br />
            <Link to={`/articles/${id}`} id='artificial_intel'>{paragraph}</Link>
            <hr className='line_through'/>

            <div id='icons_divs'>
              <div id='writername_and_initial'>
                <div id='initial'>{authorNameInitial}</div>
                <div id='writer_name'>{authorName}</div>
              </div>

              <div id='delete_andArrow'>
                <Link to={`/articles/${id}`} id='delete_icon'><img src={deleting} alt="" className='icon_images' />
                  
                </Link>
                <Link to={`/articles/${id}`} id='arrow_icon'><img src={arrowimg} alt="" className='icon_images'/>
                  
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