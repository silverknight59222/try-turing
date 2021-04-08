---
layout: lesson
---

# Arrays

<a href="../">Back to Curriculum Index</a>

## Goals

- Store multiple pieces of data in on variable using an array

## The Array

An array is like a box you can use to contain **multiple** things, such as strings or integers. In programming, we declare an array like this:

```ruby
names = []
```

This is called an empty array.

Alternatively, you could start with items already in your array. Here's an array of strings:

```ruby
names = ["Kenny", "Marisol", "Ruben", "Hanna"]

puts names
```

You can also add items to your array using the "shovel" syntax, like so:

```ruby
names = ["Kenny", "Marisol", "Ruben", "Hanna"]
names << "Brittany"
names << "Hugo"

print names
```

Finally, you can use the method `delete_at()` to remove an item from the array. Copy and paste the code below into your repl.it. 

Use the following guided experiments to figure out what is happening with position numbers:
1. What name do you expect to be removed by running `names.delete_at(1)`? What name is actually deleted?
2. Change the position number from `1` to `0`. What happens?
3. What position number would you need to use in order to delete Hanna?
4. Change the position number to `9`. What happens?
5. What can you conclude about position numbers in arrays?

```ruby
names = ["Kenny", "Marisol", "Ruben", "Hanna", "Brittany", "Hugo"]

puts "-----Before the delete:-----"
puts names

names.delete_at(1)

puts "-----After the delete:-----"
puts names
```

<div class="try-it-new">
  <h2>Try It: Arrays</h2>
  <p>Fork <a target="blank" href="https://repl.it/@turingschool/Favorite-Foods">this repl</a> to your own account. </p>
  <p><b>Part 1:</b> Add code to make it so that the program asks the user for their favorite lunch food, favorite dinner food, and favorite dessert. Once you have those items, print them out for the user.</p>
  <p><b>Part 2:</b> Add one more question that asks the user to enter the <b>INDEX POSITION</b> of the item they'd like to delete. Note that when you get the user's input, you'll need to use <code>gets.chomp.to_i</code> in order to use the input as a number instead of a string. Then delete that from your array and re-print their foods list.</p>
  <p>This is an example of how your program should function:</p>
  <pre>What is your favorite breakfast food?
hash browns
What is your favorite lunch food?
turkey sandwiches
What is your favorite dinner food?
angel hair pasta
What is your favorite dessert?
cheesecake
------------------------------
Great! Your favorite foods are:
hash browns
turkey sandwiches
angel hair pasta with red sauce
cheesecake
Enter the index position of the item you'd like to delete:
1
------------------------------
Your favorite foods are now:
hash browns
angel hair pasta with red sauce
cheesecake</pre>

  <div class="spicy-container">
    <p class="spicy-click">🌶Spicy Challenge🌶</p>
    <div class="spicy-toggle">
    <p><strong>Challenge #1:</strong> It's not very intuitive for a user to enter "0" to delete the <b>first</b> item in their list. Can you modify the user's input number to match with how they probably expect the program to function? This means that if they enter "1", your program should delete the very first item in the list, not the second item.</p>
    <p><strong>Challenge #2:</strong> Use <a target="blank" href="https://repl.it/@turingschool/Iteration-Example">this example</a> of a concept called "iteration" in order to insert an asterisk (or another symbol of your choice) before each item when they're printed out.</p>
    </div>
  </div>
</div>

<a href="../extensions">Next: Extensions</a>

<a href="../wrap-up">Next: Info Session & Panel</a>
