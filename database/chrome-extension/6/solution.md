###### Milestone 6. Solution 


In this milestone we only made changes to `index.js` and `newtab.jsx` 

**index.js** final code.

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

        chrome.tabs.update(tabId, {
          url: chrome.runtime.getURL('newtab.html'),
        });

        domainChangeCounter = 0;
      }

    });
  }
});

```

**Newtab.jsx** final code.

```javascript
import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quick yourself before you start browsing.
        </p>

        <button className="button" onClick={() => {
          chrome.tabs.goBack();
        }

        }>
          Continue
        </button>

      </header>
    </div >
  );
};

export default Newtab;

```

**Tip 💡**   
Refresh the plugin manually when making changes to index.js.
<img src="/chrome-extension/image6.png" alt="index.js" width="960" height="540">
