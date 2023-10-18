import React, { useState } from "react";
import "./App.css";
import butcherPigImage from "./assets/butcherPig.jpeg";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [inputTranslated, setInputTranslated] = useState("");

  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ");
    console.log("arrayOfUserInput:", arrayOfUserInput);

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord);

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      eachWord = eachWord.toLowerCase()
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });
      console.log("vowelsArray:", vowelsArray);
      console.log(...vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      // Checking if the word starts with a vowel and adding "way" to the end if it does.
      if (
        eachWord[0] === "a" ||
        eachWord[0] === "e" ||
        eachWord[0] === "i" ||
        eachWord[0] === "o" ||
        eachWord[0] === "u"
      ) {
        eachWord = eachWord.concat("way");
        // Checking if the word starts with "qu" or if "qu" comes before the first vowell and then moving everything before the letter after "qu" to the end of the word and adding "ay".
      } else if (
        eachWord.indexOf("qu") < eachWord.indexOf(...vowelsArray) &&
        eachWord.indexOf("qu") !== -1
      ) {
        eachWord =
          eachWord.slice(eachWord.indexOf(...vowelsArray) + 1) +
          eachWord.slice(0, eachWord.indexOf(...vowelsArray) + 1) +
          "ay";
        // Checking if the only vowel in the word is "y" and moving everything from before the "y" to the end of the word and adding "ay".
      } else if (
        eachWord.indexOf(...vowelsArray) === -1 &&
        eachWord.indexOf("y") !== -1
      ) {
        eachWord =
          eachWord.slice(eachWord.indexOf("y")) +
          eachWord.slice(0, eachWord.indexOf("y")) +
          "ay";
        // If word meets no prior criteria, finding the first vowel and moving everything before the vowel to the end of the word and adding "ay".
      } else {
        eachWord =
          eachWord.slice(eachWord.indexOf(...vowelsArray)) +
          eachWord.slice(0, eachWord.indexOf(...vowelsArray)) +
          "ay";
      }
      return eachWord
    });

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords);

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords);
  };

  const restartGame = () => {
    setUserInput("");
    setInputTranslated("");
  };

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault();
    myPigLatinCodeHere();
  };

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Jacob, Jeffrey, & Corey</footer>
    </div>
  );
};

export default App;


// array = [1, 2, 3, 4, 5]
// array[0] "1"
// array[0], array[1], array[2], array[3], array[4] "1", "2", "3", "4", "5"
// ...array "1", "2", "3", "4", "5"
// ...array + ...array