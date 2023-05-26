import React from "react"

export default function Info(){
    return(
        <div className = "info">
            <img className = "image" src= "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
            <div className = "infodata">
                <h2 className ="name"> Veekshita Naidu </h2>
                <h4 className ="infoRole" > Frontend Developer </h4>
                <h4 className = "infoWeb" > veeks.website </h4>
            </div>
            <div className = "buttons">
                <button className = "email">
                Email
                </button>
                <button className = "LinkedIn">
                LinkedIn</button>
            </div>
            
        </div>
    )
}