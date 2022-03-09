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
    const [maxDistance, setMaxDistance] = useState()
    const [textarea, setTextarea] = useState
    (
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n" +
        "there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,\n" +
        "a large language ocean. A small river named Duden flows by their place and supplies it with the necessary\n" +
        "regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n" +
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life\n" +
        "One day however a small line of blind text by the name of Lorem Ipsum decided to die."
    )
    const [output, setOutput] = useState("")

    function buttonhandler() {

    }

    return (
        <>
            <h1>Levenshtein Distance</h1>
            <div className={"felder"}>
                <div className={"feld"}>
                    <h2>Word 1</h2>
                    <input type={"text"} onChange={(event) => setInput(event.target.value)}></input>
                    <br/>
                    <h2>Distance</h2>
                    <input type={"text"} onChange={(event) => setMaxDistance(event.target.value)}></input>
                    <br/>
                    <button onClick={buttonhandler}>calculate</button>
                </div>
                <div className={"feld"}>
                    <h2>Textfeld</h2>
                    <textarea title={"text field"}
                              onChange={(event) => {
                                  setTextArea(event.target.value)
                                }
                              }
                              value={textarea}>
                    </textarea>
                </div>
            </div>
            <div className={"felder"}>
                <div className={"feld"}>
                    <h2>statistics</h2>
                    <br/>
                    <p>Levenshtein Distance: {maxDistance}</p>
                </div>
            </div>
        </>
    );
}

export default App;
