---
title: Rock Paper Scissors Project Extensions
layout: post
date: 2000-01-12
permalink: rock-paper-scissors-project-part-3
program: front-end
tags: front-end
lessontype: fe-new
---

The following extensions are ways to improve the user interface and user experience (UI/UX), pick any of them and give them a try!

## Extension: make the game playable against a real opponent!

Can you add functionality so two people could play against each other, instead of one player against a randomly generated guess?

Consider what would need to change or be added!

- Perhaps a separate set of buttons for the player and the opponent
- Our `setOpponentShot` function would need to be edited to resemble the `setPlayerShot` function ...
  - or perhaps we could make one function that takes in not only the guess but which player is guessing

## Extension: Show the player's win/loss percentages!

Can you add some more information about the player's performance?

You will need to:

- edit the HTML to add an element to display the percentage
- create a variable in your JavaScript targeting that element
- keep track of how many matches there have been
- write a function that will calculate the percentage based on the player's and opponent's scores and the number of matches played
- update and display that percentage in the HTML element you created

## Conclusion

We hope you enjoyed trying out some fun extensions! Take a look at our implementations if you're curious!

<p data-height="265" data-theme-id="0" data-slug-hash="OZdLZb" data-default-tab="js,result" data-user="letak" data-embed-version="2" data-pen-title="TryCoding-ROCKPAPERSCISSORS-COMPLETED" class="codepen">See the Pen <a href="https://codepen.io/letak/pen/OZdLZb/">TryCoding-ROCKPAPERSCISSORS-COMPLETED</a> by Leta Keane (<a href="https://codepen.io/letak">@letak</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
