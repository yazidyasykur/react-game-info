import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
    return unsubscribe;
  }, []);
};

export default ProtectedRoute;
