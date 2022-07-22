// import React, { Fragment, useEffect } from "react";
// import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
// import Loader from "../layout/Loader/Loader";
// import { Link } from "react-router-dom";
// import "./Profile.css";
// import UserProducts from "./UserProducts";
// import ProfileImg from "../../Assets/Profile.png";

// const Profile = ({ history }) => {
//   // const {  loading, isAuthenticated } = useSelector((state) => state.user);

//   const user = {
//     name: "user 1 ",
//     email: "abc@gmail.com",
//     phoneNo: 1234567890,
//     rollNo: 19035029,
//     linkedin: "https://linkedin.com",
//     createdAt: "date",
//     products: [],
//   };

//   //  useEffect(() => {
//   //     // if (isAuthenticated === false) {
//   //     //   history.push("/login");
//   //     // }

//   //   }, [history, isAuthenticated]);
//   return (
//     <Fragment>
//       {false ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title={`${user.name}'s Profile`} />
          
//         <div className="profileMainContainer">
//           <div className="profileSection">
//             <div className="profileHeader">
//               <img
//                 src={ProfileImg}
//                 alt="profile Image"
//                 className="profileImage"
//               />
//              <div className="profileName" >
//               Piyush lohiya
//               <p>IIT (BHU) varansi</p>
//              </div>
//             </div>
//             <div className="profileDetails">
//              <div><h4>linkedIn:</h4>  https://linkedin.com</div>
//              <div><h4>instagram:</h4>  https://linkedin.com</div>
//              <div><h4>twitter:</h4>  https://linkedin.com</div>
//              <div><h4>Roll No:</h4>  https://linkedin.com</div>
//              <div><h4>Phone No:</h4>  https://linkedin.com</div>


//             </div>
//           </div>
//           <div>
//             <button onClick={()=>{history.push("/createproduct")}}>Add Product</button>
//           </div>
//           <div className="productsSection">
//             <UserProducts />
//           </div>
//           </div>  
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Profile;




import React, { Fragment, useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
    getUserDetails,
    updateUser,
    clearErrors,
  } from "../../actions/userAction";
import { useAlert } from "react-alert";




// const user = {
//       name: "user 1 ",
//       email: "abc@gmail.com",
//       phoneNo: 1234567890,
//       rollNo: 19035029,
//       linkedin: "https://linkedin.com",
//       github: "https://github.com",

//       createdAt: "date",
//       products: [],
//     };
const Profile = ({ history , match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();
  
    const { loading, error, user } = useSelector((state) => state.userDetails);
  
    const {
      loading: updateLoading,
      error: updateError,
      isUpdated,
    } = useSelector((state) => state.profile);
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
  
    const userId = match.params.id;
  
    useEffect(() => {
      if (user && user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
      }
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
    //   if (updateError) {
    //     alert.error(updateError);
    //     dispatch(clearErrors());
    //   }
  
    //   if (isUpdated) {
    //     alert.success("User Updated Successfully");
    //     history.push("/admin/users");
    //     dispatch({ type: UPDATE_USER_RESET });
    //   }
    }, [dispatch, alert, error,user, userId]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>{user.name} Profile</h1>
              <img src={user?.avatar?.url} alt={user.name} />
          
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Roll No</h4>
                <p>{user.rollNo}</p>
              </div>
              <div>
                <h4>phone No</h4>
                <p>{user.phoneNo}</p>
              </div>
              <div>
                <h4>Social Link</h4>
               <div className="socialLinks">
               <a href={user.github} style={{color:user.github?"#0ba968":"grey"}}> <GitHubIcon style={{fontSize:"28px"}}/></a>
               <a href={user.instagram} style={{color:user.instagram?"#0ba968":"grey"}}>  <InstagramIcon style={{fontSize:"28px"}}/></a>
               <a href={user.linkedIn} style={{color:user.linkedIn?"#0ba968":"grey"}}>  <LinkedInIcon style={{fontSize:"28px"}}/></a>
               </div>
              </div>

              
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;

