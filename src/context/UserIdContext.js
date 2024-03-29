// UserIdContext.js
"use client";

import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [userIdFromContext, setUserIdFromContext] = useState(null);
  const [chatIdFromContext, setChatIdFromContext] = useState(null);

  useEffect(() => {
    // Check if the user ID exists in cookies
    const userIdFromCookie = Cookies.get("userId");
    if (userIdFromCookie) {
      setUserIdFromContext(userIdFromCookie);
    }
  }, []);

  const setUserIdContext = (userId) => {
    setUserIdFromContext(userId);
    // Store the user ID in cookies
    Cookies.set("userId", userId, { expires: 365 }); // Set expiry to 1 year
  };
  const setChatIdContext = (chatId) => {
    setChatIdFromContext(chatId);
    // Store the user ID in cookies
    // Cookies.set("chatId", chatId, { expires: 1 }); // Set expiry to 1 year
  };

  const removeUserId = () => {
    setUserIdFromContext(null);
    Cookies.remove("userId");
  };

  return (
    <UserIdContext.Provider
      value={{
        userIdFromContext,
        chatIdFromContext,
        setUserIdContext,
        removeUserId,
        setChatIdContext,
      }}
    >
      {children}
    </UserIdContext.Provider>
  );
};

export default UserIdProvider;
