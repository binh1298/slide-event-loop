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

- 1. **Single threaded languages vs Multi threaded languages**
- 2. **What's a stack**
- 3. **What's a queue**
- 4. **How Javascript execute your code**
- 5. **Let's zoom out**
- 6. **The event loop**

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

> Imagine eating with 2 hands. It means you can **eat multiple things at a time**. <br/> However, it **doesn't necessary mean that you can eat faster than with only one**.

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

**Stack** is a linear data structure that items can only be added or removed in 2 ways:

- push: Add to the top
- pop: Remove from the top

<br/>

> Imagine a stack of dishes (or just look at the image here)

<br/>

🤔 What does this have to do with JS code execution?

-> Answer: I'm glad you asked
</div>
<div>

<img border="rounded" src="/images/stack_of_dishes.jpg">
</div>
</div>

---

# The Call Stack

---

# The Call Stack

<div grid="~ cols-2 gap-4">
<div>

Let's take a look at this piece of code, assuming this entire piece is wrapped by a *main* function: 

```ts {all|all|14|9-12|10|5-7|6|11|1-3|2|11|14|15}
function eat(cookedFood: string) {
  console.log("Chomp chomp", cookedFood);
}

function makeFood(food: string) {
  return `Cooked ${food}`
}

function haveDinner(food: string) {
  const cookedFood = makeFood(food);  
  eat(cookedFood);
}

haveDinner("Fried Eggs");
console.log("Rest and watch TV");
```

</div>
<div>

<CallStackCarousel />

</div>
</div>

