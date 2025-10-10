import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer, { update } from "./current";
import ressourceReducer from "./ressource";
import { emptyMeme } from "orsys-tjs-meme";



const store = configureStore({
  reducer: combineReducers({
    current: currentReducer,
    ressources: ressourceReducer,
  }),
});
store.dispatch(update({...emptyMeme,x:50}))


export default store;

store.subscribe(()=>{
    console.trace(store.getState())
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;