import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
    return (
    <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
            return (
            <div key={index}>
            <Phonetics phonetic={phonetic} />
            </div>
        );
        })}
        </section>
        <section>
        {props.results.meanings.map(function (meaning, index) {
            return (
            <div key={index}>
            <Meaning meaning={meaning} />
            </div>
        );
        })}
        </section>
    </div>
    );
} else {
    return null;
}
}