// UserIdContext.js
"use client";

import React, { createContext, useState } from "react";

export const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [idFromUseContext, setIdFromUseContext] = useState("");

  
  

  return (
    <UserIdContext.Provider value={{ idFromUseContext, setIdFromUseContext }}>
      {children}
    </UserIdContext.Provider>
  );
};

export default UserIdProvider;
