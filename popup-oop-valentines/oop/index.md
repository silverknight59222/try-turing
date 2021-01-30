---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# OOP & Candy Factory

In the introduction, we shared that Object Oriented Programming (OOP) is a paradigm for how we can organize code. Without seeing examples, that definition just feels... unhelpful. In this section, we won't dig into code quite yet, but we'll do some thinking and list making to set ourselves up to write code in the next section!

## Candy Factory

Let's think about some components of the candy factory that makes the conversation hearts. We may make some stuff up, but this analogy should help us build context for what OOP is.
- The factory has machinery that is designed to make LOTS of tiny, chalky candies
- All candies have the same size and shape
- The color and message printed on top does change
- (For now, we won't worry about the packaging of the hearts)

With the information above, in theory, the manager at the factory should be able to say "make me a blue heart with the message of 'dream big' and a yellow heart with the message of 'love you'", and that should be possible.

<img class="small-img" src="{{ site.url }}/assets/images/conversation-hearts.jpg" alt="Huge pile of conversation heart candies in various pastel colors.">

That example about the Candy Factory tie directly to concepts of OOP. We will use three main technical terms today. They are below, with the connection to the Candy Factory example:
- **`class`** - A class is like a blueprint or template. The factory machines are designed to make a certain sized heart shape candy with a certain material - that is the template for ALL candies. We could probably name it the _Candy_ class.
- **`instance`** - An instance is an object that is made from the class template. The blue and yellow candies that the manager requested, then later held in her hand, are instances of the Candy class.
- **`attribute`** - An attribute is a specific characteristic about an instance that has the potential of varying from other instances. With out candy hearts, _color_ and _message_ would be attributes, because they weren't programmed into the template, but were extra information the manager was able to give.

<div class="try-it-new">
  <h2>Classes and Objects - At Home!</h2>
  <p>Pick an object that you see sitting around in your home. It could be a candle, water bottle, glove, anything!</p>  
  <p>Jot down the following, and be ready to share out with the group:</p>
  <ul>
    <li>What type of object is it? i.e., what might the class name be?</li>
    <li>Are there multiple instances of it in your home, or in the world? List a few.</li>
    <li>What are some of its attributes?</li>
  </ul>
</div>

Are you still wondering how in the world this connects to writing software? That's what we'll discuss next!

<a href="../class-syntax">Next: How to CODE these concepts</a>