import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar(){
 return(
 <div className="rightbar">
    <div className="rightbarWrapper">
      <div className="birthdayContainer">
         <img src="/assets/person/gift.png" alt="" className="birthdayImg" />
         <span className="birthdayText">
            <b>Inosuke Hashibira </b> and <b>3 other friends</b> have a birthday today.
         </span>
      </div>
      <img src="https://i.pinimg.com/564x/f3/63/e9/f363e969faf6cd5fb5848d3b43697870.jpg " alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
         {Users.map(u=>(
            <Online key={u.id} user={u} />
         ))}
      </ul>
    </div>
 </div>
 )
}
export default Rightbar;