import React from "react";
import './bt3.css'

function ProfileCard() {
    return (
        <div className="container">
            <div className="card">
                <div className="card--header" />
                <img className="avatar" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" />
                <div className="card--body">
                    <div>
                        <p className="text-header">Vũ Nhật Nam</p>
                        <p className="text-sub">
                            This is my Profile Card
                        </p>
                        <button className="btn" >FOLLOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;