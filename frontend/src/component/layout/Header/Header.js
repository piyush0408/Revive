// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

// export default Header;




// import React, { useState } from "react";
// import "./Header.css";

// import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink , Link} from "react-router-dom";

// const Header = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//            {/* hamburget menu start  */}
//            <div className="hamburger-menu">
            
//               <GiHamburgerMenu  onClick={() => setShowMediaIcons(!showMediaIcons)}/>
            
//           </div>
        
        
        
//         {/* 1st logo part  */}
//         <div className="logo">
//          <Link to="/" > 
//            <h2>
//             <span>E</span>commerce
//             <span>S</span>tore
//            </h2>
//         </Link>
//         </div>
        

//         {/* 2nd menu part  */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul>
//             <li>
//               <NavLink to="/products">Products</NavLink>
//             </li>
//             <li>
//               <NavLink to="/search">Search</NavLink>
//             </li>
//             <li>
//               <NavLink to="/account">Account</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* 3rd social media links */}
//         {/* <div className="social-media"> */}
//           {/* <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaFacebookSquare className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/thapatechnical/"
//                 target="_thapa">
//                 <FaInstagramSquare className="instagram" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaYoutubeSquare className="youtube" />
//               </a>
//             </li>
//           </ul> */}

         
//         {/* </div> */}
//       </nav>

//       {/* hero section  */}
//       {/* <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical</h1>
//       </section> */}
//     </>
//   );
// };

// export default Header;
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person";
import { Dropdown, Menu, Space, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";







const Header = () => {
  const history=useHistory();
  const alert = useAlert();
    const dispatch = useDispatch(); 
  const logoutHandler=()=>{
 
    dispatch(logout());
        alert.success("Logout Successfully");
  }
 
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Button
              style={{
                backgroundColor: " #0ba968",
                border: "1px solid  #0ba968",
              }}
              type="primary"
              // onClick={()=>showModal("type")}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          ),
        },
        {
          key: "2",
          label: (
            <Button
              type="primary"
              onClick={()=>history.push(`/account`)}
              style={{
                backgroundColor: " #0ba968",
                border: "1px solid  #0ba968",
              }}
            >
              Account
            </Button>
          ),
        },
      ]}
    />
  );
  
  


  return (
   <div className="headerBox">
       <div className="logo">
         <Link to="/">Revive</Link> 
       </div>
       <div>
       
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="personDropdown" >
             <PersonIcon className="personIcon" style={{fontSize:"24px"}}/>
            </Space>
          </a>
        </Dropdown>
       </div>
   </div>
  )
}
export default Header