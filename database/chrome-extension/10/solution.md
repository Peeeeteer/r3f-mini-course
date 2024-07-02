###### Milestone 10 Solution


**index.js** final code
_Don't forget to refresh the plugin manually when doing changes to index.js_

```javascript

console.log("Background log");
let domainChangeCounter = 0;

// When the extension is installed, set default values.
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({
    isEnabled: true,
    category: 'react',
    excludedDomains: ['stackoverflow'],
    domainChanges: 10,
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  // Extract the domain from the URL, console log changeInfo to see how it looks
  const url = new URL(changeInfo.url);
  const domain = url.hostname;

  // If the url changes...we do something
  if (changeInfo.url) {

    chrome.storage.local.get(['excludedDomains', 'isEnabled', 'domainChanges'], function (result) {

      console.log(result.isEnabled);

      if (!result.isEnabled) {
        return; // If the extension is disabled, exit the function
      }

      // If there are no domains in your list, it will be undefined and brake everything. (We will fix it later. )
      if (result.excludedDomains.includes(domain)) {

        console.log("Domain is in the excludedDomains list");
        return; // If the domain is in the excludedDomains list, exit the function
      }

      // Increment the domainChangeCounter
      domainChangeCounter++;

      console.log("Domain change detected: ", domainChangeCounter);
      console.log("When we reach : ", result.domainChanges, 'show quiz');

      // Only change made here.
      // Get the domainChanges value from chrome storage and compare it with domainChangeCounter
      const domainChanges = result.domainChanges || 10; // Default to 10 if no domainChanges is stored

      if (domainChangeCounter >= domainChanges) {
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

**Popup.jsx** final code  

```javascript
import React, { useEffect, useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [excludedDomains, setExcludedDomains] = useState([]);

  const [isEnabled, setIsEnabled] = useState(true);
  const [category, setCategory] = useState('javascript');

  // Add a new state variable
  const [domainChanges, setDomainChanges] = useState(10);

  // Load excludedDomains from chrome storage on component mount
  useEffect(() => {
    chrome.storage.local.get(['excludedDomains', 'isEnabled', 'category', 'domainChanges'], function (result) {
      setExcludedDomains(result.excludedDomains || []);
      setIsEnabled(result.isEnabled);
      setCategory(result.category || 'javascript');


      // Do something here.
      setDomainChanges(result.domainChanges || 10);

    });
  }, []);


  const handleSubmit = () => {
    const newExcludedDomains = [...excludedDomains, url];
    setExcludedDomains(newExcludedDomains);

    // Save the updated excludedDomains to chrome storage
    chrome.storage.local.set({ excludedDomains: newExcludedDomains });
  };


  const handleRemoveUrl = (urlToRemove) => {
    const newExcludedDomains = excludedDomains.filter((url) => url !== urlToRemove);
    setExcludedDomains(newExcludedDomains);

    // Save the updated excludedDomains to chrome storage
    chrome.storage.local.set({ excludedDomains: newExcludedDomains });
  };


  const handleToggle = () => {
    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);


    // Save the updated isEnabled to chrome storage
    chrome.storage.local.set({ isEnabled: newIsEnabled });
  };


  const handleCategory = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    // Save the updated category to chrome storage
    chrome.storage.local.set({ category: newCategory });
  };


  const handleSliderChange = (event) => {

    // Update the domainChanges state variable

    const newDomainChanges = event.target.value;
    setDomainChanges(newDomainChanges);
    // Save the updated domainChanges value to chrome storage
    chrome.storage.local.set({ domainChanges: newDomainChanges });
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
          <option value="techy">Tech Questions</option>
        </select>

        <input
          type="range"
          min="10"
          max="50"
          value={domainChanges}
          onChange={handleSliderChange}
        />
        <span>{domainChanges}</span>


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

