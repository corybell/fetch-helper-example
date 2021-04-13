import React, { useState, useEffect } from "react"
import { get } from '@bellistic/fetch-helper'
import Layout from "components/PageLayout"
import Helmet from "components/Helmet"
import { Card, Title } from "components/Core"

// https://ghibliapi.herokuapp.com/#tag/Films
const url = 'https://ghibliapi.herokuapp.com/films?fields=id,title,director,release_date,running_time'

const IndexPage = () => {
  const [fetched, setFetched] = useState(false);
  const [films, setFilms] = useState([])

  useEffect(() => {
    async function hydrate () {
      const response = await get(url)
      if (response.success) {
        setFilms(response.data)
      }

      setFetched(true)
    }
    
    if (!fetched) {
      hydrate()
    }
  })
  
  const renderFilm = (f) => (
    <tr key={f.id}>
      <td>{f.title}</td>
      <td>{f.director}</td>
      <td>{f.release_date}</td>
      <td>{f.running_time}</td>
    </tr>
  )
  
  return (
    <Layout>
      <Helmet title="GET" />
      <Card>
        <h1>GET Example</h1>
        <span>
          This page uses the 'get' function to fetch a list of Studio Ghibli films.
        </span>
      </Card>
      <Card>
        <h2>Studio Ghibli Films</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            { films.map(f => renderFilm(f)) }
          </tbody>
        </table>
      </Card>
      
    </Layout>
  )
}

export default IndexPage
