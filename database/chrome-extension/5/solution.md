###### Milestone 4. Solution 

**Popup.jsx** Final code.

```javascript
import React, { useEffect, useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [excludedDomains, setExcludedDomains] = useState([]);

  // Load excludedDomains from chrome storage on component mount
  useEffect(() => {
    chrome.storage.local.get(['excludedDomains'], function (result) {
      setExcludedDomains(result.excludedDomains || []);
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

  console.log(excludedDomains);
  return (
    <div className="App">
      <header className="App-header">
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

**index.js** Final code.

```javascript
console.log("Background log");

let domainChangeCounter = 0;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  // Extract the domain from the URL, console log changeInfo to see how it looks
  const url = new URL(changeInfo.url);
  const domain = url.hostname;

  // If the url changes...we do something
  if (changeInfo.url) {

    chrome.storage.local.get(['excludedDomains'], function (result) {
      if (result.excludedDomains.includes(domain)) {
        return; // If the domain is in the excludedDomains list, exit the function
      }

      domainChangeCounter++;

      console.log("Domain change detected: ", domainChangeCounter);

      if (domainChangeCounter === 10) {
        console.log("Bingo");
        domainChangeCounter = 0;
      }
    });
  }
});

```

**manifest.json** added `storage` permissions.

```json

  "permissions": [
    "activeTab",
    "webNavigation",
    "tabs",
    "http://*/*",
    "https://*/*",
    "storage" 
  ],
  ...
  
```


**Tip 💡**   
Refresh the plugin manually when making changes to index.js.
<img src="/chrome-extension/image6.png" alt="index.js" width="960" height="540">
