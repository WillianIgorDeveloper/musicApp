import { useRouter } from "next/router"

export default function Playlist () {
    const router = useRouter().query.id
    
    return(
        <div className="mainContentTemp">
            <h1>{router}</h1>
        </div>
    )
}