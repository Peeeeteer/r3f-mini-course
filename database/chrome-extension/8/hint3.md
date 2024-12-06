###### Hint 3: Fill in the blanks

**Newtab.jsx** fill in the missing parts:

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

      // Make changes here
      .then(data =>
	      

        setQuestion()
      );

  }, []);

  const handleOptionClick = (option) => {

	  // Make changes here
    if () {
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
	
	      // Make changes here
        {question && (
          <div>
            <p>text</p>
            <p>codeSnippet</p>
            <div>
              {question.options.map((option, index) => (
         <button>
                  option
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