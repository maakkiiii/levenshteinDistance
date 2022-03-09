import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track [j - 1][i] + 1, // insertion
                track [j - 1][i - 1] + indicator, // substitution
            );
        }
    }
    return track[str2.length][str1.length];
}

function App() {
    const [input, setInput] = useState("")
    const [input2, setInput2] = useState("")
    const [output, setOutput] = useState("")

    function buttonhandler() {
        let distance = levenshteinDistance(input, input2)
        setOutput(distance)
    }

    return (
        <>
            <h1>Levenshtein Distance</h1>
            <div className={"felder"}>
                <div className={"feld"}>
                    <h2>Word 1</h2>
                    <input type={"text"} onChange={(event) => setInput(event.target.value)}></input>
                    <br/>
                    <h2>Word 2</h2>
                    <input type={"text"} onChange={(event) => setInput2(event.target.value)}></input>
                    <br/>
                    <button onClick={buttonhandler}>calculate</button>
                </div>
            </div>
            <div className={"felder"}>
                <div className={"feld"}>
                    <h2>Infos</h2>
                    distance
                    <br/>
                    {output}
                </div>
            </div>
            <br/>
            
            <a href="levenshtein2.js">zu Aufgabe 4</a>
        </>
    );
}

export default App;
