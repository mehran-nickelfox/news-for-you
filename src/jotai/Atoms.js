import { atom } from "jotai";

export const newsAtom = atom([]);

const key = process.env.REACT_APP_NEWS_API;

const urlAtom = atom(
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
);

export const fetchUrlAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  const data = await response.json();
  return data;
});

export const authAtom = atom(false);
export const userAtom = atom(
  (get) => get(authAtom),
  (get, set, _arg) => set(authAtom, get(authAtom(true)))
);

export const bookmarksAtom = atom(null);
