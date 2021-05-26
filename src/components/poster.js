import * as React from "react"
import "../styles/poster.css"
import SVGMe from "../../public/images/undraw_programmer_imem.svg";

const Poster = () => (
    <div id="poster">
        <div>
            <div className="posterpin"></div>
            <div className="posterpin"></div>
        </div>
        <img src={SVGMe} alt="Programmer that happens to look like me"/>
        <span id="myName">Hannah Guo</span>
        <span>Student | Full-Stack Development</span>
    </div>
)

export default Poster