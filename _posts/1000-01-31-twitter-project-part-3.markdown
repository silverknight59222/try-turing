---
title: Twitter Project, Extensions
layout: post
date: 1000-01-31
permalink: twitter-project-extensions-part-3
program: back-end
tags: back-end
---

Done with parts 1 and 2? Want more?

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


## OPTIONAL: Registering your own keys and tokens

Log in to your Twitter account, then visit [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new). Enter the following information:

* Name: [insertyourusername]-twitterbot
* Description: Learning how to use the Ruby Twitter gem
* Website: http://example.com
* Callback URL: [leave blank]

Then click "Create your Twitter application".

Next, click on the tab "Keys and Access Tokens". There are two important codes in here:

* Consumer Key (API Key)
* Consumer Secret (API Secret)

We'll also need to generate an access token. Scroll to the bottom of the same page and click "Create my access token". You'll get two more important codes:

* Access Token
* Access Token Secret

Paste these four keys and tokens into your program file. It should look something like this now (these are fake keys, so they won't work if you try to use them):

```ruby
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end
```

