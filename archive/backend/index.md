---
title: What is the Backend?
layout: page
course: "Try Coding: Backend"
courselanding: /backend/
session: 1
---

<div id="wrapper">
  {% include backend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Identify the key differences between frontend and backend engineering</li>
        <li>Categorize various technologies used in backend engineering</li>
      </ul>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/backend.png" alt="AWS logo">
      <h2 class="section-header">What is Backend?</h2>
      <p>In a broad sense, back-end programming is concerned with managing ​<b>data</b>​ (aka information).</p>
      <p>If we think about our favorite web applications, what generally makes them special and useful to us is their ability to do <i>dynamic</i> things. In most cases, we'd like our website to be able to ​do things -- to record data we tell it to record, store information for us, and be able to retrieve that data later.</p>
      <p>Consider a popular website like Amazon. When we view an Amazon page, what are the parts we actually care about? Why did we come here in the first place?</p>
      <p>In the screenshot below, the pink boxes represent examples of <b>dynamic data</b> that had to be stored somewhere. That "somewhere" is what backend programming is concerned with.</p>
      <img src="{{ site.url }}/assets/images/amazon.png" alt="Amazon.com screenshot">
      <p>All of the stylistic pieces (including the layout, colors, sizes, and user interactions) are considered <b>frontend</b> concerns.</p>
      <p>Modern software, and web software especially, is driven by this data -- without the content, most of it wouldn't be worth bothering with. And all of that content has to live somewhere. It needs to be stored, retrieved, manipulated, formatted, etc.</p>
      <p>When we talk about "back-end" programming, we're often thinking of the programming tasks involved in making this possible:</p>
      <ul>
        <li>Storing data and accessing it later</li>
        <li>Verifying that data is accurate</li>
        <li>Manipulating, analyzing, and/or calculating data</li>
        <li>Making sure data can be retrieved quickly and easily</li>
      </ul>
      <hr>
      <h2>So, to sum up:</h2>
      <p>The <span class="vocab">Front-End</span> is the part of the application that users see, touch, and interact with. This is the code that produces the experience in <b>front</b> of the user.</p> 
      <p>The <span class="vocab">back-end</span> typically handles stuff like storing information in databases, manipulating that data, authenticating users, etc.; it's what happens <b>behind</b> the scenes.</p>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/functions.svg" alt="AWS IAM logo">
      <h2 class="section-header">What technologies are used on the back-end?</h2>
      <p>There are numerous technologies that can be used for back-end programming. Here are a few of them:</p>
      <ul>
        <li><b>Languages and frameworks:</b> Ruby/Rails, Python/Django, Elixir/Phoenix, Java/Spring, PHP/Laravel, etc. A framework is kind of like a set of <a target="blank" href="https://www.google.com/search?q=lincoln+logs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiLg-valJ_lAhVeGTQIHWh1BmkQ_AUIEygC&biw=1440&bih=766">Lincoln Logs</a>. You can think of a framework as providing "pre-cut" pieces of code that you'll need in order to build an application, just like Lincoln Logs provide "pre-cut" pieces wood that you can use to build a tiny house.</li>
        <li><b>Database:</b> PostgreSQL, MySQL, Oracle Database, MongoDB, DynamoDB, etc.</li>
        <li><b>Hosting:</b> AWS (Amazon Web Services), Digital Ocean, GoDaddy, Heroku, etc.</li>
      </ul>
      <p>We won't be talking about anything except for a teeny tiny part of Ruby. However, we hope that these terms give you a lay of the land so that next time you hear one of these words, you can say "Aha! That's a database."</p>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/logistics.svg" alt="Checklist logo">
      <h2 class="section-header">What are we doing today?</h2>
      <ol>
        <li>Write programs that print and combine pieces of text using the <code>String</code> data types</li>
        <li>Create variables and assign <code>String</code> values to those variables</li>
        <li>Take in and manipulate user input using control flow structures</li>
        <li>Create loops to run a set of steps multiple times</li>
        <li>Build a number guessing game using the <code>Integer</code> data type</li>
        <li>Write a Ruby script that posts to Twitter, reads timelines, and saves search results to files (start in class, finish at home)</li>
      </ol>
    </section>
    <hr />
    <section>
      <h2 class="section-header">The repl.it Interface</h2>
      <p>Before we move into writing code, let's look at the parts of the <a href="http://repl.it" target="blank">repl.it</a> interface. Repl.it is an online <span class="vocab">Integrated Development Environment</span> (or IDE) that we can use to write and run code. Repl.it is generally considered a teaching/learning tool. In order to write and develop code for production, most people download and install the languages and tools onto their own laptops instead of running code in the browser.</p>
      <p> In this curriculum, you'll see embedded repls like the one below for code examples:</p>
      <iframe height="400px" width="100%" src="https://repl.it/@turingtrycoding/replexample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
      <p>When you're writing your own code, your repl interface will look like this screenshot:</p>
      <img src="{{ site.url }}/assets/images/repl.png" alt="Repl interface screenshot">
    </section>
    <hr />
    <section>
      <h2 class="section-header">Sharing Our Code</h2>
      <p>Throughout the day, we'll be working on small challenges and pasting our code into an Etherpad (similar to a shared Google Doc) so that a) we have a sense of how fast or slow to move, and b) you can see a variety of solutions to each challenge from your classmates.</p>
      <p><b>Your instructor will give you an arbitrary Etherpad name to enter in the box below:</b></p>
      <input style="width: 370px" type="text" id="etherpadurl" placeholder="Type etherpad name from your instructor">
      <button id="etherpadbutton">Open Etherpad</button>
    </section>
  </div>
</div>
<script
src="https://code.jquery.com/jquery-3.2.1.min.js"
integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
crossorigin="anonymous"></script>
<script>
  var openEtherpadButton = document.querySelector('#etherpadbutton');
  openEtherpadButton.addEventListener('click', function(){
    var etherpadName = document.querySelector('#etherpadurl').value
    document.querySelector('#etherpadurl').value = ""
    var win = window.open(`https://pad.riseup.net/p/${etherpadName}-keep`, '_blank');
    win.focus();
  })
</script>
