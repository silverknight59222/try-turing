---
title: Twitter Project, Part 3
layout: post
date: 1000-01-31
permalink: twitter-project-part-3
---

Let's say that we wanted to be able to search for tweets with the hashtag #learntocode and save them to a file that we can access later. First, we'll need to set up a program that can search when given a hashtag.

## Preparing the Program

Go ahead and make a new file: `twitter_search.rb`.

Then create your Twitter client again:

```ruby
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

<div class="card cyan ">
  <div class="card-content white-text">
    <span class="card-title black-text"><b>Try it: Searching Dynamic Values</b></span>
    <p>
      Right now, we've hard-coded the #learntocode hashtag. Modify your program so that it asks the user what hashtag they want to search, then uses that value to search Twitter. Try it out to make sure it works.
    </p>
  </div>
</div>

## Saving to a File

In Ruby, we can save things to a file using this syntax:

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

If you want to, go ahead and try that out, then open the file it created and look at it.

<div class="card cyan ">
  <div class="card-content white-text">
    <span class="card-title black-text"><b>Try it: Saving Search Results</b></span>
    <p>
      Modify your `twitter_search.rb</span> program so that whenever it runs, it saves the results to a text file. The file name should be based on what hashtag the user enters. For example, if they search "#denver", the results file should be called <span class="command">results_for_#denver.txt`. Hint: You'll want to use string interpolation (look back at section 1 if you've forgotten what this is).
    </p>
  </div>
</div>