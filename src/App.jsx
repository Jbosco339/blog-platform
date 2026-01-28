import { Routes, Route } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts.jsx';

import Home from './Pages/Home.jsx';
import Article from './Pages/Articles.jsx';
import AddStory from './Pages/AddStory.jsx';
import ArticleDetails from './Pages/ArticleDetails.jsx';
import NotFound from './Pages/NotFound.jsx';
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route element = {<MainLayouts/>}>
          <Route path='/' element = {<Home/>}/>
          <Route path='article' element = {<Article/>}/>
          <Route path='articles/:id' element = {<ArticleDetails/>}/>
          <Route path='add-story' element = {<AddStory/>}/>
          <Route path='*' element = {<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
