# B13-Assignment-04

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

1.getElementById:
This method selects a single element based on its unique ID. Since an ID should not be repeated in a page, it always returns only one element.

2.getElementsByClassName:
This method selects all elements that share the same class name. It returns a collection (HTMLCollection) of matching elements.

3.querySelector:
This method returns the first element that matches a given CSS selector (such as class, ID, tag, etc.).

4.querySelectorAll:
This method selects all elements that match a specified CSS selector and returns them as a NodeList.

## 2. How to create and insert a new element into the DOM

To create and insert a new element into the DOM, follow these steps:

1.Create the element using document.createElement().

2.Add content to the element using innerText, innerHTML, or similar properties.

3.Append the element to a parent node using methods like appendChild() or append() so that it appears on the webpage.


## 3. What is Event Bubbling? How does it work?

Event Bubbling is a process where an event starts from the target element and then propagates upward to its parent elements.

For example, if a button is placed inside a div and you click the button:

The click event is first triggered on the button.

Then it moves to the div.

After that, it goes to the body.

Finally, it reaches the html element.


## 4. What is Event Delegation? Why is it useful?

Event Delegation is a technique where a single event listener is attached to a parent element instead of adding separate listeners to multiple child elements.

It is useful because:

It reduces the number of event listeners in the code.

It improves performance.

It automatically works for dynamically added child elements inside the parent.

## 5. Difference between preventDefault() and stopPropagation()

1.preventDefault():
This method cancels the browser’s default behavior of an element. For example, it can stop a form from submitting or prevent a link from navigating to another page.

2.stopPropagation():
This method prevents the event from spreading to parent elements during event bubbling. The event will only be handled by the current element.