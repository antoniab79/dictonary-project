import React from "react";
import "./Phonetic.css"

export default function Phonetics(props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="blank">Listen</a>
            <span className="text">{props.phonetic.text}</span>
        </div>
        
    );
}