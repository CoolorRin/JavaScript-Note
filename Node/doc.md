# Node.js Note

## **What is Node.js**

According to the Node.js official document.
Node.js is A open-source and cross-platform
**JavaScript runtime environment**. It runs by
the **V8 engine** which is the core of Google Chrome
and outside the browser.

## Module System
- ECMA Script Module
  > ECMAScript modules are the official standard format to package JavaScript code for reuse.Modules are defined using a variety of `import` and `export` statements.
  > The following example of an ES module exports a function: 

  ```JavaScript
  // addTwo.mjs

  function addTwo(num) {
    return num + 2;
  }

  export { addTwo };

  // app.mjs

  import { addTwo } from "./addTwo.mjs";
  console.log(addTwo(4));

  ```
  
- CommonJS Module 
  > In the Node.js module system, each file is treated as a separate module.For example, consider a file named `foo.js` and `circle.js`

  ```JavaScript
  // foo.js
  
  const circle = require("./circle.js");
  console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

  // circle.js

  const {PI} = Math;
  exports.area = (r) => PI * r ** 2;
  exports.circumference = (r) => 2 * PI * r;
  ```


  

### Different between the exports and module.exports
> ***Whatever you do just keep in mind that module.exports
and NOT exports will be returned from your module when
you're requiring that module from somewhere else.***
- exports is the reference of the module.exports.

  ```javascript
  module = {}
  module.exports = {}
  exports = module.exports
  exports.a = "hello"
  console.log(module.exports, exports) 	
  // { a: 'hello' } { a: 'hello' }
  exports = "world"
  console.log(module.exports, exports) 	
  // { a: 'hello' } world
  ```

  ```javascript
  module.exports.a = function () {}
  console.log(module.exports, exports)
  // { a: [Function (anonymous)] } 
  // { a: [Function (anonymous)] }
  exports.b = function () {}
  console.log(module.exports, exports)
  // { a: [Function (anonymous)], b: [Function (anonymous)] } 
  // { a: [Function (anonymous)], b: [Function (anonymous)] }
  exports = function () {}
  console.log(module.exports, exports)
  // { a: [Function (anonymous)], b: [Function (anonymous)] } 
  // [Function: exports]
  ```

## OS
[Just Check the official documentation](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)

## File System

### Synchronous API
  > The synchronous APIs preform all operations synchronously, blocking the event loop until the operation completes or fails.

### Promise API
  > The `fs/promises` APIs provides asynchronous file system methods that return promise.

### Callback API
  > The callback APIs preform all operations asynchronously, without blocking the event loop, then invoke the callback 
  > function upon completion or error.


- Both The callback APIs and the promise APIs use the underlying Node.js thread pool to preform file system operation 
 off the event loop thread.**These operations are not synchronized or thread safe. Care muse be taken when performing 
 multiple concurrent modifications on the same file or data corruption may occur.**
