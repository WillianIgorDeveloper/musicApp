import Link from "next/link";
import { MusicNotes, House, MagnifyingGlass, Books, Heart, Playlist } from "phosphor-react";
import styles from './NavegationBar.module.scss'

// Temporary data
const data = [
    {
        id: "playlist name 01",
        slug: "playlist-name-01"
    },
    {
        id: "playlist name 02",
        slug: "playlist-name-02"
    },
    {
        id: "playlist name 03",
        slug: "playlist-name-03"
    },
    {
        id: "playlist name 04",
        slug: "playlist-name-04"
    }
]


export default function NavegationBar () {
    return (
        <nav className={styles.navegationBar}>
            <h1><MusicNotes />MusicApp</h1>
            <ul className={styles.linksContainer}>
                <li>
                    <Link href={'/'}>
                        <a><House />Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/buscar'}>
                        <a><MagnifyingGlass />Buscar</a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.linksContainer}>
                <li>
                    <Link href={'/buscar'}>
                        <a><Heart />Curtidas</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/buscar'}>
                        <a><Books />Sua Biblioteca</a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.linksContainer}>
                <li>
                    <Link href={'/buscar'}>
                        <a><Playlist />Criar Playlist</a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.playlistsContainer}>
                {data.map(playlist => {
                    return(
                        <li>
                            <Link href={`/${playlist.slug}`}>
                                <a >{playlist.slug}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}