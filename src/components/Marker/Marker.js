import React from "react";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import marks from "../../assets/images/bookmark.png";
const Marker = (props) => {
  const { link } = props;
  const auth = getAuth();

  const onBookMark = async () => {
    const newsData = {
      link,
      userRef: auth.currentUser.uid,
    };
    try {
      // eslint-disable-next-line no-unused-vars
      const docRef = addDoc(collection(db, "bookmarks"), newsData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button>
        <img src={marks} alt="bokmark" onClick={onBookMark} />
      </button>
    </div>
  );
};

export default Marker;
