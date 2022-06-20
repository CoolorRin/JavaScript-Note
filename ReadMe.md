# JavaScript Note
This Project is **For check the weak point in the JavaScript learning way.** Include the library learning note for the typeScript, lodash and so on.  
Also provide some syntax sugar or some problem solution for this Language.  
**Keep it in mind And enjoy it.**

## Expressions

### 

### eval()
> eval function is more like a javascript evaluates expression, it expected **A String representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.** For safe and cause the unexpcted problem, use the **HTTP Content-Sercurity-Policy** to disable the eval().
> 
> Ideally shouldn’t use eval, because it inhibits many optimizations and makes code run slower.

```JavaScript
var x = 2, y = 3;
console.log(eval("var x = 9; x"));               // prints 9
console.log(x);                                  // prints 9
console.log(eval("'use strict'; var x = 5; x")); // prints 5
console.log(eval("'use strict'; var x = 7; x")); // prints 7
console.log(eval("'use strict'; y"));            // prints 3
console.log(x);                                  // prints 9
``` 

```JavaScript
"use strict";
// var x = 2, y = 3;
// NB: Strictness propagates into eval code evaluated by a
//     direct call to eval — a call occurring through an
//     expression of the form eval(...).
console.log(eval("var x = 5; x")); // prints 5
console.log(eval("var x = 7; x")); // prints 7
console.log(eval("y"));            // prints 3
console.log(x);                    // prints 2
``` 

## Property access error

> Note: If access a Object have any undefined property it will return `undefined`. But access the property of **undefined** or **null**, it will return TypeError. To fix that:

```javascript
// Ugly Way
const obj = Object.create(Object.prototype)
if (obj) {
    if (obj.propretyA) {
        console.log(obj.propertyA.propertyB)
    }
}

// Simple Way
console.log(obj && obj.propertyA && obj.propertyA.propertyB)

// ES2020
console.log(obj?.propertyA?.propertyB)
```

## ProtoTypeChain

> **Note: **Although the ES2015 have provide the `class` to make a `OOP` like Feature, but it just a syntactical sugar base on JavaScript **ProtoType Chain**.

### Constructor Function

### Inheritance

- Object.create

	 ```javascript
	 var o = {
		 a: 2,
		 m: function() {
			 return this.a + 1;
		 }
	 };
	 
	 console.log(o.m()); // 3
	 // When calling o.m in this case, 'this' refers to o
	 
	 var p = Object.create(o);
	 // p is an object that inherits from o
	 
	 p.a = 4; // creates a property 'a' on p
	 console.log(p.m()); // 5
	 // when p.m is called, 'this' refers to p.
	 // So when p inherits the function m of o,
	 // 'this.a' means p.a, the property 'a' of p
	 
	```

### Prototype

- Object.setPrototypeOf (obj, prototype)

## [Regular expressions](https://regex101.com/)

## Function

### Arrow Functions/Regular Functions

> [Note This](https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256)


### this binding
> [The Complete Guide to this in JavaScript](https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/)  
> ## **Rule 1**  
> When a function is called in the global scope, the `this` reference is by default bound to the **global object**(`window` in the browser, or `global` in Node.js). For example
> ```JavaScript
> function foo() {
>   this.a = 2;
> }
> foo();
> console.log(a);   // 2
> ```
> **NB**: If you declare the `foo()` function above in strict mode, then you call this function in global scope, `this` will be `undefined` and assignment `this.a = 2` will throw `Uncaught TypeError` exception.
> ## **Rule 2**  
> ```JavaScript
> fucntion foo() {
>   this.a = 2;
> }
> 
> const obj = {
>   foo: foo
> };
>
> obj.foo();
> console.log(obj.a); // 2
> ```
> **NB**: Clearly, in the above snippet, the foo() function is being called with context is obj object and this reference now is bound to obj. So when a function is called with a context object, the this reference will be bound to this object.
> ## **Rule 3**
> `.call`, `.apply` and `.bind` can all be used at the call site to explicitly bind `this`. Using `.bind(this)` is something you may see in quite a lot of React components.  
> ```JavaScript
> const foo = function() {
>   console.log(this.bar);
> }  
> 
> foo.call({bar: 1}); // 1
> ```
> Here's a quick example of how each one is used to bind `this`:
> - .call(): fn.call(thisObj, fnParam1, fnParam2)
> - .apply(): fn.apply(thisObj, [fnParam1, fnParam2])
> - .bind(): const newFn = fn.bind(thisObj, fnParam1, fnParam2)  
> ## **Rule 4**
> ```JavaScript
> function Point2D(x, y) {
>     this.x = x;
>     this.y = y;
> }  
> const p1 = new Point2D(1, 2);
> console.log(p1.x);    // 1
> console.log(p1.y);    // 2
> ```
> The thing you must notice that is the Point2D function called with new keyword, and this reference is bound to p1 object. So when a function is called with new keyword, it will create a new object and this reference will be bound to this object.  
> ## **Rule 5**
> ```JavaScript
> const Cat = function(name, sound) {
>   this.name = name;
>   this.sound = sound;
>   this.makeSound = function() {
>     console.log( this.name + ' says: ' + this.sound );
>   };
>   this.annoy = function() {
>     let count = 0, max = 100;
>     const t = setInterval(function() {
>       this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
>       count++;
>       if (count === max) {
>         clearTimeout(t);
>       }
>     }, 500);
>   };
> }
> 
> const kitty = new Cat('Fat Daddy', 'Mrrooowww');
> kitty.annoy();
> ```
> That doesn’t work because inside the setInterval callback we’ve created a new context with global scope, so this no longer points to our kitty instance. In a web browser, this will instead point to the Window object, which doesn’t have a makeSound() method.
> To solve that, just binding the this or just declare `self = this`, and use self.makeSounc instead.


## Array.prototype

### entries()

Just same as the Python method: **enumerate**

```python
# Python
for key, value in enumerate({a:1}):
	print(key, value)
```

```javascript
// JavaScript
for (const [key, value] of Object.entries({a: 1})) {
    console.log(`${key}: ${value}`)
}
```

## Reference Object

- Object.assign ( targetObject, SourceObject1, SourceObject2......)  **[Shadow Copy]**

	**Notice:** This method of protocol type Object is like a iterator that make the target Object's prop which has same
	name as the source object and make its value equal the source Object's props value.

	> It will cause that if the first layer of the targetObject have the Object type properties (**Array is Object too **)then which will be the source Object's reference that can sync the value between each other.

	**Always Remember that the Object is reference of Object**

	```javascript
	// It's werid if copy all code below it will only show the final result that the target Object already changed.
	
			let a = {referenceObj : {}}
			let b = {referenceObjProp : {test: 1}, CopyProp:1}
	
			// In browser type the code below by order
			Object.assign(a,b)
			console.log(a) // {referenceProp: {test : 1}, CopyProp: 1}
			a.referenceProp.test = 2
			console.log(a) // {referenceProp: {test: 2}, CopyProp: 1}
			console.log(b) // {referenceProp: {test: 2}, CopyProp: 1}
			a.CopyProp = 2 // Here will be a copy
			console.log(a) // {referenceProp: {test: 2}, CopyProp: 2}
			console.log(b) // {referenceProp: {test: 2}, CopyProp: 1}
			
	```

- https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript

Notice All the JavaScript Object is the reference of the proto type. As the code below.

```javascript
let a = {a: 1}	// same as let a = new Object(a,1)
```

## Destructuring assignment

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays,
or properties from objects, into distinct variables.

```javascript
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

const testObj = {
    Key1: "KEY1",
    Key2: "KEY2",
    Key3: "KEY3",
    Key4: "KEY4",
}

const {Key3, ...testObjWIthoutKey3} = testObj

console.log(Key3, testObjWIthoutKey3)
// KEY3 { Key1: 'KEY1', Key2: 'KEY2', Key4: 'KEY4' }
```

### Spread syntax

**Note: **Spread syntax is same as Object.assign that if use both of that to compact a object type variable which have
the object prop, it will be reference to another variable.

```javascript
let obj1 = {objLikeProp: {prop: "prop"}, prop2: "prop2"}
let obj2 = Object.assign({}, obj1)

console.log(obj2)
// {objLikeProp: {prop: "prop"}, prop2: "prop2"}

obj2.objLikeProp.prop = "Change the value in objectProp from Object"

console.log(obj2)
// {objLikeProp: {prop: "change.."}, prop2: "prop2"}

console.log(obj1)
// {objLikeProp: {prop: "change.."}, prop2: "prop2"}

=== === === === === === === === === === === === === === ===
let
obj3 = {...obj1} // Same as Object.assign
```

## Asynchronous JavaScript

Keep in mind that the asynchronous function will be add to the Event queue and waiting for the main thread finished.  

And if the asynchronous function have included another function it will be show the feature like below. **(DataStructure)**

```javascript
// First Queue
setTimeout(() => {
    console.log("Queue First")

    // Third Queue
    setTimeout(() => {
        console.log("Queue Third")
    }, 0)
}, 0)

// Second Queue
setTimeout(() => {
    console.log("Queue Second")
}, 0)

// Queue First
// Queue Second
// Queue Third

```

### Promise



### Async Function and await

> **Description:**
>
> Async functions can contain **0** or **More** <u>await</u> expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the **returned promise is fulfilled or rejected.** The resolved value of the promise is treated as the return value of the await  expression Use of `async` and `await` enables the use of ordinary `try/catch` blocks around asynchronous code.
>
> **Notice:**
>
> - The `await` keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a `SyntaxError`.
>
> 	**`await` can be used on its own with JavaScript Modules**.
>
> - The purpose of `async/await` is to simplify the syntax necessary to consume promise-based APIs. The behavior of `async/await` is simliar to combining generators and promises.
>
> Async functions **always return a promise.** If the return value of an async function is not explicitly a promise, **it will be implicitly wrapped in a promise.**

```javascript
function resolveAfter2Second() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("2 Second passed, and function return resloved.")
        }, 2000)
    })
}

async function asyncFunc() {
    console.log("You call the async function.");

    const response = await resolveAfter2Second()
    console.log(response)

    console.log("End the Async Function!")

    // return "reslove msg" // Implicitly wrapped to Promise.reslove("reslove msg")
    return Promise.reject("Oh!Error!")
}

asyncFunc()
    .then(resolvedMsg => {
        console.log(resolvedMsg)
    })
    .catch(ErrorMsg => {
        console.log(ErrorMsg)
    })
    .finally( ()=> {
        console.log("asyncFunc's returned promise have done.")
    })

```



### Example

```javascript
async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");
}
async  function async2() {
    console.log( 'async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
},0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end');

/*
Script Start
async1 start
async2
promise1
script end
async1 end
promise2
settimeout
*/
```







## Web API

- File Download

	```javascript
	function download(content, fileName, contentType) {
			var a = document.createElement("a");
			var file = new Blob([content], {type: contentType});
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
	}
	download(jsonData, 'json.txt', 'text/plain');	
	```

- Blob (Binary Large Object)

- FileSystemHandle

### MutationObserver

Create a MutationObserver for the DOM to watch the DOM's mutation. (i.e. the Api for the MutaionObserver can custom the config of the Object watch)

```html
<div class="bg-danger" id="app">
    <p id="test">test</p>
</div>

<script>
    let target = document.getElementById("app")
    let config = {
        childList: true,
        attributes: true
    }
    let observer = new MutationObserver(function (MutationList) {
        for (const mutationRecord of MutationList) {
            if (mutationRecord.type === "childList") {
                console.log("The childList you Observed have been changed")
            }
            if (mutationRecord.type === "attributes") {
                console.log("The attributes you Observed have been changed")
            }
            console.log(mutationRecord)
        }
    })
    observer.observe(target, config)

    document.getElementById("test").addEventListener('click', (event) => {
        target.append("Append", document.createElement('p'))
        target.className = "bg-primary"
    })
</script>
```

## 