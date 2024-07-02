###### Hint 2: Step by step




For `Popup.jsx` do the same thing you just did for the Category, but this time the **Slider**

- html slider with value from 10-50
- a function that handles that slider changes
- useEffect with that new value

```javascript
const handleCategory = (event) => {
const newCategory = event.target.value;
setCategory(newCategory);

chrome.storage.local.set({ category: newCategory });
};
```
add the html for the slider,etc...

<br>

`index.js`

- Use the domainChange value in this part of the function
```javascript
// Check if domainChangeCounter is equal to domainChanges, if yes show the Newtab.jsx
if () {
    chrome.tabs.update(tabId, {
        url: chrome.runtime.getURL('newtab.html'),
    });

    domainChangeCounter = 0;
}
```

_Psst_  
Dont forget to set the default value for domainChanges on first chrome plugin install.
```javascript
chrome.runtime.onInstalled.addListener...
```
