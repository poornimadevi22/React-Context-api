import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Home from "./Home";
import Products from "./File";


export const UsersContext = createContext();

function Datas() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!users?.length) {
      setUsers(Products) }
    }, [users]);
      // axios.get("src/Data/file.json") 
      //   .then((res) => {
      //     console.log("data", res.data.products);
      //     setUsers(res.data.products);
      //   })
      //   .catch((error) => console.error(error));
   

  const [count, setCount] = useState(0); 

  return (
    <UsersContext.Provider value={{ users, setUsers, count, setCount }}>
      <Home />
    </UsersContext.Provider>
  );
}

export default Datas;
