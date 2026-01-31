import React from 'react'
import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'

function Header() {
  return (
    <header id='header'>
        <nav id='navigation'>
            <div id='div1'>
              <div id='logo'>
                <Link id='zap_img' to="/">
                  <Zap />
                </Link>
                </div>
              <Link id='devstream' to="/">
                <h4 id='devstrem2'>DEVSTREAM</h4>
              </Link>
            </div>
            <div id='div2'></div>

            <div id='div3'>
              <Link className='home_art' to="/">Home</Link>
              <Link className='home_art' to="/Article">Article</Link>
              <Link id='write_story' to="/add-story">Write a story</Link>
            </div>
          
        </nav>
        <br />
        <hr className='fullwidth_hr'/>
    </header>
  
  )
}

export default Header