import React from 'react'
import { Link } from 'react-router-dom';

function Hamburger({ menuOpen, setMenuOpen }) {
    if (!menuOpen) return null;
  return (
    
            <div className=' hamburger-menu ${menuOpen ? "open" : ""}' >
                <button 
                className='close-btn'
                onClick={() => setMenuOpen(false)}>
                  <img src="/close.png" id='close_img' alt="" />
                </button>
              <Link className='home_art' to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
              <Link className='home_art' to="/Article" onClick={()=>setMenuOpen(false)}>Article</Link>
              <Link id='write_story' to="/add-story" onClick={()=>setMenuOpen(false)}>Write a story</Link>
              
            </div>
            

  );
}

export default Hamburger