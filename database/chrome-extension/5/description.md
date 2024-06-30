###### Milestone 5: Combining things.

The problem:
<video width="640" height="480" controls preload>
  <source src="/chrome-extension/m5-1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Currently,  
when we open the popup and add some URLs, close it and then reopen it,  they disappear.  
Let’s store them so they persist when we close and re-open the Popup.

While we're at it,    
Let's also make sure these saved URLs don't count towards bingo
  
📝For example📝    
visiting www.stackoverflow.com **won't** count towards bingo, but visiting www.youtube.com **will**

Sooo... something like this:
<video width="640" height="480" controls preload>
  <source src="/chrome-extension/m5-2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


**Task ✅**
- Save the list of domains so they don't disappear.
- If a URL is in the list, don't count it towards `bingo`



