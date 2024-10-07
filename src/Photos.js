import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <div className="Photos">
                <div className="row">
                {props.photos.map(function (photo, index) {
                    return (
                    <div className="col-4" key={index}>
                        <a href={photo.url} target="_blank" rel="noreferrer">
                         <img src={photo.src.landscape} alt={photo.alt}
                         className="img-fluid" /> 
                         </a>
                         <p>
                            Photo by{" "}
                            <a
                            href={photo.photographer_url}
                            target="_blank"
                            rel="noreferrer"
                            >
                                {photo.photographer}
                            </a>
                            </p>
                    </div>
                    );
                })}
                </div>
            </div>
        );
} else {
    return null;
}
}