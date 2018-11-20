import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const Images = props.images.map((image) => {
        return <ImageCard key = {image.id} image={image} />
    });

    return <div className="image-list">{Images}</div>
}

export default ImageList;