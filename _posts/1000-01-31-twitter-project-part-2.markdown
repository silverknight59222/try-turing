---
title: Twitter Project, Part 2
layout: post
date: 1000-01-31
permalink: twitter-project-part-2
---

Now that we know how to post a tweet, let's read other users' timelines. 

<h4>Preparing the Program</h4>

Go ahead and make a new file: <span class="command">read_twitter\_timeline.rb</span>.

Then create your Twitter client again:

{% highlight ruby %}
require 'twitter'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "UCZw4n5yZW4EnvbT3co9OPa4b"
  config.consumer_secret     = "rPCzneF3DnRd8OWE90jWLjTCfCTStTnGrvkfnRtfEEVE3FWL4K"
  config.access_token        = "710164541207398534-S6EkJrplVKgsuMtBfIcZcPTxGeINwMx"
  config.access_token_secret = "c42YsBf1EdDt7hv1xYnZ0knhckzbiLLatKHMBuLXTgyP3"
end
{% endhighlight %}

<h4>Reading a Timeline</h4>

{% highlight ruby %}
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
{% endhighlight %}

<div class="card cyan ">
  <div class="card-content white-text">
    <span class="card-title black-text"><b>Try it: Reading Timelines Using Optional Arguments</b></span>
    <p>
      By default, our program only prints out the 20 most recent tweets. The <span class="command">user_timeline</span> method can take another optional argument. If we wanted the 50 most recent tweets, we could do this:
      <div class="output">
        client.user_timeline("turingschool", count: 50).each do |tweet|
          puts tweet.text
        end
      </div>
      Let's practice reading the <a class="link-in-try" href="http://www.rubydoc.info/gems/twitter/Twitter/REST/Timelines#user_timeline-instance_method">User Timeline Documentation</a>. Under the section "Options Hash", find an optional argument that you can use to modify whether or not retweets are included in the results. Try it out. <br><br>
      Next, find another optional argument you can use to modify whether or not replies are included in the results. 
    </p>
  </div>
</div>