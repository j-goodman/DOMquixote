# DOMquixote #
DOMquixote is a library for traversing HTML documents with JavaScript.

![windmill.png](http://i.imgur.com/ElS3MXy.png)

## Features ##
* Element selection
* Appends and edits HTML elements
* Sets attributes on the fly
* Adds and removes classes
* Selects elements by children or parents
* Adds and removes event listeners

## DOMNodeCollection ##
* `.html(htmlArg)`: sets the HTML content of all elements equal to the argument.
* `.empty`: empties the HTML content of all elements.
* `.append(content)`: appends the specified content to the HTML.
* `.attr(attr)`: adds the specified HTML attribute to the  element.
* `.addClass(className)`: adds the specified class to the element.
* `.removeClass(targetClass)`: removes the specified class.
* `.children()`: returns an element's children.
* `.parent()`: returns an element's parent.
* `.find(selector)`: finds the elements matching the specified DOM selector string.
* `.remove()`: removes the elements matching the given DOM selector string.
* `.on(trigger, listener)`: adds a listener on the specified event with the given callback.
* `.off(trigger, listener)`: removes the listener.
