---
title: Twitter Project, Part 2
layout: post
date: 1000-01-31
permalink: twitter-project-part-2
program: back-end
---

Now that we know how to post a tweet, let's read other users' timelines.

## Preparing the Program

Go ahead and make a new file:

```
$ touch read_twitter_timeline.rb
```

Then create your Twitter client again:

```ruby
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end
```

## Reading a Timeline

```ruby
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

<div class="try-it">
<h2>Try it: Reading Timelines Using Optional Arguments</h2>

<p>
  By default, our program only prints out the 20 most recent tweets. The <code>user_timeline</code> method can take another optional argument. If we wanted the 50 most recent tweets, we could do this:
</p>
<div class="highlighter-rouge"><pre class="language-ruby">client.user_timeline("turingschool", count: 50).each do |tweet|
  puts tweet.text
end</pre>
</div>
<p>
  Try that out. Now, let's practice reading the <a class="link-in-try" href="http://www.rubydoc.info/gems/twitter/Twitter/REST/Timelines#user_timeline-instance_method">User Timeline Documentation</a>. Under the section "Options Hash", find an optional argument that you can use to modify whether or not retweets are included in the results. Try it out. <br><br>
      Next, find another optional argument you can use to modify whether or not replies are included in the results.
</p>

</div>
