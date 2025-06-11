/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom"

function AppCard({ Movie }) {
    let apiUrl = "http://localhost:8001"
    const navigate = useNavigate()


    return (
        <div className="col">
            <div className="my-mini-card">
                <h4>{Movie.title}</h4>
                <h6>{Movie.director}</h6>
                <p>{Movie.release_year}</p>

                <Link to={`/movies/${Movie.id}`} className="btn btn-primary mt-3 mb-1 btn-lg">
                    Visualizza
                </Link>
            </div>
        </div>
    )
}

export default AppCard