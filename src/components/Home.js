import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return   <section class="showcase">
  <header>
    <h2 class="logo">Splash</h2>
  </header>
  
 
  
  {/* <div class="overlay"></div> */}
  <div class="text">
    <h3>The best free stock photos shared by talented creators.</h3>
    <p>The Splash app is home to over hundred free high-resolution images brought to you by the world’s most generous community of photographers. Want in?.</p>
    <Link to='/photos' className="a">Explore</Link>
  </div>
</section>
}

export default Home