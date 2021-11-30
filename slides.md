---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# event loop

What is it?

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/binh1298/slide-event-loop" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
-->

---

# Hello, I'm Bình.

I'm an Frontend Developer at Manabie

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Agenda

- 1. **Multi threaded languages vs Single threaded languages**
- 2. **Stack and Queue**
- 3. **The Call Stack**
- 4. **The run-time environment**
- 5. **Event loop visualization**
- 6. **Conclusion, Q&A** 

---

# Multi threaded languages

<br/>
<br/>
<br/>

<div grid="~ cols-2 gap-4">
<div>

Languages such as **C#**, **Java** are **multi-threaded languages**.
This mean they can execute **multiple things** at a time

<br/>

> Imagine eating with many hands. It means you can **eat multiple things at once**. <br/> However, it **doesn't necessary mean that you can eat faster than with only one hand**.

</div>
<div>

<img border="rounded" src="http://walkingoffpounds.com/wp-content/uploads/2017/09/Baby-Eating-with-Both-Hands.jpg">
</div>
</div>

---

# Single threaded language

<br/>
<br/>
<br/>

<div grid="~ cols-2 gap-4">
<div>

**Javascript** is a **single-threaded language**.
This means it can only execute **one thing** at a time! 

<br/>

> Imagine if you only have one hand. You **can only eat one thing at a time**.

<br/>

🤔 How can Javascript executes asynchronous code? 

-> Answer: It uses the **event loop**
</div>
<div>

<img border="rounded" src="https://previews.123rf.com/images/dinodia/dinodia1709/dinodia170911040/86335443-ten-year-old-boy-holding-carrot-in-his-one-hand-and-bout-to-eat.jpg">
</div>
</div>

<br/>
<br/>

#### In order to understand what **event loop** is, we have to understand 2 concepts: **Stack** & **Queue**

---

# Stack

---

# Stack

<div grid="~ cols-2 gap-4">
<div>

**Stack** is an "array" of items can only be added or removed in 2 ways:

- push: Add to the top
- pop: Remove from the top

<br/>

> Imagine a stack of dishes (or just look at the image here)

<br/>

🤔 What does this have to do with JS code execution?

-> Answer: I'm glad you asked, but let's wait a bit to talk about the Queue first
</div>
<div>

<img border="rounded" src="/images/stack_of_dishes.jpg">
</div>
</div>

---

# Queue

<div grid="~ cols-2 gap-4">
<div>

**Queue** is an "array" of items can only be added or removed in 2 ways:

- push: Add to the bottom
- pop: Remove from the top

<br/>

> Imagine going to the supermarket during covid

<br/>

🤔 What does this have to do with JS code execution?

-> Answer: First, let's take a look at how your code is executed using **only the Stack**
</div>
<div>

<img border="rounded" src="https://v-count.com/wp-content/uploads/2021/07/shutterstock_1891209922-3.png">
</div>
</div>


---

# The Call Stack

---

# The Call Stack

<div grid="~ cols-2 gap-4">
<div>

Let's take a look at this piece of code, assuming this entire piece is wrapped by a *main* function: 

```ts {all|all|14|9-12|10|5-7|6|11|1-3|2|11|14|15|all}
function transform(data) {
  return `Transformed data: ${data}`
}

function getFromService(data) {
  return `Data from service ${data}`
}

function fetchData(data) {
  const dataFromService = getFromService(data);  
  return transform(dataFromService);
}

const data = fetchData("Books");
console.log("Render data:", data);
```

</div>
<div>

<CallStackCarousel />

</div>
</div>


---

# The Call Stack

<br/>

Let's take a look at this piece of code, do you see any problems?

```ts {all}
function getFromService(data) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + 10000);
  return `Data from service: ${data}`;
}

function fetchData(data) {
  const dataFromService = getFromService();
  return `Test ${dataFromService}`
}

const data = fetchData("Books");
console.log(data);
```

-> We need help from **the Run-time Environment**


---

# The run-time environment

<br/>

Our **JS code gets executed by a Javascript Engine**, each browser/environment uses a different engine 
| Javascript Engine      | Browser                 |
| -----------            | -----------             |
| V8                     | Chrome and NodeJS       |
| SpiderMonkey           | Mozilla FireFox         | 

<br/>

**The Javascript Engine runs inside a run-time environment** which consists of the following components:
- ⚙️ JS Engine: executes our code using the **Call Stack**
- 🌐  Web API: provides DOM manipulation, AJAX, timer functions
- 📞 Callback/Event/Message Queue: holds the messages/events waiting to be executed
- 🔁 Event Loop: **constantly checking** if the **Call Stack** is empty or not. **If it's empty**, it pushes an event from the **Callback Queue** to the **Call Stack** 

---

# Event loop visualization

<div class="h-sm">
  <img border="rounded" h="full" src="/images/event_loop.png">

  [Educative.io](https://www.educative.io/edpresso/what-is-an-event-loop-in-javascript)

</div>

---

# Event loop visualization

<div grid="~ cols-2 gap-4">
<div>

Let's try to visualize this piece of code:

```ts {all}
function fetchData(data, callback) {
    setTimeout(function fetchDataFromServer() { 
      callback("Fetched Data" + data) 
      }, 
      5000
    );
}

fetchData("Books", function log(fetchedData) { 
  console.log(fetchedData)
})
fetchData("Students", function log(fetchedData) { 
  console.log(fetchedData)
})

```

</div>
<div>

<div class="flex justify-center items-center" h="full" w="full">

## [Magic Link](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gZmV0Y2hEYXRhKGRhdGEsIGNhbGxiYWNrKSB7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIGZldGNoRGF0YUZyb21TZXJ2ZXIoKSB7IAogICAgICBjYWxsYmFjaygiRmV0Y2hlZCBEYXRhIiArIGRhdGEpIAogICAgICB9LCAKICAgICAgNTAwMAogICAgKTsKfQoKZmV0Y2hEYXRhKCJCb29rcyIsIGZ1bmN0aW9uIGxvZyhmZXRjaGVkRGF0YSkgeyAKICBjb25zb2xlLmxvZyhmZXRjaGVkRGF0YSkKfSkKZmV0Y2hEYXRhKCJTdHVkZW50cyIsIGZ1bmN0aW9uIGxvZyhmZXRjaGVkRGF0YSkgeyAKICBjb25zb2xlLmxvZyhmZXRjaGVkRGF0YSkKfSk%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

</div>


</div>
</div>

<style>

h2 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
a {
  font-size: 4rem;
  line-height: 1;
}

</style>

--- 

# Conclusion, Q&A

<br/>

The JavaScript Engine (Chrome V8/Mozilla SpiderMonkey) executes our code. <br/> However, in order to perform what we usually ask it to do (DOM manipulation, AJAX, timer functions), it relies heavily on the run-time environment (Browsers/Node/Deno) [Read more](https://blog.bitsrc.io/javascript-internals-javascript-engine-run-time-environment-settimeout-web-api-eeed263b1617)

<br/>

**Event loop** is a **design pattern** or a piece of program that the run-time environment provides for us (and the engine) to use to give **the illusion of multi-threading when executing Javascript code**. <br/> It does it by using the call stack, event queue and run-time API ~~, and probably more but I'm not aware of them (yet)~~

<br/>

Please don't hesitate to ask if you have any questions
--- 

# Acknowledgement
<br/>

[What the heck is the event loop anyway? | Philip Roberts | JSConf EU ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

<br/>

[JavaScript Internals: JavaScript engine, Run-time environment & setTimeout Web API](https://blog.bitsrc.io/javascript-internals-javascript-engine-run-time-environment-settimeout-web-api-eeed263b1617)

<br/>

[What is an event loop in JavaScript?](https://www.educative.io/edpresso/what-is-an-event-loop-in-javascript)
