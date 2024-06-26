###### Hint 2: Button in Newtab.jsx

The goal here is to add a button in the centre of the page and that button should redirect the user back to the page that they came from. 

```javascript
  <button className="button" onClick={ "Do something" }>
    "Go back"
  </button>
```

<p>To figure out what to do on onClick, you can:</p>
<ul>
  <li>Refer to the <a href="https://developer.chrome.com/docs/extensions/reference/api/tabs" style="text-decoration: underline;">chrome tabs documentation</a></li>
  <li>Google “chrome plugin go to previous page”</li>
  <li>Ask ChatGPT/Copilot/Insert any other AI here</li>
</ul>


But basically, the process is button -> clicked -> go back
