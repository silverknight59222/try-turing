---
title: Twitter Project, Part 2
layout: post
date: 1000-01-03
permalink: twitter-project-part-2
---

Let's write a program that can post tweets, read user timelines, and search for hashtags. Next, we'll add to our program by creating a bot that can automatically follow users who tweet about certain things. Finally, we'll write a program that can live-stream tweets with specific keywords and auto-reply to them.

<h4>Preparing the Program</h4>

Go ahead and make a new file: `read_twitter\_timeline.rb`.

Then create your Twitter client again:

```rb
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end
```

<h4>Reading a Timeline</h4>

```rb
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end

client.user_timeline("turingschool").each do |tweet|
  puts tweet.text
end
```


## Try It: Reading Timelines Using Optional Arguments

By default, our program only prints out the 20 most recent tweets. The `user_timeline` method can take another optional argument. If we wanted the 50 most recent tweets, we could do this:

```
client.user_timeline("turingschool", count: 50).each do |tweet|
  puts tweet.text
end
```

Let's practice reading the [User Timeline Documentation][ult]. Under the section "Options Hash", find an optional argument that you can use to modify whether or not retweets are included in the results. Try it out.

[ult]: http://www.rubydoc.info/gems/twitter/Twitter/REST/Timelines#user_timeline-instance_method

Next, find another optional argument you can use to modify whether or not replies are included in the results.
