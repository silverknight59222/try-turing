---
title: "Twitter Project Extensions"
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 8
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <p>Let's say that we wanted to be able to search for tweets with the hashtag #learntocode and save them to a file that we can access later. First, we'll need to set up a program that can search when given a hashtag.</p>
      <h4 class="section-header">Preparing the Program</h4>
      <p>Back on repl.it, create a new repl by clicking the <img style="height: 1.5em" src="{{ site.url }}/assets/images/newrepl.png" alt="New Repl button"> button near the top right corner. Choose the Ruby programming language, and name the repl <code>twitter_part_2</code>.</p>
      <p>Next, prepare the setup like we did in the last session. <b>You can also just copy and paste the setup code from your <code>twitter_part_1</code></b>.</p>
      <pre>require 'bundler/inline'
gemfile true do
 source 'http://rubygems.org'
 gem 'twitter'
end

require 'twitter'
client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ""
  config.consumer_secret     = ""
  config.access_token        = ""
  config.access_token_secret = ""
end</pre>
    <p>Next, we'll add a new bit of code. Copy and paste this, run it, and look at your output. Try changing up the hashtag (<code>#learntocode</code>) to see what you get.</p>
    <pre>client.search("#learntocode").each do |tweet|
  puts "#{tweet.user.name}: #{tweet.text}"
end</pre>
      <div class="try-it">
        <h2>Try it: Searching Dynamic Values</h2>
        <p>
          Right now, we've hard-coded the #learntocode hashtag. Modify your program so that it asks the user what hashtag they want to search, then uses that value to search Twitter. Try it out to make sure it works.
        </p>
      </div>
    </section>
    <hr>
    <section>
      <h2 class="section-header">Saving to a File</h2>
      <p>Before we try to save Tweets, we need to learn how to write to files. Let's pause on our Twitter app and move into the interactive console (the dark part of the repl.it screen).</p>
      <p>Next, make and write to a file using this syntax:</p>
      <pre>my_file = File.open("my_file.txt", "w")

my_file.write("Hello, world!")
my_file.write("\n")
my_file.write("I am writing to a file!")
my_file.write("\n")
my_file.write("\n")
my_file.write("Here's another sentence that is two lines below the previous one.")

my_file.close</pre>
      <p>Try that out. In the left-hand side of repl.it, you should see a file appear called <code>my_file.txt</code> (which is what you named it when you said <code>File.open(...)</code>. What appeared? Why? Where are the spaces? </p>
      <div class="try-it">
        <h2>Try it: Saving Search Results</h2>
        <p>
          Modify your <code>twitter_search.rb</code> program so that whenever it runs, it saves the results to a text file. The file name should be based on what hashtag the user enters. For example, if they search "#denver", the results file should be called <code>results_for_#denver.txt</code>. Hint: You'll want to use string interpolation (look back at section 1 if you've forgotten what this is).
        </p>
      </div>
    </section>
    <hr>
    <section>
      <h2 class="section-header">On Your Own!</h2>
      <p>Now that you've built a few small projects using the Twitter API, we encourage you to dive into reading documentation with less hand-holding from this curriculum. The Try It sections below won't tell you <b>how</b> to do something; instead, you'll use the linked documentation to implement functionality.</p>
      <div class="try-it">
        <h2>Try it: Auto Follow</h2>
        <p>
          Create a program that searches for the five most recent tweets on a specific topic, then automatically follows those users. Check out <a href="https://github.com/sferik/twitter#usage-examples
        ">examples of how to follow a user</a>.
        </p>
        </div>
        <hr>
        <div class="try-it">
          <h2>Try it: Auto Reply</h2>
          <p>
            Create a program that auto-replies to tweets containing a certain set of hashtags. For example, if I run the program with the hashtags #coding and #ruby, it could autoreply "I'm learning how to code at Turing School!" If you're stuck, check out <a href="http://stackoverflow.com/questions/28649582/how-to-reply-a-tweet-using-the-twitter-gem">this StackOverflow answer</a>.
          </p>
        </div>
        <hr>
        <div class="try-it">
          <h2>Try it: Streaming Tweets</h2>
          <p>
            Let's livestream Twitter! Make a new program called <code>streaming_twitter.rb</code>. First, we'll need to set up a streaming client:</p>
            <pre>client = Twitter::Streaming::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end</pre>
          <p>Next, use <a href="https://github.com/sferik/twitter#streaming">the Twitter gem streaming documentation</a> to set up a program that will livestream tweets that have a certain hashtag(s).</p>
        </div>
        <hr>
        <div class="try-it">
          <h2>Try it: Colorizing Output</h2>
          <p>Note: This project won't work on Repl. However, if you install Ruby on your computer and use the build-in Terminal on your computer to run your code, you'll be able to colorize your output.</p>
          <p>With the livestreaming of tweets, use an if/else branch to colorize certain tweets. Use the <a href="https://github.com/fazibear/colorize">Colorize gem</a> in your program. You may choose to colorize based on tweet length, tweet contents, etc. Be creative!</p>
        </div>
        <hr>
        <div class="try-it">
          <h2>Try it: Registering your own keys and tokens</h2>
          <p>Want to use your own account to tweet instead of Turing's accounts? Follow the instructions below to get your own keys and tokens.</p>
          <ol>
            <li>Log in to your Twitter account, then while logged in, go to <a href="https://apps.twitter.com/app/new">https://apps.twitter.com/app/new</a>.</li>
            <li>Click the blue <b>Create an app</b> button in the upper right-hand corner.</li>
            <li>Click <b>Apply</b> when the popup appears.</li>
            <li>Select <b>Student</b> in the Academic column and click <b>next</b>.</li>
            <li>Verify your phone number.</li>
            <li>On the <b>This is you, right?</b> screen, fill in any missing information and click <b>next</b>.</li>
            <li>Fill in the boxes to explain how you will use Twitter, then click submit application.</li>
            <li>Check your email for a confirmation that you'll need to click.</li>
            <li>Wait to hear back! Once you're confirmed, you'll be able to log back in to get your keys and tokens.</li>
          </ol>
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
