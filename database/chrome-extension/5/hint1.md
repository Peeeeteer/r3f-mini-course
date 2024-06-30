###### Hint 1: Storing urls (Popup.jsx)

Let's start with `Popup.jsx`  
when we add a domain and click on submit, and to save it we can use `chrome.storage.local`  
Chrome gives us 5 MB for extension data, which is way more than we need for our list of blocked domains.


<p>There is a <a href="https://developer.chrome.com/docs/extensions/reference/api/storage?authuser=1" style="text-decoration: underline;">very good documentation</a> about local storage. Go read it...📚</p>

Here is a simple code that can get you started:

```javascript
  const handleSubmit = () => {
    chrome.storage.local...
  };

```

**Dont forget 💡**    
Every time we **re-open** the popup, we need to **load** the domain list again.
