import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Display({current}) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + current + "&client_id=" + API_KEY
    axios.get(url).then((response) => {
      console.log(response)
      setResults(response.data.results)
    }).catch(error => {
      console.log(error)
    })
  })


  return (
    <div>
      {results.map((image, i) => (
      <div className="card">
        <img key={i} src={image.urls.thumb} />
      </div>
      ))}
    </div>
  )
}


