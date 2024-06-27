###### Milestone 8: Add questions

Let's add questions to `Newtab.jsx` so that we actually have a quiz...
<video width="640" height="480" controls preload>
  <source src="/chrome-extension/m8-1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


We can get the questions from here: <a href="https://vdoqyjbnpwqkafxxssbb.supabase.co/rest/v1/questions?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkb3F5amJucHdxa2FmeHhzc2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzNzIyMTUsImV4cCI6MjAyNjk0ODIxNX0.luuvoKY-udlAaD83Qf5pElsetmXVwPetr6C-v5gpjDg" target="_blank" style="text-decoration: underline;">API URL</a> 


<img src="/chrome-extension/image33.png" alt="index.js" width="640" height="480">


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i><a href="https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en" target="_blank" style="text-decoration: underline;">I used a chrome extension to display the data more pretty</a></i>

<br>

The goal is to a question in `newtab.jsx` and create  functinalitiy to check if user answered correctly.


**Task ✅**
- Display a question from api
- Alert user if answered correct/wrong