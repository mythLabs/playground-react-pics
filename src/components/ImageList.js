import React from 'react';

const ImageList = (props) => {
    const Images = props.images.map(({id,urls,description}) => {
        return <img key={id} src={urls.regular} alt={description}/>
    });

    return <div>{Images}</div>
}

export default ImageList;