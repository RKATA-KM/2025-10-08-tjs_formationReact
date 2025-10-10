import React from 'react'
import UnconnectedMemeForm from './MemeForm' 
import { useSelector } from 'react-redux'


export const MemeForm = (props) => {

    const images=useSelector(storeState=>storeState.ressources.images)
    const meme = useSelector(storeState=>storeState.current.meme)
    return <UnconnectedMemeForm {...props} images={images} meme={meme}/>;
}


export default MemeForm