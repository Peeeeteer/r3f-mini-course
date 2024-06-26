###### Hint 1: Storing urls (Popup.jsx)

A good way to save data is by using `chrome.storage.local` 
You can store up to 5 MB of data for chrome extensions, which is more than we need for our blocked domain list. 

There is a lot of [good documentation about it](https://developer.chrome.com/docs/extensions/reference/api/storage?authuser=1) just skim through it and you'll get it

Also,  
Here's a simple example of how you might use it:
```javascript
  const handleSubmit = () => {
    chrome.storage.local...
  };

```

**Dont forget 💡**    
Every time we **re-open** the popup, we need to load the domain list from `chrome.local.storage` again or else it will be empty

