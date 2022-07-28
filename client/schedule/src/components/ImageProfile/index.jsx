import { useEffect, useState } from 'react'
import './styles.css'

export const ImageProfile = ({ imageName }) => {

    const [image, setImage] = useState()

    //setImage(window.URL.createObjectURL(`../../../temp/profiles/${imageName}`))

    useEffect(() => {
        setImage(require(`../../../temp/profiles/${imageName}`))
    }, [])

    return <img className='img-profile' src={image} aria-hidden alt={"Image profile"} />
}