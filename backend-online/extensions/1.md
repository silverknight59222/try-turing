---
layout: lesson
---

# Extensions

<a href="../">Back to Curriculum Index</a>

Congratulations on finishing a crash course in Ruby programming! Below are some exercises you can try on your own to continue your learning.

## Print all items after every insertion

Modify your todo list so that the user sees the entire list of todo items after each new entry.

Interaction pattern:

<pre>
Add an item to your todo list or press 'e' to exit:
unpack suitcase
-----
Todo:
unpack suitcase
-----
Add an item to your todo list or press 'e' to exit:
bring ballot to drop box
-----
Todo:
unpack suitcase
bring ballot to drop box
-----
Add an item to your todo list or press 'e' to exit:
finish reading book
-----
Todo:
unpack suitcase
bring ballot to drop box
finish reading book
-----
</pre>

## Give each item a number

Use <a target="blank" href="https://repl.it/@turingschool/Iteration-With-Numbers">this example</a> of a concept called "iteration" to print out a number next to each item in your todo list. 

Interaction pattern:

<pre>
Add an item to your todo list or press 'e' to exit:
unpack suitcase
-----
Todo:
0. unpack suitcase
-----
Add an item to your todo list or press 'e' to exit:
bring ballot to drop box
-----
Todo:
0. unpack suitcase
1. bring ballot to drop box
-----
Add an item to your todo list or press 'e' to exit:
finish reading book
-----
Todo:
0. unpack suitcase
1. bring ballot to drop box
2. finish reading book
-----
</pre>

## Allow deleting of items

This one is a little trickier, and there are numerous ways to implement this. Add code so that if a user enters "d 1", it will delete the item at position 1, etc. 

[This documentation](https://ruby-doc.org/core-2.5.1/String.html#method-i-start_with-3F) of the `start_with?` method in Ruby might help! You'll also need to include an `if` statement. 

Interaction pattern:

<pre>
Add an item to your todo list or press 'e' to exit:
unpack suitcase
-----
Todo:
0. unpack suitcase
-----
Add an item to your todo list or press 'e' to exit:
bring ballot to drop box
-----
Todo:
0. unpack suitcase
1. bring ballot to drop box
-----
Add an item to your todo list or press 'e' to exit:
finish reading book
-----
Todo:
0. unpack suitcase
1. bring ballot to drop box
2. finish reading book
-----
Add an item to your todo list or press 'e' to exit:
d 0
-----
Todo:
0. bring ballot to drop box
1. finish reading book
-----
</pre>


## Write list to a file

Once the user presses "e", write their todo list to a file so that they don't lose it. Use <a target="blank" href="https://repl.it/@turingschool/File-Writing">this example</a> to see how to write to a file.
