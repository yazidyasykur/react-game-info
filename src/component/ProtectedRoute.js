import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = () => {
  const unsubscribe = auth.onAuthStateChanged;

  const user = auth.currentUser;

  console.log(user);
  console.log(unsubscribe);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
    }
  }, []);

  return <></>;
};

export default ProtectedRoute;
