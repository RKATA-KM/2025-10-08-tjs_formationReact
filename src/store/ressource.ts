import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import {memes,images}from '../../db/db.json'
import { loadRessources } from './asyncCaller';

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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadRessources.fulfilled,(state,action)=>{
      state.memes=action.payload.memes;
      state.images=action.payload.images;
    })
  },
});

//export const {} = ressource.actions
const ressourceReducer=ressource.reducer;
export default  ressourceReducer