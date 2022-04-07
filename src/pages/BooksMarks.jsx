import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../jotai/Atoms";
import { db } from "../firebase.config";
import Card from "../components/shared/Card";
const BooksMarks = () => {
  const auth = getAuth();
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  useEffect(() => {
    const getBookmarks = async () => {
      const bookmarksRef = collection(db, "bookmarks");
      const q = query(
        bookmarksRef,
        where("userRef", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const bookmarks = [];
      querySnapshot.forEach((doc) => {
        return bookmarks.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setBookmarks(bookmarks);
    };
    getBookmarks();
  }, [auth.currentUser.uid, setBookmarks]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-wrap flex-col items-center z-50  "
    >
      <div className="animate-bounce absolute bottom-1/4 text-center">
        <h1 className="text-white font-bold text-6xl">SCROLL FOR BOOKMARKS</h1>
        <br />
        <h1 className="text-white font-bold text-6xl">▼</h1>
      </div>
      {bookmarks &&
        bookmarks.map((bookmark, index) => {
          return (
            <div
              key={index}
              className="bg-slate-700 text-white flex flex-col w-3/5 p-2 m-4 rounded-xl "
            >
              <h3 className=" font-serif text-base font-bold m-4">
                {bookmark.data.link.title}
                <Card key={index} className=" w-full flex p-1 rounded ">
                  <div className="w-full flex md:flex-nowrap sm:flex-wrap">
                    <img
                      className="h-40 w-60 m-4 rounded"
                      src={bookmark.data.link.urlToImage}
                      alt="article"
                    />
                    <p className="m-4">
                      {bookmark.data.link.description &&
                        bookmark.data.link.description.substring(0, 150)}
                      ...
                    </p>
                  </div>
                  <div className="h-100 flex flex-col items-center justify-around">
                    <button className="rounded m-4 p-0.25 bg-red-700 w-32 h-12">
                      <a href={bookmark.data.link.url}>Know More</a>
                    </button>
                  </div>
                </Card>
              </h3>
            </div>
          );
        })}
    </motion.div>
  );
};

export default BooksMarks;
