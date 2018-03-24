---
title: Final Project Implementation
layout: post
date: 2015-01-10
permalink: final-project-implementation
program: teachers
tags: teachers
---

The HTML:

```html
<button>Group Generator</button>

<div></div>
```


The JavaScript:

```js
var targetButton = document.querySelector('button')

targetButton.addEventListener('click', function(){
  document.querySelector('div').innerHTML = ""
  var names = prompt("Enter the names for your students:").split(",")
  var groupSize = parseInt(prompt("What is your group size?"))
  var shuffledNames = _.shuffle(names)
  for(var i = 0; i < shuffledNames.length; i += groupSize) {
    var group = shuffledNames.slice(i, i + groupSize)
    document.querySelector('div').innerHTML += "<li>" + group + "</li>"
  }
})
```
