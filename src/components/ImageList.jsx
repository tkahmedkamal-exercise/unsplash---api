import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  const image = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className="image-list">{image}</div>
}

export default ImageList;