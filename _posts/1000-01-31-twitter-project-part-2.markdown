---
title: Twitter Project, Part 2
layout: post
date: 1000-01-31
permalink: twitter-project-part-2
program: back-end
tags: back-end
---

Let's say that we wanted to be able to search for tweets with the hashtag #learntocode and save them to a file that we can access later. First, we'll need to set up a program that can search when given a hashtag.

<h4>Preparing the Program</h4>

Go ahead and make a new repl called `twittersearch`

Then create your Twitter client again:

```ruby
require 'bundler/inline'

gemfile true do
 source 'http://rubygems.org'
 gem 'twitter'
end

require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end

client.search("#learntocode").each do |tweet|
  puts "#{tweet.user.name}: #{tweet.text}"
end
```

Run this with different hash tags a few times to see that it works.

<div class="try-it">
<h2>Try it: Searching Dynamic Values</h2>

<p>
  Right now, we've hard-coded the #learntocode hashtag. Modify your program so that it asks the user what hashtag they want to search, then uses that value to search Twitter. Try it out to make sure it works.
</p>
</div>

<h4>Saving to a File</h4>

Before we try to save Tweets, we need to learn how to write to files. Let's pause on our Twitter app and move into the interactive console (the dark part of the repl.it screen). 

Next, we will make and write to a file using this syntax:

```ruby
my_file = File.open("my_file.txt", "w")

my_file.write("Hello, world!")
my_file.write("\n")
my_file.write("I am writing to a file!")
my_file.write("\n")
my_file.write("\n")
my_file.write("Here's another sentence that is two lines below the previous one.")

my_file.close
```

Try that out. In the left-hand side of repl.it, you should see a file appear called `my_file.txt` (which is what you named it when you said `File.open(...)`. What appeared? Why? Where are the spaces? 

<div class="try-it">
<h2>Try it: Saving Search Results</h2>

<p>
  Modify your <code>twitter_search.rb</code> program so that whenever it runs, it saves the results to a text file. The file name should be based on what hashtag the user enters. For example, if they search "#denver", the results file should be called <code>results_for_#denver.txt</code>. Hint: You'll want to use string interpolation (look back at section 1 if you've forgotten what this is).
</p>
</div>
