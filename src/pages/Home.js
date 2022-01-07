import React from "react";
import Photos from "../components/Photos";
import SearchForm from "../components/SearchForm";
export default function Home() {
  return (
    <main>
      <SearchForm />
      <Photos />
    </main>
  );
}
