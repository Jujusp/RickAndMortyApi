import { useEffect, useState } from 'react'
import Card from './Card'

function Gallery() {
    const [characters, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const result = await (
                await fetch('https://rickandmortyapi.com/api/character')
            ).json()
            return result
        }
        getData()
            .then((dt) => setData(dt))
            .catch((e) => {
                throw e
            })
    }, [])

    return (
        <div className=' row row-cols-1 row-cols-md-2 g-4'>
            {characters &&
                characters.results.map((character, index) => (
                    <Card
                        key={index}
                        gender={character.gender}
                        name={character.gender}
                        status={character.status}
                        src={character.image}
                    />
                ))}
        </div>
    )
}

export default Gallery
