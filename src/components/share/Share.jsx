import React from "react";
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="https://th.bing.com/th/id/OIP.THPBARfvXFVqPpwDbrRl1wHaGx?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /> 
                    <input placeholder="Whats in your mind Zenitsuuu...?" className="shareInput"/>
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">
                                Photo or Video 
                            </span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor="gray" className="shareIcon"/>
                            <span className="shareOptionText">
                                Tag 
                            </span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">
                                Location 
                            </span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">
                                Feelings 
                            </span>
                        </div>

                    </div>
                    <button className="shareButton">Share</button>
                </div>

            </div>
        </div>
    )
}
export default Share;