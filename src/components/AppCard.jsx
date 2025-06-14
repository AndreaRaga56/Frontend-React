/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function AppCard({ Movie }) {

    return (
        <div className="col">
            <div className="my-mini-card">
                <div className="card-body">
                    <h4>{Movie.title}</h4>
                    <h6>{Movie.director}</h6>
                    <p>{Movie.release_year}</p>
                </div>
                <div className="container">
                    <Link to={`/movies/${Movie.id}`} className="btn btn-primary mt-3 mb-1">
                        Visualizza
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AppCard