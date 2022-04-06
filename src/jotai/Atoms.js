import { atom } from "jotai";

const key = process.env.REACT_APP_NEWS_API;
const urlAtom = atom(
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
);

export const fetchUrlAtom = atom(async(get) => {
    const response = await fetch(get(urlAtom));
    const data = await response.json();
    return data;
})

export const authAtom = atom(false);
