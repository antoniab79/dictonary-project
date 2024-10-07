import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }

    function handleImagesResponse(response) {
       setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        const sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=1e5e2f20350d3toa44fe9d489eb954a7`;
        axios.get(sheCodesApiUrl).then(handleImagesResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();  
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
        <div className="Dictionary">
            <section>
            <h1>Type to look up any word!</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
            </form>
            <div className="hint">
                Suggested words: yoga, tennis, sunset, beach...
            </div>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
    );  
} else {
    load();
    return "Loading";
}
}