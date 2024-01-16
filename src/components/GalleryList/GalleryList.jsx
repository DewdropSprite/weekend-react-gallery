//upon page loading, obtain array of gallery item objects from GET /api/gallery, then stores in a piece of react state



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

const GalleryList = ({photo}) => {
    console.log("photo object", photo);
   
    let [galleryList, setGalleryList] = useState([])

    const fetchGallery = () => {
        axios({
            method: 'GET',
            url: '/api/gallery'
        })
            .then((response) => {
                console.log("Entire Response:", response);
                console.log("Just the data:", response.data);

                setGalleryList(response.data);
            })
            .catch(function (error) {
                console.log("error on get", error)
            });
    }

    useEffect(() => {
        fetchGallery();
    }, [])



    // In its return statement, .maps through the array of gallery item objects that are stored in React state to display each gallery item.
    return (
<table data-testid="galleryList">
    <tbody>
{galleryList.map((gallery) => (
                    <tr key={gallery.id}>
                        <GalleryItem photo={gallery}/>
                    </tr>
                ))}
</tbody>
</table>
)}

export default GalleryList;

