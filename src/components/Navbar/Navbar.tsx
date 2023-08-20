// import React, { useEffect, useState } from "react";
// import { connectWallet, getAccount } from "../../utils/wallet";

// const Navbar: React.FC = () => {
//   const [account, setAccount] = useState<string>("");

//   useEffect(() => {
//     (async () => {
//       // TODO 5.b - Get the active account
//       const account=await getAccount();
  
//       setAccount(account);
//     })();
//   }, []);

//   // TODO 4.a - Complete onConnectWallet function
//   const onConnectWallet = async () => {
//     await connectWallet();
//     const account=await getAccount();
//     setAccount(account);
//   };

//   return (
   
//     <div className="navbar navbar-dark bg-dark fixed-top">
//       <div className="container py-2">
//         <div>
//         <a href="/" className="navbar-brand">
//           Tezos Lottery
//         </a></div>
//         <div>
//         <a href="/" className="navbar-brand">
//       Our Products
//         </a></div>
//         <div className="d-flex">
//           {/* TODO 4.b - Call connectWallet function onClick  */}
//           <button  onClick={onConnectWallet} className="btn btn-outline-info">
//             {/* TODO 5.a - Show account address if wallet is connected */}
//             {account?account:"Connect Wallet"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon  from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Navbar.scss";


const Navbar = () => {
  return (
<div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/en.png" height="50px" width="50px" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Tech</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Sneakers</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Art</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">Transparent Store</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Navbar

