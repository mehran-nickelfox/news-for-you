import { atom } from "jotai";

export const newsAtom = atom([]);
export const scrollAtom = atom(false);
const key = process.env.REACT_APP_NEWS_API;
const urlAtom = atom(
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=2207cb0d3da34c0589ff1bcef4f3dfe1F`
);
export const fetchUrlAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  const data = await response.json();
  return data;
});
export const authAtom = atom(false);
export const bookmarksAtom = atom();
