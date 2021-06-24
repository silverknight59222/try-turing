---
layout: lesson
---

# User Input

<a href="../">Back to Curriculum Index</a>

## Goals

- Prompt a user to enter an input value and use that value in your program
- Use developer skills to build an understanding of what unfamiliar code is doing

## Getting User Input

Our programs haven't been very exciting so far because we already know what will happen just by looking at the code. What if your program incorporated input from the user?

**Directions:**

1. <a href="https://replit.com/@turingschool/ColdPowderblueMeasurements" target="blank">Read the code in this repl.it</a> and *guess* what it will do. (It is also available below, if you prefer to preview it here)
2. Run the program. It's interactive, so be ready to type in your answers in the console area.

<iframe frameborder="0" width="100%" height="600px" src="https://replit.com/@turingschool/Getting-User-Input?lite=true"></iframe>

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
    <ul>
      <li>Instead of manually typing in every value, we can collect values from our user to provide a dynamic experience</li>
      <li>When the code is being read, it will stop at <code>gets.chomp</code> and wait for the user to type input into the console</li>
      <li><code>gets</code> collects a string from the console, <code>chomp</code> removes the final character which is the enter/return</li>
    </ul>
  </div>
</div>
<br>

<div class="try-it-new">
  <h3>Try It: Getting User Input</h3>
  <p>Write a small program that asks a user theirs dogs name, then responds with a sentence of your choice! <em>Consider: what variable name will you use to label that user input?</em></p>
  <div class="spicy-container">
    <p class="spicy-click"><span role="img" aria-label="spicy pepper">🌶</span> Finished Early? Click here for a challenge! <span role="img" aria-label="spicy pepper">🌶</span></p>
    <div class="spicy-toggle">
      <p>How could you modify this code so that the dogs name is capitalized correctly, no matter how they entered it?</p>
    </div>
  </div>
</div>

## Multiple User Inputs

We know how to get one input from a user. How do we go about getting multiple inputs?

<div class="try-it-new">
  <h3>Try It: Getting Multiple User Inputs</h3>
  <p>Write a program that asks a user for 3 questions. If you're not feeling creative, ask their <code>name</code>, <code>city</code>, and <code>age</code>. Output something like the following:</p>
  <pre>Your name is Amy and you live in Denver. Your are 100 years old.</pre>
  <p>Try running your program a few times with different values stored in the variables.</p>
  <div class="spicy-container">
    <p class="spicy-click">
      <span role="img" aria-label="spicy pepper">🌶</span> Option to try another Spicy Challenge <span role="img" aria-label="spicy pepper">🌶</span>
    </p>
    <div class="spicy-toggle">
      <p>Modify the program so that when you ask the user the second question, you use their first input, etc.</p>
    </div>
  </div>
</div>

<a href="../arrays">Next: Arrays</a>
