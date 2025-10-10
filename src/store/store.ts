import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer, { update } from "./current";
import ressourceReducer from "./ressource";
import { emptyMeme } from "orsys-tjs-meme";
import { loadRessources } from "./asyncCaller";



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
store.dispatch(loadRessources())

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;