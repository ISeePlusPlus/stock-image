import React from "react";

export default function About() {
  return (
    <section className='section about-section'>
      <h1 className='section-title'>about</h1>
      <p>
        This application was built with efficiency and performance in mind.
        Photos are provided by the Pexels API.
      </p>
      <a href='https://www.pexels.com'>
        <img
          src='https://images.pexels.com/lib/api/pexels.png'
          className='logo'
          alt='Pexels logo'
        />
      </a>
    </section>
  );
}
