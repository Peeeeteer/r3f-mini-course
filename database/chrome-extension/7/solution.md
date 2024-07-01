###### Milestone 7 Solution

**Popup.jsx** final code.

```javascript

import React, { useEffect, useState } from 'react';
import './Popup.css';


const Popup = () => {
  const [url, setUrl] = useState('');
  const [excludedDomains, setExcludedDomains] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

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

  // Load excludedDomains from chrome storage on component mount
  useEffect(() => {
    chrome.storage.local.get(['excludedDomains', 'isEnabled'], function (result) {
      setExcludedDomains(result.excludedDomains || []);
      setIsEnabled(result.isEnabled);

    });
  }, []);
 
  const handleToggle = () => {
    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);

    // Save the updated isEnabled to chrome storage
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

**index.js** final code
```javascript
console.log("Background log");


let domainChangeCounter = 0;


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  // Extract the domain from the URL, console log changeInfo to see how it looks
  const url = new URL(changeInfo.url);
  const domain = url.hostname;

  // If the url changes...we do something
  if (changeInfo.url) {

    chrome.storage.local.get(['excludedDomains', 'isEnabled'], function (result) {
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

**Tip 💡**   
Refresh the plugin manually when making changes to index.js.
<img src="/chrome-extension/image6.png" alt="index.js" width="960" height="540">
