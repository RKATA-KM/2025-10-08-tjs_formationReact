import React from 'react'
import UnconnectedMemeForm from './MemeForm' 
import { useDispatch, useSelector } from 'react-redux'
import {update} from '../../../store/current'
import {saveMeme} from '../../../store/asyncCaller'


export const MemeForm = (props) => {

    const images=useSelector(storeState=>storeState.ressources.images);
    const meme = useSelector(storeState=>storeState.current.meme);
    const dispatch=useDispatch();
    return <UnconnectedMemeForm {...props} images={images} meme={meme} onMemeChange={(newMeme)=>{
        dispatch(update(newMeme))
    }}
    onMemeSave={(newMeme)=>{
        dispatch(saveMeme(newMeme))
    }}
    
    />;
}


export default MemeForm