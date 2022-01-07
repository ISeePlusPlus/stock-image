import React from "react";
import Photo from "./Photo";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const Photos = () => {
  const { photos, loading } = useGlobalContext();

  if (!loading && photos.length < 1) {
    return <h2 className='section-title'>No search results</h2>;
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Stock Photos</h2>
      <div className='photos-center'>
        {photos.map((item) => {
          return <Photo key={item.id} photo={item} />;
        })}
      </div>
      {loading && <Loading />}
    </section>
  );
};

export default Photos;
