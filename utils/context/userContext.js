import { createContext } from "react";

const UserContext = createContext(
  {
    user: {email : null},
    setUser: (user) => {},
  }
);

export default UserContext;