

###### Milestone 4. Solution 

Add the counter to ``index.js`` (in background folder), you can find it here:
![hint-1](/chrome-extension/image1.png "index.js")

```javascript
console.log('This is the background page.');

let domainChangeCounter = 0;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        domainChangeCounter++;

        console.log("Domain change counter: ", domainChangeCounter);

        if (domainChangeCounter === 10) {
            console.log("Bingo");
            domainChangeCounter = 0;
        }
    }
});

```

Also,  
Update permissions inside ``manifest.json``    

```json

  "permissions": [
    "activeTab",
    "webNavigation",
    "tabs",
    "http://*/*",
    "https://*/*"
  ]
  ...

```


**Tip 💡**  
If you update the `manifest.json` or `index.js` file you need to refresh the plugin manually by clicking this:
<img src="/chrome-extension/image6.png" alt="index.js" width="640" height="480">
