import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

function SinglePage() {

    let { id } = useParams()
    const navigate = useNavigate()
    const apiUrl = "http://localhost:8001"
    let [curElem, setCurElem] = useState(null)

    // id = parseInt(id)
    // let next = id + 1;
    // let prev = id - 1;
    // console.log(id, next, prev)

    useEffect(() => {
        console.log("partito")
        axios.get(`${apiUrl}/api/movies/${id}`)
            .then((resp) => {
                setCurElem(resp.data.data)
            })
            .catch(() => {
                navigate("/not-found", { replace: true })
            })
    }, [id, navigate])

    return (
        <>

            <main>
                {curElem && (
                    <>
                        <title>CineWorld - {curElem.title}</title>
                        <div className="container d-flex justify-content-center flex-column align-items-center">
                            <div className="my-card">
                                <h1 className="mb-2">{curElem.title}</h1>
                                <div className="my-card-body">
                                    <div className="col-12 col-sm-3">
                                        <div className="poster">
                                            {curElem.poster_url.startsWith('http') ? (
                                                <img src={curElem.poster_url} alt={`Poster di ${curElem.title}`} className="img-fluid" />
                                            ) : (
                                                <img src={`${apiUrl}/storage/${curElem.poster_url}`} alt={`Poster di ${curElem.title}`} className="img-fluid" />
                                            )}
                                        </div>
                                    </div>
                                    <div className=" col-12 col-sm-9">
                                        <div className="movie-details">
                                            <p><strong>Anno: </strong>{curElem.release_year}</p>
                                            <p><strong>Regista: </strong>{curElem.director}</p>
                                            <p><strong>Genere: </strong>
                                                {curElem.genre ? (curElem.genre.name) : (`Genere non disponibile`)}</p>
                                            <p><strong>Voto: </strong>
                                                {curElem.rating ? (curElem.rating) : (`Voto non disponibile`)}</p>

                                            <p className="my-2"><strong>Descrizione: </strong>
                                                {curElem.description ? (curElem.description) : (`Descrizione non disponibile`)}</p>

                                            <p><strong>Piattaforme di streaming: </strong>
                                                {curElem.streaming_platforms && curElem.streaming_platforms.length > 0 ? (
                                                    <ul>
                                                        {curElem.streaming_platforms.map((platform) => {
                                                            return (<li id={platform.id} key={platform.id}>{platform.name}</li>)
                                                        })}
                                                    </ul>
                                                ) : (`Nessuna piattaforma disponibile`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottoni mt-3 mb-1">
                                <div className="prev-next">
                                    <button className="btn btn-danger" disabled={curElem.prev_id == null} onClick={() => navigate(`/movies/${curElem.prev_id}`)}>Precedente</button>
                                    <button className="btn btn-danger" disabled={curElem.next_id == null} onClick={() => navigate(`/movies/${curElem.next_id}`)}>Successivo</button>
                                </div>

                                <div>
                                    <button onClick={() => navigate(`/movies`)} className="btn btn-secondary ">Torna ai Film</button>
                                </div>                              
                                
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    )
}

export default SinglePage
