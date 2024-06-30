###### Solution


**Step 1: Clone**   
To clone the template do:
```bash
  cd directory/where/you/want/to/clone
  git clone https://github.com/lxieyang/chrome-extension-boilerplate-react.git
```

If you don't have git, you can download the zip
<img src="/chrome-extension/image9.png" alt="index.js" width="860" height="620">

<br>

**Step 2: Install**  
In the terminal run the following commands:

```bash
  cd chrome-extension-boilerplate-react
  npm install
```

This might return some errors:
<img src="/chrome-extension/image12.png" alt="index.js" width="860" height="620">

If you want,  
you can fix these by running the following commands in the terminal:

```bash
  npm audit fix
  npm audit

```


Cool,
Lets run it

```bash
  npm run start

```
<br>

**Step 3: Add to chrome**  
There are a lot of good videos on this topic. <a href="https://www.youtube.com/results?search_query=chrome+plugin+beginner" target="_blank" style="text-decoration: underline;">Watch any of these videos.</a>

But in short. Here is a quick video:
<video width="640" height="480" controls preload muted>
  <source src="/chrome-extension/m1-2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

If you don't see the build folder, that means you forgot to run
```bash
  npm run start

```

If all goes well, the terminal should look like this.
<img src="/chrome-extension/image100.png" alt="index.js" width="860" height="620">
