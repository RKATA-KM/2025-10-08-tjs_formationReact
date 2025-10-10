import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR, REST_RESSOURCES } from "../config/constante.js";
import type { MemeInterface } from "orsys-tjs-meme";

export const loadRessources = createAsyncThunk(
  "ressources/loadRessources",
  async () => {
    const pri = fetch(`${REST_ADR}${REST_RESSOURCES.images}`);
    const prm = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`);
    const prall = await Promise.all([pri, prm]);
    return { images: await prall[0].json(), memes: await prall[1].json() };
  }
)
export const saveMeme = createAsyncThunk(
  "ressources/saveMeme",
  async (meme:MemeInterface) => {
    const prSave = await fetch(`${REST_ADR}${REST_RESSOURCES.memes}${undefined !==meme.id?"/"+meme.id:""}`,{
      method:undefined !==meme.id?"PUT":"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(meme)
    });
    return await prSave.json();
  }
);
