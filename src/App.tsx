import React, { useState, useEffect } from "react";

// Components

import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { BrowserRouter, Outlet } from "react-router-dom";
import { createBrowserRouter,RouterProvider,Route } from "react-router-dom";
const Layout=()=>{
  return(<div className="app"><Navbar/><Outlet/><Footer/></div>)
}
const router=createBrowserRouter(

  [

    {path:"/",
    element:<Layout/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"/category/:id",
      element:<Category/>
    },
    {
      path:"/products/:id",
      element:<Products/>
    },
    ]
 
    }
  ]
)

import { buyTicketOperation, endGameOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App: React.FC = () => {
  // Players holding lottery tickets
  const [players, setPlayers] = useState<string[]>([]);
  const [tickets, setTickets] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    const fetchData = async () => {
      const storage=await fetchStorage();
      setPlayers(Object.values(storage.players));
      setTickets(storage.tickets_available);
      
    };

    fetchData();
  }, []);

  // TODO 7.a - Complete onBuyTicket function
  const onBuyTicket = async () => {
    try{

setLoading(true);
await buyTicketOperation();
alert("Bought A Ticket");
    }
    catch(error){
throw error;
    }
    setLoading(false);
  //  await buyTicketOperation()

  };

  // TODO 11.a - Complete onEndGame function
  const onEndGame = async () => {
    try{
setLoading(true);
await endGameOperation();
alert("Game has Ended");
    }
    catch(error){
throw error;
    }
    setLoading(false);
  };

  return (
    <div>
     
      < RouterProvider router={router}/>
    </div>
  );
};

export default App;
