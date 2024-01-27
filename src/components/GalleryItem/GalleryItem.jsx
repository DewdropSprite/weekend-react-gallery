// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

import React, { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';
import { useEffect } from 'react'


const GalleryItem = ({ photo }) => {
    console.log("photo object in GalleryItem", photo)

    let [photoDescription, setPhotoDescription] = useState(false);
    let [photoLikes, setPhotoLikes] = useState(photo.likes || 0);

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

    useEffect(() => {
        setPhotoLikes(photo.likes || 0)
    }, [photo.likes])

    let photoDescSwitch;

    if (photoDescription) {
        photoDescSwitch = (
            <div>
                <p data-testid="description">{photo.description}</p>
            </div>
        )
    }
    else {
        photoDescSwitch = (
            <div >
                <img src={photo.url} style={{ width: '300px', height: '200px' }} alt="Gallery Item" />
            </div>
        )
    }

    return (
        <div data-testid="galleryItem" >
            <div id='gallery-item'>
                <h4>{photo.title}</h4>
                <p>
                    <button id="toggle" data-testid="toggle" onClick={toggleDisplay}>
                        {photoDescription ? 'Show Photo' : 'Show Description'}
                    </button>
                </p>
            </div>
            <div>
                {photoDescSwitch}
            </div>
            <div>
                <button data-testid="like" onClick={galleryLikes}> Like </button>
                {photoLikes}
            </div>
        </div>


    )
}







export default GalleryItem;