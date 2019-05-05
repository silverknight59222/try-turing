---
title: Twitter Project, Part 1
layout: post
date: 1000-01-31
permalink: twitter-project-part-1
program: back-end
tags: back-end
---

Let's write a program that can post tweets, read user timelines, and search for hashtags. Next, we'll add to our program by creating a bot that can automatically follow users who tweet about certain things. Finally, we'll write a program that can live-stream tweets with specific keywords.

## Setting up the File

Let's make a file called `tweet`

## Installing the Gem

First, we'll install a Gem (which is a piece of code written by someone else) that we can use to interact with Twitter via Ruby.

Because we're using repl.it (an online platform), we will need to do this slightly differently than how we normally would if we were working locally on our computers. 

Don't worry too much about the meaning of the individual lines. The block of code below will allow us to "install" the Twitter gem so that we can use it in our projects. 

```ruby
require 'bundler/inline'

gemfile true do
 source 'http://rubygems.org'
 gem 'twitter'
end
```

Under those lines of code, we'll setup a Ruby object that can communicate with Twitter:

```ruby
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ""
  config.consumer_secret     = ""
  config.access_token        = ""
  config.access_token_secret = ""
end
```

All of these keys and tokens are currently blank. We need to get tokens and keys we can use. Paste the keys and tokens into your file. 

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
<h2>Try it: Old School Twitter</h2>
<p>In November of 2017, Twitter upped its character limit to 280 per tweet. We're going to roll back the clock and restrict users to the previous limit of 140 characters.</p>
<p>
  Write a program that asks a user for text to use for a tweet. If the text is less than or equal to 140 characters, tweet it! If it is longer than 140 characters, tell the user that their tweet was too long.
</p>

<p>Don't worry about creating a loop for now. This should be a one-shot deal for the user.</p>
</div>
