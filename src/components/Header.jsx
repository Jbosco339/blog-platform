import React from 'react'
import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'

function Header() {
  return (
    <header id='header'>
        <nav id='navigation'>
            <div id='div1'>
              <div id='logo'>
                <Link id='zap_img'><Zap />
                </Link>
                </div>
              <div id='devstream'>
                <h4 id='devstrem2'>DEVSTREAM</h4>
              </div>
            </div>
            <div id='div2'></div>

            <div id='div3'>
              <div className='home_art'>Home</div>
              <div className='home_art'>Article</div>
              <div id='write_story'>Write a story</div>
            </div>
          
        </nav>
        
    </header>
  )
}

export default Header