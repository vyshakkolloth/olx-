import React, { Fragment, useState } from "react";
import { useContext } from 'react';
import { FirebaseContext,AuthContext } from '../../store/Context';
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";
import "./Create.css";
import Header from "../Header/Header";
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { db } from '../../firebase/config';


const Create = () => {

  const { fireBase,db} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const navigate=useNavigate()


  const [name, SetName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit=async(e)=>{

    e.preventDefault()

     const storage = getStorage(fireBase);
     const imageRef = ref(storage, `/images/${image.name}`);
     await uploadBytes(imageRef, image);
     const imageUrl = await getDownloadURL(imageRef);

     const firestore = getFirestore(fireBase);

     await addDoc(collection(db, 'products'), {
      name:name,
      category:category,
      price:price,
      imageUrl: imageUrl,
      userId: user.uid,
      createdAt: new Date().toDateString()
    });
navigate('/')
  }

  

  return (
    <Fragment>
      <Header />
      <card>
        
        <div className="centerDiv">
      
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              value={name}
              onChange={(e)=>SetName(e.target.value)}
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              type="number"
              id="fname"
              name="Price"
            />
            <br />
      
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
    
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
