import { Link } from "react-router-dom"

function HomePage() {
    return (
        <main>
            <div className="container ">
                <h1 className="my-3 text-center titolo"><strong>Benvenuto a CineWorld</strong>
                    <br/>
                    <small className="sottotitolo">Il tuo cinema online</small>
                </h1>
                <div className="text-center my-4">
                    <img src="/logo2.jpeg" alt="CineWorld Logo" className="img-fluid logo2" style={{ maxWidth: "18.75rem" }} />
                </div>
                <div className="my-3 text-center">
                    <Link to={`/movies`} className="btn btn-danger btn-lg">
                        Vai alla lista dei film
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default HomePage