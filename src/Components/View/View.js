import React,{useEffect,useContext,useState} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { firebaseContext } from '../../store/Contexts';

function View() {
  const [userDetails, setUserDetails] = useState();
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(firebaseContext);
  useEffect(() => {
    const {userId}= postDetails?postDetails:'';
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach((doc)=>{
        console.log(doc.data());
        setUserDetails(doc.data())
      })
    }).catch(err=>{
      console.log(err.message);
    })
  
  }, [])
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?postDetails.url:''}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?postDetails.price:''} </p>
          <span>{postDetails?postDetails.name:''}</span>
          <p>{postDetails?postDetails.category:''}</p>
          <span>{postDetails?postDetails.createdAt:''}</span>
        </div>
        {
        userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>  
        </div>
        }
      </div>
    </div>
  );
}
export default View;
