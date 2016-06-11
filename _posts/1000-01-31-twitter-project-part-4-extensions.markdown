---
title: Twitter Project, Extensions
layout: post
date: 1000-01-31
permalink: twitter-project-extensions-part-4
---
 
Done with parts 1 - 3? Want more? 

<div class="try-it">
<h2>Try it: Auto Follow</h2>

<p>
  Create a program that searches for the five most recent tweets on a specific topic, then automatically follows those users. Check out <a href="https://github.com/sferik/twitter#usage-examples
">examples of how to follow a user</a>. 
</p>
</div>

<br>

<div class="try-it">
<h2>Try it: Auto Reply</h2>

<p>
  Create a program that auto-replies to tweets containing a certain set of hashtags. For example, if I run the program with the hashtags #coding and #ruby, it could autoreply "I'm learning how to code at Turing School!" If you're stuck, check out <a href="http://stackoverflow.com/questions/28649582/how-to-reply-a-tweet-using-the-twitter-gem">this StackOverflow answer</a>. 
</p>
</div>

<br>
<div class="try-it">
<h2>Try it: Streaming Tweets</h2>

<p>
  Let's livestream Twitter! Make a new program called <code>streaming_twitter.rb</code>. First, we'll need to set up a streaming client:
  <pre>client = Twitter::Streaming::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end</pre>
Next, use <a href="https://github.com/sferik/twitter#streaming">the Twitter gem streaming documentation</a> to set up a program that will livestream tweets that have a certain hashtag(s).
</p>
</div>

<br>
<div class="try-it">
<h2>Try it: Colorizing Output</h2>
<p>
  With the livestreaming of tweets, use an if/else branch to colorize certain tweets. Use the <a href="https://github.com/fazibear/colorize">Colorize gem</a> in your program. You may choose to colorize based on tweet length, tweet contents, etc. Be creative! 
</p>
</div>