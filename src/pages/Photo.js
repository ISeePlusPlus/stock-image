import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const photoUrl = "https://api.pexels.com/v1/photos";
const API_KEY = "563492ad6f917000010000013cb598e623e54c3eaaf8f5d8b7ea4e7b";

const Photo = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [photo, setPhoto] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    async function getPhoto() {
      try {
        const response = await fetch(`${photoUrl}/${id}`, {
          headers: {
            Authorization: API_KEY,
          },
        });
        const photo = await response.json();

        if (photo) {
          setPhoto(photo);
        } else {
          setPhoto(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPhoto();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!photo) {
    return (
      <>
        <h2 className='section-title'>No photo to display</h2>;
        <section className='section single-photo-section'>
          <Link to='/' className='btn btn-primary'>
            back home
          </Link>
        </section>
        ;
      </>
    );
  }

  const {
    alt,
    avg_color,
    height,
    width,
    photographer,
    url,
    photographer_url,
    src,
  } = photo;
  return (
    <section className='section single-photo-section'>
      <Link to='/' className='btn btn-primary '>
        back home
      </Link>
      <h2 className='section-title'>{alt}</h2>
      <div className='single-photo'>
        <img src={src.large} alt={alt} />
        <div className='single-photo-info'>
          <p>
            <span className='single-photo-data'>Original height :</span>{" "}
            {height}px
          </p>
          <p>
            <span className='single-photo-data'>Original width :</span> {width}
            px
          </p>
          <p>
            <span className='single-photo-data'>photographer :</span>{" "}
            {photographer}
          </p>
          <p>
            <span className='single-photo-data'>Avrage color :</span>{" "}
            <span style={{ background: avg_color }} className='color-box'>
              &nbsp;
            </span>
            {avg_color}
          </p>
          <p>
            <span className='single-photo-data'> Links :</span> <br />
            <button
              style={{ margin: "20px 0px" }}
              className='btn btn-primary link-btn'
              onClick={() => window.open(photographer_url)}
            >
              Artist
            </button>
            <br />
            <button
              className='btn btn-primary link-btn'
              onClick={() => window.open(url)}
            >
              Original
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photo;
