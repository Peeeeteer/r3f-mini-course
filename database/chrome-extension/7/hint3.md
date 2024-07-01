###### Hint 3: Fill in the blanks

**Popup.jsx** fill in the missing parts:

```javascript
  // We added a new state
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Do something here 
    chrome.storage.local.get(['excludedDomains', 'isEnabled'], function (result) {
      setExcludedDomains(result.excludedDomains || []);

    });
  }, []);
 
  const handleToggle = () => {
    // Do something here 
    chrome.storage...

  };

  return (
    <div className="App">
      <header className="App-header">

        // Added the switch toggle  
        <div className="toggle-switch">
	        <label className="switch">
            <input type="checkbox" checked={isEnabled} onChange={() =>
            {
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

```

**index.js** fill in the missing parts:

```javascript
console.log("Background log");
let domainChangeCounter = 0;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  const url = new URL(changeInfo.url);
  const domain = url.hostname;

  if (changeInfo.url) {
    // Grab the on/off value 
    chrome.storage.local.get(['excludedDomains'], function (result) {


	  // Check if on/off, if off exit the function.
      if () {
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

**Tip 💡**   
Refresh the plugin manually when making changes to index.js.
<img src="/chrome-extension/image6.png" alt="index.js" width="960" height="540">
