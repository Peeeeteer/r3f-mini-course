###### Hint 1: index.js (background folder)

When we reach 10 domain changes,  
we want to open `newtab.jsx` instead of `console.log(“bingo”)`

To do that we will need to do something inside `index.js`

```javascript
if (domainChangeCounter === 10) {
  console.log("Bingo");  // Replace this line
  domainChangeCounter = 0;
}
```

<p>Chrome has a realy well made <a href="https://developer.chrome.com/docs/extensions/reference/api/storage?authuser=1" target="_blank" style="text-decoration: underline;">documentation on tabs</a>, try to find the solution there.</p>


You got this! 👍
