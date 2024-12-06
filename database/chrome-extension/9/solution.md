###### Milestone 9 Solution


**Popup.jsx** final code

```javascript
import React, { useEffect, useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [excludedDomains, setExcludedDomains] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

  const [category, setCategory] = useState('javascript');


  const handleSubmit = () => {
    const newExcludedDomains = [...excludedDomains, url];
    setExcludedDomains(newExcludedDomains);

    chrome.storage.local.set({ excludedDomains: newExcludedDomains });
  };

  const handleCategory = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);

    chrome.storage.local.set({ category: newCategory });
  };

  const handleRemoveUrl = (urlToRemove) => {
    const newExcludedDomains = excludedDomains.filter((url) => url !== urlToRemove);
    setExcludedDomains(newExcludedDomains);


    chrome.storage.local.set({ excludedDomains: newExcludedDomains });
  };


useEffect(() => {
    chrome.storage.local.get(['excludedDomains', 'isEnabled', 'category'], function (result) {
      setExcludedDomains(result.excludedDomains || []);
      setIsEnabled(result.isEnabled);
      setCategory(result.category || 'javascript');


    });
  }, []);

  const handleToggle = () => {
    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);

    chrome.storage.local.set({ isEnabled: newIsEnabled });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="toggle-switch">
          <label className="switch">
            <input type="checkbox" checked={isEnabled} onChange={() => {
              handleToggle();
            }} />
            <span className="slider round">
              {isEnabled ? 'On' : 'Off'}
            </span>
          </label>
        </div>

        <select value={category} onChange={handleCategory}>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="react">React</option>
          <option value="techy">Techy</option>
        </select>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Website URL"
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {excludedDomains.map((blockedUrl) => (
            <div key={blockedUrl}>
              {blockedUrl}
              <button onClick={() => handleRemoveUrl(blockedUrl)}>x</button>
            </div>
          ))}
        </ul>


      </header>
    </div>
  );
};

export default Popup;

```

<br>

**index.js** final code  
_Don't forget to refresh the plugin manually when doing changes to index.js_

```javascript
console.log("Background log");

// When the extension is installed, set default values.
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({
        isEnabled: true,
        category: 'react',
        excludedDomains: ['stackoverflow'],
    });
});

let domainChangeCounter = 0;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const url = new URL(changeInfo.url);
    const domain = url.hostname;

    if (changeInfo.url) {
        chrome.storage.local.get(['excludedDomains', 'isEnabled'], function (result) {
            if (!result.isEnabled) {
                console.log("Extension is OFF!");
                return;
            }

            if (result.excludedDomains.includes(domain)) {
                console.log("Domain is in the excludedDomains list");
                return;
            }

            domainChangeCounter++;

            if (domainChangeCounter === 10) {
                chrome.tabs.update(tabId, {
                    url: chrome.runtime.getURL('newtab.html'),
                });
                domainChangeCounter = 0;
            }
        });
    }
});

```

<br>

**Newtab.jsx** final code
```javascript
import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    // Load the current category from chrome storage
    chrome.storage.local.get(['category'], function (result) {

      const currentCategory = result.category
      fetch('https://65-109-237-244.nip.io/api/quiz')
        .then(response => response.json())
        .then(data => {
          // Filter the questions based on the current category
          const filteredData = data.filter(question => question.category === currentCategory);

          // Select a random question from the filtered data
          const randomIndex = Math.floor(Math.random() * filteredData.length);

          // Set the question state to the random question
          setQuestion(filteredData[randomIndex].question);
        });
    });
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
