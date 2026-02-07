import React from 'react'
import { Link } from 'react-router-dom';

function Hamburger({ menuOpen, setMenuOpen }) {
    if (!menuOpen) return null;
  return (
    
            <div id='div3' className='hamburger-menu ${menuOpen ? "open" : ""}' >
                <button 
                className='close-btn'
                onClick={() => setMenuOpen(false)}
                >X</button>
              <Link className='home_art' to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
              <Link className='home_art' to="/Article" onClick={()=>setMenuOpen(false)}>Article</Link>
              <Link id='write_story' to="/add-story" onClick={()=>setMenuOpen(false)}>Write a story</Link>
              
            </div>
            

  );
}

export default Hamburger