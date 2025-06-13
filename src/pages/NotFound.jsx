import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main>
            
            <title>Not Found</title>

            <div className="container">
                <h1 className="my-5 text-center titolo"><strong>Error 404, page not found :(</strong></h1>
            </div>

            <div className="text-center my-4">
                <img src="/logo2.jpeg" alt="CineWorld Logo" className="img-fluid logo2" style={{ maxWidth: "18.75rem" }} />
            </div>
            <div className="my-3 text-center">
                <Link to={`/movies`} className="btn btn-danger btn-lg">
                    Torna alla lista dei film
                </Link>
            </div>
        </main>

    )
}

export default NotFound