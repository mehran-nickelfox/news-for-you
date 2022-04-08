import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../jotai/Atoms";
import { db } from "../firebase.config";
import Card from "../components/shared/Card";
import remove from "../assets/images/delete.png";
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
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "bookmarks", id));
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.2 } }}
      exit={{ x: window.innerWidth, transition: { duration: 5 } }}
      className="flex flex-wrap flex-col items-center z-50  "
    >
      <div className="animate-bounce absolute bottom-1/4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
          className="text-white font-bold text-6xl"
        >
          SCROLL FOR BOOKMARKS
        </motion.h1>
        <br />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
          className="text-white font-bold text-6xl"
        >
          ▼
        </motion.h1>
      </div>
      {bookmarks &&
        bookmarks.map((bookmark, index) => {
          return (
            <div
              key={index}
              className="bg-white text-white flex flex-col w-3/5 p-2 m-4 rounded-xl  "
            >
              <h3 className="font-serif font-bold text-xl m-4 text-red-700">
                {bookmark.data.link.title}
              </h3>
              <Card key={index} className=" w-full flex p-1 rounded  ">
                <div className="w-full flex md:flex-nowrap sm:flex-wrap">
                  <img
                    className="h-40 w-60 m-4 rounded"
                    src={bookmark.data.link.urlToImage}
                    alt="article"
                  />
                  <p className="m-4 font-serif text-black">
                    {bookmark.data.link.description === null ? (
                      <span className="font-serif font-bold text-xl">
                        Click Know More For Article
                      </span>
                    ) : (
                      bookmark.data.link.description.substring(0, 150)
                    )}
                    ...
                  </p>
                </div>
                <div className="h-100 flex flex-col items-center justify-around">
                  <button className="rounded m-4 p-0.25 bg-red-700 w-32 h-12">
                    <a href={bookmark.data.link.url}>Know More</a>
                  </button>
                  <button
                    className="rounded m-4 p-0.25 bg-red-700"
                    onClick={() => handleDelete(bookmark.id)}
                  >
                    <img className='w-8' src={remove} alt="delete" />
                  </button>
                </div>
              </Card>
            </div>
          );
        })}
    </motion.div>
  );
};

export default BooksMarks;
