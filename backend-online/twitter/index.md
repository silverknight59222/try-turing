---
layout: lesson
---

# Twitter

<a href="../">Back to Curriculum Index</a>

## Goals

- Define API
- Use the Twitter API to interact with an existing application from our own code

## APIs

An Application Programming Interface, or API, is a set of instructions or rules for how something should interface with another thing. In our case, Twitter has defined some expectations for what data you can ask for, how you can post new data, and how you write your request for those pieces of functionality.

In these three Twitter Project sections, we'll start by posting tweets from our code, then you'll move into searching for hashtags, saving tweets to files, auto-replying to tweets by keyword, and auto-following accounts.

We'll start Part 1 here in class, but the remainder is meant as a take-home project. We hope that you have fun with it!

## Setup

Fair warning, the code for this setup portion can look a little confusing 😬. Instead of diving into the details of what everything in the setup is doing, we will just look at a high-level overview and trust that the pieces will do their jobs.

- If your last name starts with A-E, [use this repl](https://repl.it/@ameseee/twitterpart11turing)
- If your last name starts with F-J, [use this repl](https://repl.it/@ameseee/twitterpart12turing)
- If your last name starts with K-O, [use this repl](https://repl.it/@ameseee/twitterpart14turing)
- If your last name starts with P-T, [use this repl](https://repl.it/@ameseee/twitterpart17turing)
- If your last name starts with U-Z, [use this repl](https://repl.it/@ameseee/twitterpart19turing)

### Installing the Gem

First, we'll install a Gem (which is a piece of code written by someone else) that we can use to interact with Twitter via Ruby. If we use the Lincoln Logs analogy again, installing the Twitter Gem is like going to the toy store and buying a box of Lincoln Logs, pieces we'll use to build our application.

Because we're using repl.it (an online platform), we will need to do this slightly differently than how we normally would if we were working locally on our computers.

The block of code below will allow us to "install" the Twitter gem so that we can use it in our projects.

```ruby
require 'bundler/inline'
gemfile true do
 source 'http://rubygems.org'
 gem 'twitter'
end
```

Now that we have our "box" of code from the store, we need to open it up so that we can use it in our program. We do that with these lines of code:

```ruby
require 'twitter'
client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ""
  config.consumer_secret     = ""
  config.access_token        = ""
  config.access_token_secret = ""
end
```

These keys and secret tokens are how our program will identify itself to Twitter. It's kind of like a username and password, but for computer programs instead of people.

Inside of the empty quotation marks (""), keys and tokens from pre-made accounts have been filled into your starter repl.

<div class="try-it-new">
  <h2>Tweeting from the Command Line</h2>
  <p>If you look at what you have so far in your program, we've created a variable called <code>client</code>. This client is kind of like a hidden tunnel to Twitter <b>not</b> through a web browser. We can use that variable to interface with Twitter.</p>
  <p>For example, we can call the <code>update</code> method on our <code>client</code> object. If we pass a string into the update method, it should get tweeted to our account! Go ahead and write your own line of code, similar to the one below, underneath your existing configuration code. Please keep your tweets PG and non-political!</p>
  <pre>client.update("I'm learning how to code at Turing School!")</pre>
  <p>When you click the run button, repl will download the Twitter Gem, run your program, and send a tweet to the world!</p>
  <p>In the box below, type the name of the account you're using, then click <b>Open Twitter Account</b>.</p>
  <p>🎉 Tada! 🎉 Your tweet should be posted.</p>
  <input style="width: 370px" type="text" id="twitterurl" placeholder="Account name (1_turing, 2_turing, etc.)">
  <button id="twitterbutton2">Open Twitter Account</button>
</div>

## Your Turn

Now that you've got the setup down, it's time to add some more interesting functionality. You will use the same repl that you already have, just modifying it to conform to the specifications below.

<div class="try-it-new">
  <h2>Try It: Old School Twitter</h2>
  <p>In November of 2017, Twitter upped its character limit to 280 per tweet. We're going to roll back the clock and restrict users to the previous limit of 140 characters.</p>
  <p>Write a program that asks a user for text to use for a tweet. If the text is less than or equal to 140 characters, tweet it! If it is longer than 140 characters, tell the user that their tweet was too long.</p>
  <p>You already know that the <code>client.update(...)</code> line is what actually sends off a tweet. Can you embed that somewhere in an <code>if/else</code> statement so that the message <strong>only</strong> gets tweeted if it's within the length parameters?</p>

  <div class="spicy-container">
    <p class="spicy-click">🌶 Click here for a Spicy Challenge 🌶</p>
    <div class="spicy-toggle">
      <p>Can you modify your program so it continues to prompt the user until they enter a tweet that is less than 140 characters? <em>Hint: You'll need a loop 🍩!</em></p>
    </div>
  </div>
</div>

## Filter by Hashtag

Let's say that we wanted to be able to search for tweets with the hashtag #learntocode and save them to a file that we can access later. First, we'll need to set up a program that can search when given a hashtag.

Back on repl.it, create a new repl. Choose the Ruby programming language, and name the repl `twitter_part_2`.

Next, prepare the setup for this file - copy and paste the setup code from your `twitter_part_1`.

Next, we'll add a new bit of code. Copy and paste this, run it, and look at your output. Try changing up the hashtag (#learntocode) to see what you get.

```ruby
client.search("#learntocode").each do |tweet|
  puts "#{tweet.user.name}: #{tweet.text}"
end
```

<div class="try-it-new">
  <h2>Try it: Searching Dynamic Values</h2>
  <p>
    Right now, we've hard-coded the #learntocode hashtag. Modify your program so that it asks the user what hashtag they want to search, then uses that value to search Twitter. Try it out to make sure it works.
  </p>
</div>

<a href="../">Back to Curriculum Index</a>

<script>
  var openTwitterButton = document.querySelector('#twitterbutton2');
  openTwitterButton.addEventListener('click', function(){
    var twitterAccount = document.querySelector('#twitterurl').value
    document.querySelector('#twitterurl').value = ""
    var win = window.open(`http://twitter.com/${twitterAccount}`, '_blank');
    win.focus();
  })
</script>
