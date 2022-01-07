import React, { useState, useContext, useEffect, useRef } from "react";

const AppContext = React.createContext();
const API_KEY = process.env.STOCK_IMAGE_API_KEY;
const searchUrl = "https://api.pexels.com/v1/search";
const curatedUrl = "https://api.pexels.com/v1/curated";
const perPage = "&per_page=15";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [newPhotos, setNewPhotos] = useState(false);
  const mounted = useRef(false);
  //const mounted = useRef(false);

  const fetchPhotos = async () => {
    setLoading(true);
    let url;
    if (searchTerm) {
      url = `${searchUrl}?query=${searchTerm}&page=${page}${perPage}`;
    } else {
      url = `${curatedUrl}?page=${page}${perPage}`;
    }
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (searchTerm && page === 1) {
          return data.photos;
        } else {
          return [...oldPhotos, ...data.photos];
        }
      });
      setNewPhotos(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNewPhotos(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newPhotos) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newPhotos]);

  const event = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setNewPhotos(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  //either change page and initiate useEffect with new term, or fetchphotos directly
  const handleSubmit = (e) => {
    console.log(searchTerm);
    e.preventDefault();
    if (!searchTerm) return;
    if (page === 1) {
      fetchPhotos();
    }
    setPage(1);
  };

  return (
    <AppContext.Provider
      value={{ loading, photos, setPhotos, setSearchTerm, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
