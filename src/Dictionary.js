import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setkeyword] = useState("");
    
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event) {
        setkeyword(event.target.vaule);
    }


    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )  
}