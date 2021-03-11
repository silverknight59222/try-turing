---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Connecting OOP to Real-World Scenarios

In the introduction, we shared that Object Oriented Programming (OOP) is a paradigm for how we can organize code. Without seeing examples, that definition just feels... unhelpful. In this section, we won't dig into code quite yet, but we'll do some thinking and list making to set ourselves up to write code in the next section!

## Car Factory

Let's think about some components of the car factory that makes Fords. We may make some stuff up, but this analogy should help us build context for what OOP is.
- The factory has a machine that is designed to make a Ford Escape
- All Escapes have four wheels and four doors
- The color, interior fabric and engine size can vary from one Escape to another

With the information above, in theory, the manager at the factory should be able to say "please make a blue Escape with a leather interior and 2.5 cylinder engine", and that should be possible.

That example about the car factory tie directly to concepts of OOP. We will use three main technical terms today. They are below, with the connection to the car factory example:
- **`class`** - A class is like a blueprint or template. The factory machines are designed to make a car - that is the template for ALL Escapes. We could probably name it the _EscapeCar_ class.
- **`object/instance`** - An instance is an object that is made from the class template. The blue Escape that the manager requested (and was able to physically sit in and drive) is referred to as an object or instance of the _EscapeCar_ class.
- **`attribute`** - An attribute is a specific characteristic about an instance that has the potential of varying from other instances. With our Escapes, _color_, _interior_ and _engine_ would be attributes, because they weren't programmed into the template, but were extra information the manager was able to give.

<div class="try-it-new">
  <h2>Classes and Objects - At Home!</h2>
  <p>Pick an object that you see sitting around in your home. It could be a candle, water bottle, glove, anything!</p>  
  <p>Jot down the following, and be ready to share out with the group:</p>
  <ul>
    <li>What <em>type</em> of object is it? i.e., what might the class name be?</li>
    <li>Are there multiple objects/instances of it in your home, or in the world? List a few.</li>
    <li>What are some of its attributes?</li>
  </ul>
</div>

Are you still wondering how in the world this connects to writing software? That's what we'll discuss next!

<a href="../oop-code">Next: How to CODE these concepts</a>