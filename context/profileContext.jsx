'use client';

import { createContext, useState } from "react";

const ProfileContext = createContext();

function Provider({children}) {
  const [authentication, setAuthentication] = useState("0");

  const valueToShare = {
    authentication: authentication,
    setAuthentication: setAuthentication
  }

  return (
    <ProfileContext.Provider value={valueToShare}>
      {children}
    </ProfileContext.Provider>
  )
}

export {Provider}
export default ProfileContext