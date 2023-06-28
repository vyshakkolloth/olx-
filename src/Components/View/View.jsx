import React,{useContext,useState,useEffect} from 'react';
import { FirebaseContext } from '../../store/Context';
import {PostContext} from '../../store/postContext';
import { collection, getDocs, query, where } from "firebase/firestore";

import './View.css';
function View() {

  const[userDetails,setUserDetails]=useState()
  const{postDetails}=useContext(PostContext)
  const{firebase,db}=useContext(FirebaseContext)

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"), where("id", "==", postDetails.userId));
  
   
      querySnapshot.forEach((doc) => {
        if(doc.data().id==postDetails.userId){
          setUserDetails(doc.data());
        }
    
      })
  
     
    }
  
    fetchData();
  },[]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;  {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
          <p>{userDetails.email}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
