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
    fetch('https://vdoqyjbnpwqkafxxssbb.supabase.co/rest/v1/questions?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkb3F5amJucHdxa2FmeHhzc2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzNzIyMTUsImV4cCI6MjAyNjk0ODIxNX0.luuvoKY-udlAaD83Qf5pElsetmXVwPetr6C-v5gpjDg')
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