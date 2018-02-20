# Tiny Router
This is a small library in ES6 to do basic routing for sites and apps. No for use with other frameworks such as angular or view but it may work. This is a standalone routing library and will work with other libraries.

It will automatically change routes based on the hash and you can add views directly into the HTML.

It's around 1kb in file size and very simple to use.

## How to use

1. Include the tiny-router library into your html file
```html
<script src="tiny-router.min.js"></script>
``` 

2. In the HTML add a div with the data attribute call **data-router** and provide your router with an id so you can access it.
```html
<div data-router id="main-router">
```
3. In your  js code wait till the page has loaded and create a new instance of the Router and provide the router element as the parameter.

```js
let router = new Router(document.querySelector('#main-router'));
```

4. Within the router element you can add your routes/views by specifiying **data-route** data attribute with the route (for example data-route="#/"). Those elements will be hidden but you should add some css to ensure they do not show on load. Use visibility style to hide them as this is what this library uses at present.  
 ```html
<section data-route="/">
...
</section>
<section data-route="/home">
...
</section>
```
```
