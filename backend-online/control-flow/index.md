---
layout: lesson
---

# Control Flow

<a href="../">Back to Curriculum Index</a>

## Goals

- Describe the purpose of a conditional statement
- Write programs that incorporate `if`, `elsif`, and `else` portions of a conditional statement
- Engage in a productive struggle while you write programs without being taught 100% of what you need to know

## Control Flow

**Control Flow** refers to being able to determine what the program does given certain inputs. It controls the flow of the program!

**If statements** are a type of control flow. An if statement sets up different paths that the program can take depending on what is true at a given moment.

<div class="try-it-new">
  <h2>Try It: Reading if Statements</h2>
  <ol>
    <li>Look at the code in the repl below. Jot down your prediction of what will happen when we run this code.</li>
    <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/controlflowbasic?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    <li>Once you've made your predictions, run the code and look at the output. Review your original guesses and correct anything you wrongly predicted.</li>
  </ol>
  <p><em>Finished Early?</em> How could you modify this code so that it doesn't matter whether or not the user types capital letters or lower case letters?</p>
</div>

Great! Let's make it slightly more complicated:

<div class="try-it-new">
  <h2>Try It: Reading if/elsif/else Statements</h2>
  <ol>
    <li>Look at the code in the repl below. Jot down your prediction of what will happen when we run this code.</li>
    <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/controlflowifelsif?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    <li>Once you've made your predictions, run the code and look at the output. Review your original guesses and correct anything you wrongly predicted.</li>
  </ol>
  <p><em>Finished Early?</em> Without adding any new lines of code (just modifying existing lines), could you make it say "Correct!" for **either** Chocolate Chip **or** Peanut Butter?</p>
</div>

## Solving Problems Without Knowing Everything

As a programmer, you will constantly be solving problems that you don't necessarily know how to solve. This is the fun of coding! Coding involves solving puzzles, guess-and-check, and figuring things out.

The next Try It section asks you to build something, but we have only taught you about 80% of what you need to know in order to build this! 🙀 This is meant to mimic how projects work at Turing -- we purposefully leave out key pieces of information so that you get practice Googling and reading documentation in order to build a solution.

Luckily for you, we won't make this _too_ difficult today. The following resources should lead you down the right track:

- <a href="https://stackoverflow.com/questions/22640570/i-have-a-simple-odd-or-even-test-in-ruby-but-its-not-working" target="blank">A Stackoverflow post on Ruby even/odd methods</a>
- <a href="https://riptutorial.com/ruby/example/16995/even-and-odd-numbers" target="blank">even? and odd? methods in Ruby</a>
- Spicy: <a href="https://stackoverflow.com/questions/3517238/what-does-the-operator-do-in-ruby-in-n-2" target="blank">Modulo operator</a>

<div class="try-it-new">
  <h2>Try It: Control Flow</h2>
  <p>Create a new repl. Write a program that asks a user for a piece of text. It would output "even" if the number of characters in the text is even, and "odd" if the number of characters in the text is odd.</p>
  <p>This is what the program should look like when it runs:</p>
  <pre>Enter a piece of text:
Turing
Even!</pre>
<p>Try running your program a few times with different inputs.</p>
  <p><em>Finished Early?</em></p>
  <ul>
    <li>Can you make your program tell the user not only if a word has an even or odd number of characters, but also how many characters they entered? For example, your program would say: Even! (6) or Odd! (3)</li>
    <li>Can you make your program only count characters, but ignore spaces? For example, if the user types in chocolate chip cookies are the best, your program should return 30, not 35. It might help to google something like how do you ___________ in Ruby?</li>
  </ul>
</div>
