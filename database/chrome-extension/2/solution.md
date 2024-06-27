###### Milestone 2. Solution 

Find the `manifest.json` file.  
<img src="/chrome-extension/image55.png" alt="index.js" width="360" height="320">

Remove the following `chrome_url_overrides` part from the file and save your changes:

```json
  "chrome_url_overrides": {
    "newtab": "newtab.html"
  },

```

**Tip 💡**  
If you update the `manifest.json` you need to refresh the plugin manually by clicking this:
<img src="/chrome-extension/image6.png" alt="index.js" width="640" height="480">
