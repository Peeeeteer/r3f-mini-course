###### Milestone 8 Solution 

**Newtab.jsx** final code:


```javascript
import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';


const Newtab = () => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch('https://65-109-237-244.nip.io/api/quiz')
      .then(response => response.json())

      .then(data =>
        setQuestion(data[0].question));

  }, []);


  const handleOptionClick = (option) => {
    if (option === question.correctAnswer) {
      alert('Correct answer!');
    } else {
      alert('Wrong answer. Try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quick yourself before you start browsing.
        </p>


        {question && (
          <div>
            <p>{question.question.text}</p>
            <p>{question.question.codeSnippet}</p>
            <div>
              {question.options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}


        <button className="button" onClick={() => {
          chrome.tabs.goBack();
        }}>
          Continue
        </button>
      </header>
    </div >
  );
};


export default Newtab;

```