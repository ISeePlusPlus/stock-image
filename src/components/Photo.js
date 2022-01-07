import React from "react";
import { Link } from "react-router-dom";

const Photo = ({ photo }) => {
  const { alt, src, id, photographer } = photo;
  return (
    <article className='photo'>
      <div className='img-container'>
        <img src={src.medium} alt={alt} />
      </div>
      <div className='photo-footer'>
        <span>{alt}</span>
        <p>{`Photo by ${photographer} on Pexels`}</p>
        <Link to={`/photo/${id}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Photo;
