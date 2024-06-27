import React, { useState } from 'react';
import './Hangman.css';
import {randomWords} from './Words';

import step0 from './images/0.jpg';
import step1 from './images/1.jpg';
import step2 from './images/2.jpg';
import step3 from './images/3.jpg';
import step4 from './images/4.jpg';
import step5 from './images/5.jpg';
import step6 from './images/6.jpg';

const Hangman = () => {

        //number of wrong attempts allowed
        const maxWrong = 6;

        //setting the images
        const images = [step0, step1, step2, step3, step4, step5, step6];
        
        //keeping track of the number of mistakes
        const [mistake, setMistake] = useState(0);

        //setting the answer
        const [answer,setAnswer] = useState(randomWords());

        //if number of mistakes increase the number of mistakes allowed gameOver bcomes TRUE
        const gameOver = mistake >= maxWrong;

        //holds the entered letters in an array
        const [guessed,setGuessed] = useState([]);


        //will be active till gameover is false
        const guessedWord = () => {
            //checks if the letter is in the answer, if yes then it displays the letter else an underscore
            return answer.split("").map(letter => (guessed.includes(letter) ? letter : " _ "));

        }
        
        //enters the letters into the array
        const handleGuess = (e) => {
            let letter = e;
            
            setGuessed([...guessed,letter]);
            //increments mistake counter if there is a mistake 
            setMistake(mistake + (answer.includes(letter) ? 0 : 1))
            
        }

        //to generate buttons
        const generateButtons = () =>{

            return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
                <button class = "btn btn-lg btn-primary m-2" 
                key = {letter} 
                value={letter} 
                onClick={()=>handleGuess(letter)} 
                disabled={guessed.includes(letter)}>
                    {letter}
                    </button>
            ))
        }

        //the gamestate can have three phases 1) Where it displays the keyboard 2) Win message 3) Loss message
        let gameStat = generateButtons();

        //resets all the states 
        const resetButton = () =>{
            setMistake(0);
            setGuessed([]);
            setAnswer(randomWords());
        }

        //if the guessed word is equal to the answer
        const isWinner = guessedWord().join("") === answer

        if(isWinner){
            gameStat = "You Won !!!"
        }

        if (gameOver){
            gameStat = "You Lost!!!"
        }

  return (
    <div className='HangmanContainer'>
            
            <h1>Hangman</h1>
            <div className='top'>
                
                <div className="float-right"> Wrong Guesses : {mistake} of {maxWrong} </div>
                <div className="text-center">
                    <img src={images[mistake]} alt='hangmanStatus'/>
                </div>
            </div>
                <div className="hud">
                    <p>Guess the programming language: </p>
                    <p>
                        {!gameOver ? guessedWord() : answer}
                    </p>
                    <p>
                        {gameStat}
                    </p>
                    <button className="btn btn-info" onClick={resetButton}>Reset</button>
                </div>
    </div>
  )
}

export default Hangman
