// /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from 'axios';
import AppCard from "../components/AppCard"

function Movies() {


  let [listaMovies, setListaMovies] = useState([])
  let apiUrl = "http://localhost:8001"

  useEffect(() => {
    console.log("partito")
    getMovies()
  }, []);

  const getMovies = () => {
    axios.get(`${apiUrl}/api/movies`).then((resp) => {
      setListaMovies(resp.data.data)
    })
  }

  const printMovies = listaMovies.map((curMovie) => {
    return (
      <div key={curMovie.id} id={curMovie.id} className="d-flex align-items-start gap-1">
        <AppCard Movie={curMovie} />
      </div>
    )
  })



  return (
    <>
      <title>CineWorld - Tutti i Film</title>
      <main>
        <div className="container d-flex justify-content-center flex-column align-items-center">
          <h1 className="my-4 titolo">Tutti i Film</h1>
          <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5">
              {printMovies}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Movies
