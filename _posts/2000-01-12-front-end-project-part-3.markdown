---
title: Vending Machine Project, Part 3
layout: post
date: 2000-01-12
permalink: vending-machine-project-part-3
program: front-end
tags: front-end
---

Let's get things jiggling!

`animation: jiggle 0.2s 2;` - to make it jiggle twice

`animation: jiggle 0.2s infinite;` - to make it jiggle forever

```css
.shake img {
    animation: jiggle 0.2s infinite;
    transform: rotate(-3deg);
    animation-iteration-count: 10;
}

@keyframes jiggle {
    0% {
        transform: rotate(-1deg);
    }
    50% {
        transform: rotate(1deg);
    }
}

```

```js
  shake.addEventListener('click', function(){
    snackCollection.classList.toggle('shake');
  });
```