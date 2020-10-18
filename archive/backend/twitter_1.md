---
title: "Twitter Project: Part 1"
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 7
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Define "API"</li>
        <li>Use the Twitter API to interact with an existing application from our own code</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/handshake.png" alt="Handshake">
      <h2 class="section-header">APIs</h2>
      <p>An <span class="vocab">Application Programming Interface</span>, or API, is a set of instructions or rules for how something should interface with another thing. In our case, Twitter has defined some expectations for what data you can ask for, how you can post new data, and how you write your request for those pieces of functionality.</p>
      <p>In these three Twitter Project sections, we'll start by posting tweets from our code, then you'll move into searching for hashtags, saving tweets to files, auto-replying to tweets by keyword, and auto-following accounts.</p>
      <p>We'll start Part 1 here in class, but the remainder is meant as a take-home project. We hope that you have fun with it!</p>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/blocks.png" alt="Kids setting up blocks">
      <h2 class="section-header">Setup</h2>
      <p>Fair warning, the code for this setup portion can look a little confusing 😬. Instead of diving into the details of what everything in the setup is doing, we will just look at a high-level overview and trust that the pieces will do their jobs.</p>
      <p>Back on repl.it, create a new repl by clicking the <img style="height: 1.5em" src="{{ site.url }}/assets/images/newrepl.png" alt="New Repl button"> button near the top right corner. Choose the Ruby programming language, and name the repl <code>twitter_part_1</code>.</p>
      <h4>Installing the Gem</h4>
      <p>First, we'll install a Gem (which is a piece of code written by someone else) that we can use to interact with Twitter via Ruby. If we use the Lincoln Logs analogy again, installing the Twitter Gem is like going to the toy store and buying a box of Lincoln Logs, pieces we'll use to build our application.</p>
      <p>Because we're using repl.it (an online platform), we will need to do this slightly differently than how we normally would if we were working locally on our computers.</p> 
      <p>Don't worry too much about the meaning of the individual lines. The block of code below will allow us to "install" the Twitter gem so that we can use it in our projects.</p>
      <pre>require 'bundler/inline'
gemfile true do
 source 'http://rubygems.org'
 gem 'twitter'
end</pre>
      <p>Now that we have our "box" of code from the store, we need to open it up so that we can use it in our program. We do that with these lines of code:</p>
      <pre>require 'twitter'
client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ""
  config.consumer_secret     = ""
  config.access_token        = ""
  config.access_token_secret = ""
end</pre>
      <h4>Identifying Ourselves</h4>
      <p>These keys and secrets are how our program will identify itself to Twitter. It's kind of like a username and password, but for computer programs instead of people.</p>
      <p>Inside of the empty quotation marks (<code>""</code>), we'll paste in keys and tokens from pre-made accounts. <b>Your instructor will give you the link where these credentials are stored.</b></p>
      <p>The keys and tokens below are <b>fake</b>, but your program should look kind of like this now:</p>
      <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/twitterpart1fake?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
      <div class="try-it">
        <h2>Tweeting from the Command Line</h2>
        <p>If you look at what you have so far in your program, we've created a variable called <code>client</code>. This client is kind of like a hidden tunnel to Twitter <b>not</b> through a web browser. We can use that variable to interface with Twitter.</p>
        <p>For example, we can call the <code>update</code> method on our <code>client</code> object. If we pass a string into the update method, it should get tweeted to our account! Go ahead and write your own line of code, similar to the one below, underneath your existing configuration code. Please keep your tweets PG and non-political, please!</p>
        <pre>client.update("I'm learning how to code at Turing School!")</pre>
        <p>When you click the run button, repl will download the Twitter Gem, run your program, and send a tweet to the world!</p>
        <p>In the box below, type the name of the account you're using, then click <b>Open Twitter Account</b>.</p>
        <p>🎉 Tada! 🎉 Your tweet should be posted.</p>
        <input style="width: 370px" type="text" id="twitterurl" placeholder="Account name (1_turing, 2_turing, etc.)">
        <button id="twitterbutton">Open Twitter Account</button>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/graduation.png" alt="Graduation hat">
      <h2 class="section-header">Your Turn</h2>
      <p>Now that you've got the setup down, it's time to add some actual functionality. You will use the <b>same repl</b> that you already have, just modifying it to conform to the specifications below.</p>
      <div class="try-it">
        <h2>Try it: Old School Twitter</h2>
        <p>In November of 2017, Twitter upped its character limit to 280 per tweet. We're going to roll back the clock and restrict users to the previous limit of 140 characters.</p>
        <p>Write a program that asks a user for text to use for a tweet. If the text is less than or equal to 140 characters, tweet it! If it is longer than 140 characters, tell the user that their tweet was too long.
        </p>
        <p>You already know that the <code>client.update(...)</code> line is what actually sends off a tweet. Can you embed that somewhere in an <code>if/else</code> statement so that the message <b>ONLY</b> gets tweeted if it's the correct length?</p>
        <p>Don't worry about creating a loop for now. This should be a one-shot deal for the user.</p>
        <div class="spicy">
          <h4 class="spicy-click">🌶 Spicy Challenge 🌶 <small>(click!)</small></h4>
          <div class="spicy-appear">
            <ol>
              <li>Can you modify your program so it continues to prompt the user until they enter a tweet that is less than 140 characters? Hint: You'll need a loop 🍩!</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<script>
  $( ".spicy-click" ).click(function(e) {
    $( e.target ).next( ".spicy-appear" ).slideToggle( "slow" );
  });
</script>
<script
src="https://code.jquery.com/jquery-3.2.1.min.js"
integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
crossorigin="anonymous"></script>
<script>
  var openTwitterButton = document.querySelector('#twitterbutton');
  openTwitterButton.addEventListener('click', function(){
    var twitterAccount = document.querySelector('#twitterurl').value
    document.querySelector('#twitterurl').value = ""
    var win = window.open(`http://twitter.com/${twitterAccount}`, '_blank');
    win.focus();
  })
</script>
