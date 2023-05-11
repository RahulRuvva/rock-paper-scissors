/* eslint-disable default-case */
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [userChoice, setUserChoice] = useState('a')
  const [computerChoice, setComputerChoice] = useState('b')
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  }
  const generateComputerChoice = () => {
    const randomNum = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomNum)
    checkResult();
  }

  useEffect(() => {
    checkResult()
  },[generateComputerChoice] )
  const checkResult = () => {
  
    switch(userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setResult('You WIn')
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setResult('You loose!')
        break
      case 'rockrock':
      case 'scissorsscissors':
      case 'paperpaper':
        setResult('Tie')
        break
    }
  }
  

  return (
    <div className="App">
      <h1>User Choice {userChoice}</h1>
      <h1>Computer Choice {computerChoice}</h1>
      {choices.map((choice, index) =>
       <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
      <h1>{result}</h1>
    </div>
  );
}

export default App;  