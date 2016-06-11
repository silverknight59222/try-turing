---
title: Twitter Project, Part 1
layout: post
date: 1000-01-31
permalink: twitter-project-part-1
---

Let's write a program that can post tweets, read user timelines, search for hashtags. Next, we'll add to our program by creating a bot that can automatically follow users who tweet about certain things. Finally, we'll write a program that can live-stream tweets with specific keywords and auto-reply to them.

## Installing the Gem

First, we'll install a Gem (which is a piece of code written by someone else) that we can use to interact with Twitter via Ruby.

```
  $ gem install twitter
```

## Setting up the File

Next, we'll set up our first Twitter program: 

```
$ touch tweet.rb
```

Inside of that file, we'll setup a Ruby object that can communicate with Twitter:

```ruby
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ""
  config.consumer_secret     = ""
  config.access_token        = ""
  config.access_token_secret = ""
end
```

All of these keys and tokens are currently blank, because we need to register a new app in order to get tokens and keys we can use.

## Registering your App

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

## Writing Your Program

If you look at what you have so far in your program, we've created a variable called `client`. We can use that variable to do things. For example, if we want to post a new tweet, we can do this:

```ruby
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end

client.update("I'm learning how to code at Turing School!")
```

Check out the Twitter account to see if it worked!

But this is too easy. Let's add a little more to our program:

<div class="try-it">
<h2>Try it: Tweeting from the Command Line</h2>

<p>
  Write a program that asks a user for text to use for a tweet. If the text is less than or equal to 140 characters, tweet it! If it is longer than 140 characters, tell the user that their tweet was too long.
</p>
</div>

