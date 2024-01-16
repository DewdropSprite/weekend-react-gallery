// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

import React, {useState} from 'react';
import axios from 'axios';

const GalleryItem = ({photo}) => {
    let [photoDescription, setPhotoDescription] = useState(false);
    let [photoLikes, setPhotoLikes] = useState(photo.likes)

    const toggleDisplay = () => {
        setPhotoDescription(!photoDescription);
    }
    
    const galleryLikes = () => {
        axios.put(`/api/gallery/like/${photo.id}`)
         .then(() => {
            setPhotoLikes(photoLikes +1);
         })
         .catch(error =>{
            console.log("error", error)
})

let photoDescSwitch;

if(photoDescription) {
    photoDescSwitch = <td data-testid="description">{photo.description}</td>;
}
else{
        photoDescSwitch = <td><img src={photo.url} style={{width: '500px'}} alt="Gallery Item"/></td>
    }

    return(
        <div data-testid="galleryItem">
            {photoDescSwitch}
            <h3> Likes: {photoLikes}</h3>
            <div>
            <button data-testid="like" onClick = {galleryLikes} > Like </button>
            <button data-testid="toggle" onClick = {toggleDisplay}>
                {photoDescription ? 'Photo' : 'Description'}
            </button>
            </div>
        </div>
    )
  
}}






export default GalleryItem;