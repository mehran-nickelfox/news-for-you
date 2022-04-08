import { atom } from "jotai";

export const newsAtom = atom([]);
export const scrollAtom = atom(false);
const key = process.env.REACT_APP_NEWS_API;
const urlAtom = atom(
  `https://cors-anywhere.heroku.app.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`,
  { headers: new Headers({ "X-Requested-With": "XMLHttpRequest" }) }
);
export const fetchUrlAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  const data = await response.json();
  return data;
});
export const authAtom = atom(false);
export const bookmarksAtom = atom();
