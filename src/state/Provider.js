import React, { useReducer } from "react";
import Context from "./Context";

function Provider({ children }) {
  return (
    <AuthContext.Provider value={{ }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Provider;