###### Hint 2: More code


Here is more code, try to do the rest yourself.


```javascript
useEffect(() => {
    fetch('https://65-109-237-244.nip.io/api/quiz')
      .then(response => response.json())

      .then(data =>
        // Do something with this data
        console.log(data[0].question)
      );

  }, []);

```

Keep in mind that one single `question` looks something like this.  
So when displaying the actual question, you would do: `question.question.text`

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
  "category": "react",
  "difficulty": "easy",
  "your_name": "slowmoschen",
  "your_github_url": "github.com/SlowMoschen"
}
```

