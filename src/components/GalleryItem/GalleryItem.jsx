// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

import React, { useState } from 'react';
import axios from 'axios';

const GalleryItem = ({ photo }) => {
    console.log("photo object in GalleryItem", photo)

    let [photoDescription, setPhotoDescription] = useState(false);
    let [photoLikes, setPhotoLikes] = useState(0);

    const toggleDisplay = () => {
        setPhotoDescription(!photoDescription);
    }

    const galleryLikes = () => {
        axios.put(`/api/gallery/like/${photo.id}`)
            .then(() => {
                setPhotoLikes(photoLikes + 1);
            })
            .catch(error => {
                console.log("error", error)
            })
    }
    // let photoDescSwitch;

    // if(photoDescription) {
    //     photoDescSwitch = <p data-testid="description">{photo.description}</p>;
    // }
    // else{
    //         photoDescSwitch = <p><img src={photo.url} style={{width: '500px'}} alt="Gallery Item"/></p>
    //     }
    console.log("line 37", photo.url)
    return (
        <>
            text
            <h3> Likes: {photoLikes}</h3>
            <img src="images/goat_small.jpg"/>
            <button data-testid="like" onClick={galleryLikes}> Like </button>
            <button data-testid="toggle" onClick={toggleDisplay}>
                {photoDescription ? 'Photo' : 'Description'}
            </button>

        </>
    )


}






export default GalleryItem;