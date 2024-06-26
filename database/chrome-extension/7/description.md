###### Milestone 5: Combining things.

The problem:
<video width="640" height="480" controls preload>
  <source src="/chrome-extension/m5-1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Currently,  
when we open the popup and add some URLs, they disappear.  
Let’s store them so they persist when we close and open the Popup.

Also if we are at it,  
Let's have those urls be ignored for our count to bingo.  

  
📝For example📝    
visiting www.stackoverflow.com **should not** count towards bingo, but visiting www.youtube.com **should**

Sooo... something like this:
<video width="640" height="480" controls preload>
  <source src="/chrome-extension/m5-2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Task ✅**
- Store the list of domains
- Update the count to ignore those domains for bingo



