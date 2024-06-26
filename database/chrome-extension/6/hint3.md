###### Hint 3: Fill in the blanks


Here is the code, try filling in the missing parts.  
Use documentation,google,ai or anything else... the goal is to solve the problem and understand how you solved it. 

**index.js (In background folder)** 

```javascript
console.log("Background log");

let domainChangeCounter = 0;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  const url = new URL(changeInfo.url);
  const domain = url.hostname;

  if (changeInfo.url) {

    chrome.storage.local.get(['excludedDomains'], function (result) {
      if (result.excludedDomains.includes(domain)) {
        return; 
      }

      domainChangeCounter++;

      if (domainChangeCounter === 10) {
	    // Do something here with chrome.tabs.update

      domainChangeCounter = 0;
      }
    });
  }
});

```

**Newtab.jsx** 

```javascript

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quiz yourself before you start browsing.
        </p>
        <button className="button" onClick={() => {
	        // Do something here with chrome.tabs
        }
        }>
          Continue
        </button>
      </header>
    </div >
  );
};

```

**Tip 💡**   
Refresh the plugin manually when making changes to index.js.
<img src="/chrome-extension/image6.png" alt="index.js" width="960" height="540">
