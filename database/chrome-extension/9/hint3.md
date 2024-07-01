###### Hint 3: Fill in the blanks


Here are some code snippets and hints, try to workout the solutions.

**Popup.jsx** 

```javascript

  // 1. Load the category value inside useEffect
  useEffect(() => {

    chrome.storage.local.get(['excludedDomains', 'isEnabled'], function (result) {
      setExcludedDomains(result.excludedDomains || []);
      setIsEnabled(result.isEnabled);

    });
  }, []);


  // 2. Category 
  const [category, setCategory] = useState('javascript');

  const handleCategory = (event) => {

    const newCategory = 
    setCategory();


    chrome.storage.local.set({ });
  };



  // 3. The html part is simple

	   {/* ... other elements ... */}
        <select value={category} onChange={handleCategory}>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="react">React</option>
          <option value="techy">Techy</option>
        </select>
        {/* ... other elements ... */}

```

**index.js**  
_Don't forget to refresh the plugin manually when doing changes to index.js_


```javascript
// When the extension is installed for the very first time, set default values.
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({
	// Set the default values here.


  });
});

```

**Newtab.jsx**

```javascript
useEffect(() => {

    // Load the current category from chrome storage
    chrome.storage.local.get(['category'], function (result) {

      const currentCategory = result.category
      fetch('https://vdoqyjbnpwqkafxxssbb.supabase.co/rest/v1/questions?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkb3F5amJucHdxa2FmeHhzc2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzNzIyMTUsImV4cCI6MjAyNjk0ODIxNX0.luuvoKY-udlAaD83Qf5pElsetmXVwPetr6C-v5gpjDg')
        .then(response => response.json())
        .then(data => {

          // Filter the questions based on the current category
          const filteredData =

          // Select a random question from the filtered data
          const randomIndex =

          // Set the question state to the random question
          setQuestion();
        });
    });
  }, []);

```

🏆 You got this champ. 🏆