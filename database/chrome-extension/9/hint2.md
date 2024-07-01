###### Hint 2: What to do in each file?


**`index.js`**  
When the plugin is installed for the first time,  
use **chrome.runtime.onInstalled** to initialise default values for **category, excludedDomains and isEnabled**

<br>

**`Popup.jsx`**  
You already did exactly same thing when you did **on/off** button, do the same but for category

```javascript
  const handleToggle = () => {
    const newIsEnabled = !isEnabled;
    setIsEnabled(newIsEnabled);


    // Save isEnabled to chrome storage
    chrome.storage.local.set({ isEnabled: newIsEnabled });
  };

```

<br>

**`Newtab.jsx`**  

Use the **"category"** value to filter the questions. You got this.

```json
{
  "id": 20,
  "created_at": "2024-05-09T13:02:23.723263+00:00",
  "question": {
    "options": [
      "useRef",
      "useState",
      "useEffect",
      "useContext"
    ],
    "question": {
      "text": "Which hook is used to store the state of a component in React?",
      "codeSnippet": "const [count, setCount] = use*(0)"
    },
    "correctAnswer": "useState"
  },
  "category": "react", <- - - - - Use this value here.
  "difficulty": "easy",
  "your_name": "slowmoschen",
  "your_github_url": "github.com/SlowMoschen"
}

```