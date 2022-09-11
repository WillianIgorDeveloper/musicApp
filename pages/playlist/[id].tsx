import { useRouter } from "next/router"

export default function Playlist () {
    const router = useRouter().query.id
    
    return(
        <>
            <h1>{router}</h1>
        </>
    )
}