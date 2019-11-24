---
title: What is the Frontend?
layout: page
course: "Try Coding: Frontend"
courselanding: /frontend/
session: 1
---

<div id="wrapper">
  {% include frontend_navigation.html %}
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Identify the key differences between frontend and backend engineering</li>
        <li>Categorize various technologies used in frontend engineering</li>
      </ul>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/backend.png" alt="AWS logo">
      <h2 class="section-header">What is Front-end?</h2>
      <p>The "front-end" is the part of the application that users see, touch, and interact with. The "back-end" typically handles stuff like storing information in databases and authenticating users; it's what happens behind the scenes.</p>
      <p>When we're talking about web development, the front-end is the part of the code base that takes care of rendering the user interface in the web browser.</p>
      <p>Over the last decade, the web has evolved from a platform that served static web pages with content to a platform that provides rich, interactive experiences to users.</p>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/rubik.png" alt="Rubik's Cube">
      <h2 class="section-header">So What Makes The Front-End Engineering Cool (and challenging)?</h2>
      <h4>It Presents Tons of Logical Challenges</h4>
      <p data-height="500" data-theme-id="23788" data-slug-hash="eZxEBO" data-default-tab="result" data-user="dissimulate" data-embed-version="2" data-pen-title="Tearable Cloth v2" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/dissimulate/pen/eZxEBO/">Tearable Cloth v2</a> by dissimulate (<a href="http://codepen.io/dissimulate">@dissimulate</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      <h4>It Can Be Beautiful</h4>
      <p data-height="500" data-theme-id="dark" data-slug-hash="acAgx" data-default-tab="result" data-user="jackrugile" data-embed-version="2" data-pen-title="Canvas Fireworks" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/jackrugile/pen/acAgx/">Canvas Fireworks</a> by Jack Rugile (<a href="http://codepen.io/jackrugile">@jackrugile</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
    <h4>Or Silly</h4>
    <p data-height="500" data-theme-id="0" data-slug-hash="OZZyxp" data-default-tab="result" data-user="SlicedBreadAnimation" data-embed-version="2" data-pen-title="Nano Corgi" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/SlicedBreadAnimation/pen/OZZyxp/">Nano Corgi</a> by Sliced Bread Animation (<a href="https://codepen.io/SlicedBreadAnimation">@SlicedBreadAnimation</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
    <h4>It Can Guide a User Through a Complicated Task</h4>
    <img src="{{ site.url }}/assets/images/turbo-tax.jpg" alt="Turbo Tax screenshot">
    <p><a href="https://www.appcues.com/blog/how-turbotax-makes-a-dreadful-user-experience-a-delightful-one" target="blank">Here's</a> a great blog post about how Turbo Tax makes a complicated, intimidating task relatively simple, and even fun.</p>
    <h4>Or Help Us Understand a Complicated Subject</h4>
    <p>Big numbers are difficult to imagine. How can you imagine a billion? Even a thousand things collectively is a challenge. Gun death numbers are big, but the individual events are also significant, which requires care. FiveThirtyEight broke it down in a way that helps with the mental scaling issues. <i>(Summary from: http://flowingdata.com/2016/12/29/best-data-visualization-projects-of-2016/)</i></p>
    <img src="{{ site.url }}/assets/images/gun-america.png" alt="Five Thirty Eight Gun Violence screenshot">
    <a target="blank" href="http://fivethirtyeight.com/features/gun-deaths/">See the project</a>.
    <h4>It Allows You, As a Developer, to Tell a Story</h4>
    <img src="{{ site.url }}/assets/images/the-boat.png" alt="The boat interactive story screenshot">
    <p>Check out <a href="http://www.sbs.com.au/theboat/" target="blank">The Boat</a> -- an interactive graphic novel about the vietnam war using CSS/JS/Parallax.</p> 
    </section>
    <hr />
    <section>
      <h2 class="section-header">You Don't Actually Have to Be a Design Genius</h2>
      <img src="{{ site.url }}/assets/images/comp.jpeg" alt="An image of a typical comp - with mobile and desktop layouts - hex values and images for all the icons">
      <p>Front-end developers often work with designers, who provide detailed <span class="vocab">comps</span> like the one above. These comps take the guess work out of making a site 'pretty', and allow a front-end developer to focus on managing the complicated interactions of the site.</p>
      <p>There's a common misconception that the front-end is only about colors, fonts, and having a good eye. However, front-end development is more focused on making data useful, accessible, and interactive. Javascript and other frameworks do a lot of heavy logical lifting.</p>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/functions.svg" alt="AWS IAM logo">
      <h2 class="section-header">What technologies are used on the frontend?</h2>
      <p>The front-end of the web is based on three major technologies:</p>
      <ol>
        <li><span class="vocab">HTML</span>: HyperText Markup Language (HTML) defines the structure and semantics of web pages on the web.</li>
        <li><span class="vocab">CSS</span>: Cascading Style Sheets (CSS) sets the look and style of a web page. CSS provides style to the structure provided by HTML.</li>
        <li><span class="vocab">JS</span>: JavaScript (JS) allows us to define interaction in our pages. What happens when a user clicks on a certain area?</li>
      </ol>
      <p>Many libraries and frameworks have been built on top of JavaScript that make front-end development even more robust and powerful! If you hear terms like React, Vue, Ember, Angular... those are all JavaScript frameworks.</p>
      <p>The back-end of the application can use any number of languages, like Ruby, Python, Java, etc.</p>
    </section>
    <hr />
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/logistics.svg" alt="Checklist logo">
      <h2 class="section-header">What are we doing today?</h2>
      <p>We're going to dive into the three technologies used on the frontend:</p>
      <ol>
        <li>Structure web pages using HTML headers, paragraphs, inputs, buttons, images, and divs</li>
        <li>Add identifiers to our HTML elements using classes and IDs</li>
        <li>Implement user interaction with JavaScript variables, event listeners, and if statements</li>
        <li>Use JavaScript to grab data from an external source, then add that data to our webpage</li>
        <li>Style our webpage with various CSS properties</li>
      </ol>
    </section>
    <hr />
    <section> 
      <h2 class="section-header">The codepen.io Interface</h2>
      <p>Before we move into writing code, let's look at the parts of the <a href="http://codepen.io" target="blank">codepen.io</a> interface. Codepen.io is an online <span class="vocab">Integrated Development Environment</span> (or IDE) for front-end development that we can use to write and run code. Codepen.io is generally considered a teaching/learning tool. In order to write and develop code for production, most people download and install the languages and tools onto their own laptops instead of running code in the browser.</p>
      <p> In this curriculum, you'll see embedded codepens like the one below for code examples:</p>
      <p class="codepen" data-height="266" data-theme-id="0" data-default-tab="html,result" data-user="turingtrycoding" data-slug-hash="abbqEgR" style="height: 266px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Welcome">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/abbqEgR">
  Welcome</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <p>When you're writing your own code, your codepen interface will look like this screenshot:</p>
      <img style="border: 1px solid black" src="{{ site.url }}/assets/images/codepen_interface.png" alt="Codepen interface screenshot">
    </section>
    <hr />
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
    var win = window.open(`http://etherpad.net/p/${etherpadName}`, '_blank');
    win.focus();
  })
</script>
