import React from 'react';
import './Home.css';
import sheldon from '../../images/sb-small-wheel.jpg';

const Home = () => {
  return (
    <>
      <h2>Home page</h2>
      <div className="">
        <div id="img-div">
          <img src={sheldon} id="image" alt="sheldon brown" />
          <caption id="img-caption">Mr. Sheldon Brown on his favorite samll wheels</caption>
        
        </div>
        <div id="tribute-info">
          <h2>Sheldon Brown</h2>
          <p></p>
          </div>
          <a id="tribute-link" href="https://en.wikipedia.org/wiki/Sheldon_Brown_(bicycle_mechanic)" rel="noreferrer" target="_blank">on wikipedia</a>
      </div>
    </>
  )
}

export default Home;





// User Story #8: The img element should responsively resize, relative to the width of its parent element, without exceeding its original size.

// User Story #9: The img element should be centered within its parent element.