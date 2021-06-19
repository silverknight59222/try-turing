---
layout: lesson
---

# Arrays

<a href="../">Back to Curriculum Index</a>

## Goals

- Understand how arrays are used in real web applications
- Store multiple pieces of data in on variable using an array
- Use developer skills to discover how arrays work

## Collections & Lists - in Our Daily Lives

Before we talk about this concept of Arrays in the context or programming or Ruby, let's connect it to some real-world examples. 

We can think of an Array as a collection or list that contains items of the same type. Some examples follow:
- I can write a grocery list of all the things I need to get from the store today.
- I have a jar that holds all my writing utensils - pens, pencils, highlighters. 
- I have a cabinet full of coffee mugs in my kitchen

<div class="try-it-new">
  <h3>Share Out: Collections & Lists 1</h3>
  <p>Look around the space you are in - do you see a collection of anything? Do you keep lists physically written down?</p>
  <p>Type your example into the chat. Don't send the message yet; we'll all send them at the same time!</p>
</div>

## Collections & Lists - in Applications

We have this idea of collections and lists down, but you may be wondering _"what does this have to do with building an app?"_ - great question!

Let's now brainstorm some collections or lists we see when using web or mobile applications. Some examples follow: 
- On my weather app, I see a list of the upcoming days and forecast for each of those days.
- On my workout app, I see a list of my completed workouts

<div class="try-it-new">
  <h3>Share Out: Collections & Lists 2</h3>
  <p>Think back to the app you mentioned earlier. Where do you, as a user, see a list?</p>
  <p>Type your example into the chat. Don't send the message yet; we'll all send them at the same time!</p>
</div>

## Arrays

Arrays are the structure that Ruby gives us to hold multiple pieces of data - like a collection or list!

>Arrays exist in most other programming languages as well; but the way we write the exact code probably differs a bit!

[We can also work through the following sections in this repl.it](https://replit.com/@turingschool/arrays-intro)

Just like Strings, we always want to store our arrays in a variable. The variable name should be plural. In Ruby, we declare an _empty_ array like this:

```ruby
completed_workouts = []
```

Alternatively, you could start with items already in your array. Each item in an array is referred to as an `element`. Here's an array that holds Strings:

```ruby
completed_workouts = ["10 min arms", "30 min ride"]

puts completed_workouts
```

If we just want to acces one element from an array, we can use `bracket notation` and a number that corresponds with that element. As weird as it may seem, [counting starts with 0 in most programming languages.](https://skillcrush.com/blog/why-programmers-start-counting-at-zero/)

```ruby
completed_workouts = ["10 min arms", "30 min ride"]

puts completed_workouts[0]
# "10 min arms"

puts completed_workouts[1]
# "30 min ride"
```

### Adding Elements

You can also add items to your array using the `shovel operator`, like so:

```ruby
completed_workouts = ["10 min arms", "30 min ride"]
completed_workouts << "15 min stretch"
completed_workouts << "20 min HIIT"

print completed_workouts
#the completed_workouts array now holds 4 elements
```

<div class="try-it-new">
  <h3>Try It: Arrays in your App</h3>
  <p>Earlier, you brainstormed your favorite or most-used app, and a place where an array would be used in it. Using that idea, let's get to work!</p>
  <ol>
    <li>In a repl.it, create a new variable that holds an array. This array should hold data (yes, faked data) related to your brainstorm from above. Your array can hold as many elements as you'd like it to!</li>
    <li>Practice using <code>bracket notation</code> to print out an individual element from your array.</li>
    <li>Lastly, use the <code>shovel operator</code> to add at least one element to your array. Make sure to print or puts our your array after doing so, to verify that the new element is being stored.</li>
  </ol>
</div>

### Removing Elements

There are many ways we can remove elements from an array. The code below demonstrates the `pop` and `shift` array methods. They may remind you of the String methods we learned earlier (`capitalize`, `upcase`, etc.) - and that is spot-on!

Read the code below to process and familiarize yourself with it; we haven't yet discovered how `pop` and `shift` work:

```ruby
completed_workouts = ["10 min arms", "30 min ride", "15 min stretch"]
completed_workouts.pop
print completed_workouts

followers = ["@letacodes", "@j3", "@jwanliu"]
followers.shift
print followers
```

<div class="try-it-new">
  <h3>Try It: Removing Elements</h3>
  <p>In the same repl.it you've been working on your arrays, try using the <code>pop</code> and/or <code>shift</code> methods. Use <code>puts</code> or <code>print</code> statements to compare the before and after, and see if you can deduce how they work!</p>
  <p>Please be ready to share out!</p>
</div>

<div class="expander expander-lesson">
  <header>
    <h2 class="spicy-click">Takeaways</h2>
    <div>
      <button class="expander-btn">
          <img
            src="../../assets/icons/arrow.svg"
            alt="expander arrow icon" />
      </button>
    </div>
  </header>

  <div class="hide">
    <p>We have introduced a LOT of new vocabulary today, and particularly in this section on arrays. If it feels like a lot to you, that's because it IS. What follows are definitions for the technical vocabulary that we've used up until now.</p>
    <ul>
      <li><code>variable</code> - a container that stores data in our program</li>
      <li><code>array</code> - a list or collection of many pieces of data, usually of the same type</li>
      <li><code>element</code> - an individual pieces of data in an array</li>
      <li><code>bracket notation</code> - the use of <code>[</code> and <code>]</code> used after the name of an array to access an individual element</li>
      <li><code>shovel operator</code> - a tool to add an element to the end of an array (<code><<</code>)</li>
      <li><code>array methods</code> - functionality that is built-in to the Ruby language, specifically designed to be used for arrays</li>
    </ul>
  </div>
</div>
<br>

<a href="../project">Next: Final Project</a>

<a href="../wrap-up">Next: Info Session & Panel</a>
