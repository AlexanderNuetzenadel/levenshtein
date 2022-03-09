import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

    const [inputWord1, setInputWord1] = useState('');
    const [inputWord2, setInputWord2] = useState('');

    const levenshteinDistance = (inputWord1 = '', inputWord2 = '') => {
        const track = Array(inputWord2.length + 1).fill(null).map(() =>
            Array(inputWord1.length + 1).fill(null));
        for (let i = 0; i <= inputWord1.length; i += 1) {
            track[0][i] = i;
        }
        for (let j = 0; j <= inputWord2.length; j += 1) {
            track[j][0] = j;
        }
        for (let j = 1; j <= inputWord2.length; j += 1) {
            for (let i = 1; i <= inputWord1.length; i += 1) {
                const indicator = inputWord1[i - 1] === inputWord2[j - 1] ? 0 : 1;
                track[j][i] = Math.min(
                    track[j][i - 1] + 1, // deletion
                    track[j - 1][i] + 1, // insertion
                    track[j - 1][i - 1] + indicator, // substitution
                );
            }
        }
        return track[inputWord2.length][inputWord1.length];
    }





  return (
    <div className="App">
      <h1>The very cool levenshtein algorithm</h1>

        <h4>Word 1:</h4>
        <input onChange={event => setInputWord1(event.target.value)} type="text" value={inputWord1} placeholder={'Set word to compare to'}/>

        <h4>Word 2:</h4>
        <input type="text" onChange={event => setInputWord2(event.target.value)} value={inputWord2} placeholder={'Set compared word'}/>
        <br/>

      <br/>

        <p>
            levenshteindistance: "levenshteinDistance(inputWord1, inputWord2)"
        </p>



    </div>
  );
}


export default App;

