###### Hint 1: Storing urls (Popup.jsx)

A good way to save data is by using `chrome.storage.local`   
You can store up to 5 MB of data for chrome extensions, which is more than we need for our blocked domain list. 

<p>Chrome has  <a href="https://developer.chrome.com/docs/extensions/reference/api/storage?authuser=1" style="text-decoration: underline;">good documentation about local storage</a>. Go read it...📚</p>

 Here is a simple example of how you might use it


```javascript
  const handleSubmit = () => {
    chrome.storage.local...
  };

```

**Dont forget 💡**    
Every time we **re-open** the popup, we need to load the domain list

