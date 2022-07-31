import { useEffect, useState } from 'react'
import './styles.css'

export const ImageProfile = ({ imageName }) => {

    const [image, setImage] = useState()

    useEffect(() => {
        setImage(require(`../../../temp/profiles/${imageName}`))
    }, [imageName])

    return <img className='img-profile' src={image} aria-hidden alt={"Image profile"} />
}