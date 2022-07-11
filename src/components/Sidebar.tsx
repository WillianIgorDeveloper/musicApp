import { Link, useLocation } from "react-router-dom"

export function Sidebar () {

    const address = useLocation()

    return (
        <aside className="aside">
            <h1>Music App</h1>
            <nav>
                <ul className="aside-navegation">
                    <li className={address.pathname === '/home' ? "aside-navegation-active" : ""}>
                        <Link className="aside-link" to='/home'>Home</Link>
                    </li>
                    <li className={address.pathname === '/buscar' ? "aside-navegation-active" : ""}>
                        <Link className="aside-link" to='/buscar'>Buscar</Link>
                    </li>
                </ul>
                <div className="aside-divisor"></div>
                <ul className="aside-navegation">
                    <li className={address.pathname === '/curtidas' ? "aside-navegation-active" : ""}>
                        <Link className="aside-link" to='/curtidas'>Curtidas</Link>
                    </li>
                    <li className={address.pathname === '/artistas' ? "aside-navegation-active" : ""}>
                        <Link className="aside-link" to='/artistas'>Artistas</Link>
                    </li>
                    <li className={address.pathname === '/albuns' ? "aside-navegation-active" : ""}>
                        <Link className="aside-link" to='/albuns'>Álbuns</Link>
                    </li>
                </ul>
                <div className="aside-divisor"></div>
                <div className={`${address.pathname === '/playlists' ? "aside-playlist-active" : ""} aside-playlist`}>
                    <Link className="aside-link" to='/playlists'>Playlists</Link>
                    <button></button>
                </div>
            </nav>
        </aside>
    )
}