import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { authAtom } from "../../jotai/Atoms";
import { useAtom } from "jotai";
import { db } from "../../firebase.config";
import googleIcon from "../../assets/images/googleIcon.svg";
const OAuth = () => {
  const navigate = useNavigate();
  const [, setUser] = useAtom(authAtom);

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
        });
      }
      navigate("/news");
      setUser(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center space-y-6 absolute top-1/2 text-white font-bold text-6xl h-12 w-full"
    >
      <h3>Sign In Using Google:</h3>
      <button className="py-6 px-6 rounded-full bg-white animate-bounce" onClick={onGoogleClick}>
        <img className="w-12" src={googleIcon} alt="Google" />
      </button>
    </motion.div>
  );
};

export default OAuth;
