import { NavLink } from "react-router-dom"

function MainNav() {
    const menuDiNav = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/projects",
            title: "Tutti i Progetti"
        },
    ]

    const print = menuDiNav.map((curElem) => {
        return (
            <li key={curElem.title}>
                <NavLink className="navlink" to={curElem.path}>{curElem.title}</NavLink>
            </li>
        )
    })

    return (
        <>
            <div id="app">
                <nav className="navbar navbar-expand-md navbar-light ">
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center" href="/">
                            <img src="/logo.jpeg" alt="CineWorld Logo" className="logo" />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MainNav