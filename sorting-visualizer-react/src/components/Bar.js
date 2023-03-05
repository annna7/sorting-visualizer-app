import React from "react";
import "./Bar.css";

const Bar = ({height}) => {
    return <div className="bar" style={{height: `${height}%`}}></div>;
    // style={{height: `${height}px`}}
}

export default Bar;