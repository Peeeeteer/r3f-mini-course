###### Hint 2: Ignore urls (index.js)

**Step 1:**  
Now that we store all domains in the `Popup.jsx`  
we now need to access the blocked domains inside `index.js` using `chrome.storage.local`  

**Step 2:**  
After you get the list inside `index.js` try to answer these questions.❓
- How do you check if the current tab's domain is _blocked_ before incrementing?</li>
- Do you need any permissions to use <code>chrome.storage</code>? <a href="https://developer.chrome.com/docs/extensions/reference/api/storage?authuser=1" style="text-decoration: underline;">Review the docs</a>

Here's a basic structure to get you started:

```javascript
let domainChangeCounter = 0;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Get the domain from the URL 

  // If the url changes...we do something
  if (changeInfo.url) {

    chrome.storage.local.. {
     // If the domain is in the excludedDomains list, dont increment
     }


    domainChangeCounter++;

    if (domainChangeCounter === 10) {
      console.log("Bingo");
      domainChangeCounter = 0;
    }
  }
}); 

```
