import GalleryList from "../GalleryList/GalleryList";
import React, {useEffect} from 'react';


function App() {


    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        
        <GalleryList galleryListProp ={GalleryList}/>
      </div>
    );
}

export default App;
