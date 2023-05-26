import React from "react"
import ReactDOM from "react-dom"
import Info from "./info"
import About from "./about"
import Intrests from "./intrests"

function BusinessCard(){
    return(
        <div className = "bcard">
            <Info />
            <About />
            <Intrests />
        </div>
    )
}
ReactDOM.render(<BusinessCard />, document.getElementById("root"))