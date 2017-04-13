---
title: Vending Machine Project, Part 2
layout: post
date: 2000-01-11
permalink: vending-machine-project-part-2
program: front-end
tags: front-end
---

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
