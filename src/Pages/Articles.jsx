import React from 'react'
import Article_header from '../components/Article_header'
import Article_card_component from '../components/Article_card_component'
import image3 from '../assets/images/image3.png';



function Articles() {
  return (
     <div>
      <Article_header/>
      <Article_card_component
        featured = " Featured"
        date = "22-08-2026"
        title = "The Future of Web Design in 2025"
        paragraph = "Artificial Intelligence is no longer a buzzword; it's a foundational tool for  creative interfaces. As we move into 2025, the focus shifts toward spatial computing and motion-driven narratives. We expect to see more generative UI that ada"
        authorNameInitial = "p"
        authorName = "Benjamin Adakole"
        deleting = {image1}
        arrowimg = {image3}
      />
      <Article_card_component
        featured = " Featured"
        date = "22-08-2026"
        title = "The Future of Web Design in 2025"
        paragraph = "Artificial Intelligence is no longer a buzzword; it's a foundational tool for  creative interfaces. As we move into 2025, the focus shifts toward spatial computing and motion-driven narratives. We expect to see more generative UI that ada"
        authorNameInitial = "p"
        authorName = "Benjamin Adakole"
        deleting = {image1}
        arrowimg = {image3}
      />
     </div>

  )
}

export default Articles