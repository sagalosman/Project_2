import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DownloadLink from "react-download-link";



const Photos = (props) => {

  const [photos, updatePhotos] = useState([])


  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=8&limit=1000')
      .then((resp) => {
        updatePhotos(resp.data)
        console.log(resp.data)
      })
  }, [])

  console.log(photos)

    return <section className="showcas">
    <header className="search_picture">
    <Link to='/' className="logo">Splash</Link>

  </header>
  <div className="section">

<div className="columns is-multiline is-mobile">
  {photos.map((photo, index) => {
    return <div className="column is-one-third-desktop is-half-tablet is-half-mobile"
      key={index}>
        <section className="cards">
          <article className="card card--2">
            <a href="#" class="card_link">
              <img src={photo.download_url} alt={photo.author} />
            </a>
            <div className="card__info">
              <span className="card__by">by <a href="#" class="card__author" title="author">{photo.author}</a></span>
              <DownloadLink
    label="Download"
    className="download_btn"
    filename={photo.download_url}
    exportFile={() => photo.download_url}
/>
              
            </div>
          </article>
        </section>
    </div>
  })}
</div>
</div>
</section>
}

export default Photos