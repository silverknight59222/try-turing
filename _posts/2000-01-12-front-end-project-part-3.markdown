---
title: Vending Machine Project, Part 3
layout: post
date: 2000-01-12
permalink: vending-machine-project-part-3
program: front-end
tags: front-end
---

## Extension: Allow the User to Click a Snack!

Right now the user has to KNOW what the names of all the snacks are. Wouldn't it be nice if the user could click a snack and buy it?


```js
var submitButton = document.getElementById('snack-submit');
var inputField = document.getElementById('snack-input');
var message = document.getElementById('flash-message');
var snackCollection = document.getElementById('snack-collection');

submitButton.addEventListener('click', function(){
  var value = inputField.value;
  var snack = document.getElementById(value);
  if(snack) {
    purchases.appendChild(snack);
    message.textContent = 'Enjoy your ' + value;
  } else {
    message.textContent = 'Sorry! I am out of that!';
  }
});

snackCollection.addEventListener('click', function(event){
  if(event.target.className == 'snack'){
    var snack = event.target;
    var snackName = snack.id;
    inputField.value = snackName;
    purchases.appendChild(snack);
    message.textContent = 'Enjoy your ' + snackName;
  }
});
```




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