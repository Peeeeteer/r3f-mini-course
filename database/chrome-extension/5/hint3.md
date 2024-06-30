###### Hint 3: Fill in the blanks

**Popup.jsx** fill in the missing parts:

```javascript
import React, { useEffect, useState } from 'react';
import './Popup.css';


const Popup = () => {
  const [url, setUrl] = useState('');
  const [excludedDomains, setExcludedDomains] = useState([]);

  useEffect(() => {
    // Update me
  }, []);

  const handleSubmit = () => {
    // Update me
    const newExcludedDomains = [];
    setExcludedDomains();
    chrome.storage...
  };
  const handleRemoveUrl = (urlToRemove) => {
    // Update me
    const newExcludedDomains
    setExcludedDomains(newExcludedDomains);
    chrome.storage...
  };

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
              <button onClick={() =>  handleRemoveUrl(blockedUrl)}>x</button>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Popup;

```

**index.js** this is the code, fill in the missing parts.

```javascript
console.log("Background log");

let domainChangeCounter = 0;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  // Update me
  const url = 
  const hostname = 

  if (changeInfo.url) {
    // Update me
    chrome.storage.local.get([''], function (result) {
      if () {
        return;
      }
	
      domainChangeCounter++;

      if (domainChangeCounter === 10) {
        console.log("Bingo");
        domainChangeCounter = 0;
      }
    });
  }
});

```


**manifest.json**  
Add the `storage` permissions required to use `chrome.storage`


**Tip 💡**   
Refresh the plugin manually when making changes to index.js.
<img src="/chrome-extension/image6.png" alt="index.js" width="960" height="540">
