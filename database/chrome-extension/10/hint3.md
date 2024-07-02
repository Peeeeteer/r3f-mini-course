###### Hint 3: Fill in the blanks

**Popup.jsx** this is the code, fill in the missing parts:

```javascript

  //1. Add a new state variable
  const [domainChanges, setDomainChanges] = useState(10);

  //2. Handle slider change
  const handleSliderChange = (event) => {
    const newDomainChanges = 
    setDomainChanges(newDomainChanges);

    chrome.storage.local.set();
  };
    
  //3. Add the actual slider.
  <input
          type="range"
          min="10"
          max="50"
          value={}
          onChange={}
        />
        <span></span>

  //4. Update the default value for domainChanges everytime popup is opened.
  useEffect(() => {
    chrome.storage.local.get(['excludedDomains', 'isEnabled', 'category', 'domainChanges'], function (result) {
      setExcludedDomains(result.excludedDomains || []);
      setIsEnabled(result.isEnabled);
      setCategory(result.category || 'javascript');

    });
  }, 
  []);


```

**index.js** this is the code, fill in the missing parts.

```javascript
// Set the default domain change value, I did javascript
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({
    isEnabled: true,
    category: 'react',
    excludedDomains: ['stackoverflow'],

  });
});

// Get the domainChanges value.
  chrome.storage.local.get(['excludedDomains', 'isEnabled', 'Hmm'], function (result) {

// Use the domainChanges value 
      if () {
        chrome.tabs.update(tabId, {
          url: chrome.runtime.getURL('newtab.html'),
        });


        domainChangeCounter = 0;
      }

```

**Tip 💡**   
Refresh the plugin manually when making changes to index.js.
<img src="/chrome-extension/image6.png" alt="index.js" width="960" height="540">
