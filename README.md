

## 1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById select element by id. It return only one element because id is unique.

getElementsByClassName select elements by class name. It can return many element.

querySelector select first matching element using css selector.

querySelectorAll select all matching element.



## 2. How to create and insert new element in DOM

First we create element using createElement().

Then we add text using innerText or innerHTML.

After that we insert it using appendChild() into parent element.



## 3. What is Event Bubbling

Event bubbling means event go from child to parent.

If we click button inside div, first button event run then div event run.

It go bottom to top automatically.


## 4. What is Event Delegation and why useful

Event delegation means we add event listener to parent instead of many child.

It save memory and better for performance.

Also dynamic element work with it.



## 5. Difference between preventDefault() and stopPropagation()

preventDefault stop default action like form submit or link open.

stopPropagation stop event going to parent element.

That is the difference.