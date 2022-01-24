import React, { createContext,useState,useEffect } from "react";
import axios from "axios";
const UserContext = createContext();
const UserDispatchContext = createContext();

function UserProvider({ children }) {
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        userID: "",
        cart: [],
        products: [],
    });
    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products')
          .then((response) => {
            setUserDetails((prevState)=>({
                ...prevState,
                products: response.data
            }));
          })
          if(userDetails.is_loggedin) {
            axios.get(`https://localhost:5000/api/cart/${userDetails.userID}`)
            .then((response)=>{
              setUserDetails((prevState)=>({
                  ...prevState,
                  cart:response.data
              }))
            })
          }
      }

      useEffect(()=>{
          getProducts();
      },[])
    return (
        <UserContext.Provider value={userDetails}>
            <UserDispatchContext.Provider value={setUserDetails}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext, UserDispatchContext };