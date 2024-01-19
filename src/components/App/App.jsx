import GalleryList from "../GalleryList/GalleryList";
import React from 'react';


function App() {


    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        
        <GalleryList />
      </div>
    );
}

export default App;
