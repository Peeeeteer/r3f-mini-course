###### Hint 3: Stackoverflow

[This stackoverflow thread](https://stackoverflow.com/questions/34957319/how-to-listen-for-url-change-with-chrome-extension) is 8 years old but all info is still relevant. 


But this is how I would start it.  
index.js (in background folder)
```javascript
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Lets do something here.

});
```

📌 **DONT FORGET!** 📌  
To allow your plugin to access tabs and interact with URLs, you'll need to enable the necessary permissions in the `manifest.json` file as in stackoverflow thread

