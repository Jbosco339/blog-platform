import React from 'react'
import Article_header from '../components/Article_header'
import Article_card_component from '../components/Article_card_component'
import image3 from '../assets/images/right-up.png';
import image1 from '../assets/images/delete (1).png';



function Articles() {
  return (
     <div>
      <Article_header/>
      <Article_card_component
        featured = " Featured"
        date = "17-01-2026"
        title = "The Future of Web Design in 2025"
        paragraph = "Artificial Intelligence is no longer a buzzword; it's a foundational tool for  creative interfaces. As we move into 2025, the focus shifts toward spatial computing and motion-driven narratives. We expect to see more generative UI that ada"
        authorNameInitial = "G"
        authorName = "Grace Patrick"
        deleting = {image1}
        arrowimg = {image3}
      />
      <Article_card_component
        featured = " Featured"
        date = "22-01-2026"
        title = "Minimalism as a Lifestyle"
        paragraph = "Choosing less isn't just about aesthetics; it's about clarity. In this article, we explore how reducing noise leads to better cognitive performance and emotional well-being. By stripping away the non-essential, we create space for the things that t"
        authorNameInitial = "B"
        authorName = "Benjamin Adakole"
        deleting = {image1}
        arrowimg = {image3}
      />
      <Article_card_component
        featured = " Featured"
        date = "20-02-2026"
        title = "Mastering Tailwind CSS Transitions"
        paragraph = "Artificial Intelligence is no longer a buzzword; it's a foundational tool for creative interfaces. As we move into 2025, the focus shifts toward spatial computing and motion-driven narratives. "
        authorNameInitial = "S"
        authorName = "Samuel Urokpo"
        deleting = {image1}
        arrowimg = {image3}
      />
      <Article_card_component
        featured = " Featured"
        date = "08-03-2026"
        title = "The Future of Web Design in 2025"
        paragraph = "Artificial Intelligence is no longer a buzzword; it's a foundational tool for  creative interfaces. As we move into 2025, the focus shifts toward spatial computing and motion-driven narratives. We expect to see more generative UI that ada"
        authorNameInitial = "A"
        authorName = "Annabella Rich"
        deleting = {image1}
        arrowimg = {image3}
      />
     </div>

  )
}

export default Articles