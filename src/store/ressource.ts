import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import {memes,images}from '../../db/db.json'

interface IRessourcesState{
    memes:Array<MemeInterface>
    images:Array<ImageInterface>
}


const initialState:IRessourcesState = {
  memes: memes,
  images: images,
};

const ressource = createSlice({
  name: 'ressources',
  initialState,
  reducers: {}
});

//export const {} = ressource.actions
const ressourceReducer=ressource.reducer;
export default  ressourceReducer