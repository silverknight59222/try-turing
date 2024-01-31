---
layout: lesson
---

### Go Back

- [Welcome and Introductions](../)
- [Ruby Introduction](../ruby-intro)

# Ruby Methods

Depending on the data type, we can use some built-in Ruby methods to manipulate the data!

## String Methods

In the spirit of _exploring to learn_, take a look at the code below. What do you think will happen when you run it?

```ruby
first_name = "osCAr"
puts "Hello, #{first_name}!"
puts "Hello, #{first_name.capitalize}!"
```

<div class="try-it-new">
  <h3>Try It: Exploring String Methods</h3>
  <p>Read the code above and predict what will happen when you run it. Try to explain why.</p>
  <p>Now, type or copy and paste the code into your replit and run it. Was your prediction correct?</p>
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
      <li>Ruby provides a variety of <code>methods</code> that can be used specifically on Strings - we can think of them as actions.</li>
      <li>A Ruby developer doesn't need to memorize every method that is available; some will be used regularly but others won't. For this reason, developers rely heavily on resources like <a target="blank" href="https://ruby-doc.org/core-3.0.1/String.html">ruby-doc.org</a>!</li>
    </ul>
  </div>
</div>

### The rand() Method

There are some methods that can be used for a specific purpose without having data to manipulate. The <code>rand()</code> method returns a random integer. When the <code>rand()</code> method is called with no arguments, it returns a decimal value greater than or equal to 0 and less than 1.

```ruby
random_value = rand()
puts random_value
# => 0.7893798326241
```

To get a random integer, you can pass in an integer as an argument, between the parenthesis. The <code>rand()</code> method returns an integer value that is greater than or equal to 0 and less than the integer passed in.

```ruby
random_value = rand(6)
puts random_value
# => 5
```

You can also pass in a range for the <code>rand()</code> method. To use an inclusive range, use two dots. For a non-inclusive range, use three dots. The following example shows how to use an inclusive range as the argument with a lower limit of 1 up to (and including) the upper limit of 20.

```ruby
random_value = rand(1..20)
puts random_value
# => 20
```


<div class="try-it-new">
  <h3>Try It: Using the rand() Method</h3>
  <p>Back in your sandbox replit, solve each of the challenges below.</p>
  <ol>
    <li>Store a random number between 1 and 99, inclusive of 99, in a variable called <code>random_num</code>. Use puts or print and run your code a few times to verify the result.</li>
    <li>Create a variable named <code>lottery_number</code> assigned to a random six-digit number.</li>
  </ol>
</div>


### Up Next

- [Control Flow](../control-flow)