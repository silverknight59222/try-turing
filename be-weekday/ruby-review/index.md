---
layout: lesson
---

# Ruby Review

<a href="../">Back to Curriculum Index</a>

## Goals

- Use the repl.it interface comfortably
- Identify different between `puts` and `print`
- Explore, then explain what String methods can help us do

## Review what we know, puts vs. print

Using [the repl.it we just forked](https://replit.com/@turingschool/puts-vs-print#main.rb), complete the activity that follows:

<div class="try-it-new">
  <h3>Try It: Exploring puts vs. print</h3>
  <p>Read the Ruby code in the repl.it and predict what will happen when it is run. With the concepts and vocabulary you learned in the prework, try to explain why! Be ready to share out.</p>
  <p>Now, run the repl.it.</p>
  <p>Last, change both instances of <code>puts</code> to <code>print</code>. Observe the change in output. What does that tell you about the job that each command has?</p>
</div>

<div class="expander expander-lesson">
  <header>
    <h3 class="spicy-click">Takeaways</h3>
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
      <li><code>print</code> and <code>puts</code> are both classified as <code>commands</code> that are built into the Ruby language.</li>
      <li><code>print</code> will print each value it is instructed to. <code>print</code> statments written on different lines of code will not appear on different lines in the output.</li>
      <li><code>puts</code> will also print each value it is instructed to; but it <strong>will</strong> create line breaks between each <code>puts</code> statement.</li>
    </ul>
  </div>
</div>
<br>

## String Methods

In the spirit of _exploring to learn_, we aren't gong to tell what what exactly the code below does - not _yet_.

```ruby
friend = "osCAr"
puts "Hello, #{first_name}!"
puts "Hello, #{first_name.capitalize}!"
```

<div class="try-it-new">
  <h3>Try It: Exploring Methods</h3>
  <p>Read the code above and predict what will happen when it is run. Try to explain why.</p>
  <p>Now, type or copy and paste the code into your repl.it and run it - does that verify or falsify your prediction?</p>
  <p>Then, change <code>capitalize</code> to <code>upcase</code>, then <code>downcase</code>, then <code>reverse</code>. Re-run the code each time to change it, and observe the output.</p>
</div>

<div class="expander expander-lesson">
  <header>
    <h3 class="spicy-click">Takeaways</h3>
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
      <li>Ruby provides a variety of <code>methods</code> that can be used specifically on Strings - we can think of them as actions!</li>
      <li>A Ruby developer doesn't need to memeorize every method that is available; some will be used regularly but others won't. For this reason, resources like <a target="blank" href="https://ruby-doc.org/core-3.0.1/String.html">Ruby-Doc.org</a> are heavily relied upon by developers!</li>
    </ul>
  </div>
</div>
<br>

<a href="../user-input">Next: User Input</a>