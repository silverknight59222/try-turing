---
title: Vending Machine Project, Part 4
layout: post
date: 2000-01-13
permalink: vending-machine-project-part-4
program: front-end
tags: front-end
---

```js
var purchases = document.getElementById('snack-purchases');

purchases.addEventListener('click', function(event){
  if(event.target.className == 'snack'){
    var snack = event.target;
    snack.remove()
  };
});
```