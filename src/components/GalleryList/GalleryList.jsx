//upon page loading, obtain array of gallery item objects from GET /api/gallery, then stores in a piece of react state



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';


const GalleryList = () => {
    console.log("inside gallery list");

    let [galleryList, setGalleryList] = useState([])

    const fetchGallery = () => {
        axios({
            method: 'GET',
            url: '/api/gallery'
        })
            .then((response) => {
                // console.log("Entire Response:", response);
                // console.log("Just the data:", response.data);

                setGalleryList(response?.data);

            })
            .catch(function (error) {
                console.log("error on get", error)
            });
    }

    useEffect(() => {
        fetchGallery();
    }, []);




    // In its return statement, .maps through the array of gallery item objects that are stored in React state to display each gallery item.
    return (
        <section data-testid="galleryList">
    
                <div>
                {galleryList.map((gallery) => {
                    console.log("gallery", gallery)
                    return (
                        <p key={gallery.id}><GalleryItem data-testid="galleryItem" key={gallery.id} photo={gallery} /></p>
                    )
                })}
            </div>
        </section>
    )
}

export default GalleryList;


