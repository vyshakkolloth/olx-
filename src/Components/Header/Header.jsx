import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/Context";
function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSignout = () => {
    const auth = getAuth(firebase);

    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const loginUser=()=>{
  
    navigate('/login');
  }

  const loadHome=()=>{
    navigate('/');
  }
  const selloption=()=>{
    navigate('/create');
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={loadHome} className="brandName">
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        {user && <span >Welcome {user.displayName}</span>}
       {!user && <span style={{ cursor: "pointer" }} onClick={loginUser}>Login</span>}
          <hr />
        </div>
        {user && (
          <span style={{ cursor: "pointer" }} onClick={handleSignout}>
            Logout
          </span>
        )}

        <div onClick={selloption} className="sellMenu">
          <SellButton></SellButton>
          <div  className="sellMenuContent">
            <SellButtonPlus ></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
