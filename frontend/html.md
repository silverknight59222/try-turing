---
title: Intro to HTML
layout: page
course: "Try Coding: Frontend"
courselanding: /frontend/
session: 2
---

<div id="wrapper">
  {% include frontend_navigation.html %}
  <div id="content-container">
  	{% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Identify what HTML is used for in frontend development</li>
        <li>Add headings, paragraphs, inputs, buttons, images, and divs to a webpage</li>
        <li>Identify individual HTML elements with IDs and classes</li>
      </ul>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/html.png" alt="HTML icon">
      <h2 class="section-header">What is HTML?</h2>
      <p>Of all of the major technologies used on the web, on either the front- or the back- end, HTML, or <span class="vocab">Hyper Text Markup Language</span>, is the oldest. In the beginning, the web was just a bunch of HTML documents that you wrote by hand. They had these cool things called hyperlinks that would allow a user to click on a word on one page and be taken to another page.</p>
      <p>At the end of the day, HTML is made up two things: text, and tags that <i>mark up</i> that text.</p>
      <p>Let's assume we're starting with some text. We'll call this <b>content</b>.</p>
      <img style="border: 1px solid black;" src="{{ site.url }}/assets/images/content.png" alt="Hello world text">
      <p>To tell the browser that this is a paragraph, we'll <b>mark up</b> the content with HTML tags:</p>
      <img style="border: 1px solid black;" src="{{ site.url }}/assets/images/htmlanatomy.png" alt="Anatomy of an HTML element">
      <p>We use the <span class="vocab">&lt;p&gt;</span> (the opening tag) to signal to the browser that everything that's about to follow is part of a paragraph and <span class="vocab">&lt;/p&gt;</span> (the closing tag) to let the browser know that this paragraph is done. When a user visits our application, the browser loads up the HTML and parses it into the elements that will eventually make up our user interface.</p>
    </section>
    <hr>
    <section>
      <h2 class="section-header">Headings</h2>
      <p>If we wanted this content to be a heading instead, we'd use different opening and closing HTML tags:</p>
      <img style="border: 1px solid black;" src="{{ site.url }}/assets/images/htmlanatomyh1.png" alt="Anatomy of an HTML element">
      <p>Heading elements come in six different orders of importance:</p>
      <ul>
        <li>h1</li>
        <li>h2</li>
        <li>h3</li>
        <li>h4</li>
        <li>h5</li>
        <li>h6</li>
      </ul>
      <p>Even though the browser will display these headers as different sizes, don't use the elements simply to change the size. Screen readers will use the headings to construct tables of contents, so it's important that you use the elements in order. It's also a good idea to only have one h1 on the page.</p>
      <p>You can think of headers in the same way that you'd construct an outline for an essay. Let's look at this example from <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements">Mozilla's Web Docs</a>:</p>
      <img src="{{ site.url }}/assets/images/outline.png" alt="Essay outline">
      <p>In HTML, this is what that outline would look like:</p>
      <p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="turingtrycoding" data-slug-hash="dyydmzR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Header Examples">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/dyydmzR">
  Header Examples</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <p>Here is an example of a slightly more robust document that combines both headings and paragraphs, again from the <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements">Mozilla Web Docs</a>:</p>
      <p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="turingtrycoding" data-slug-hash="LYYQdmL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Headers and Paragraphs">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/LYYQdmL">
  Headers and Paragraphs</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Building a Basic Page</h2>
        <p>Use what you know about headings and paragraph tags to create:</p> 
        <ul>
          <li>One h1 element for the title of your page</li>
          <li>Three sections using h2 elements</li>
          <li>Three paragraph elements, one for each section</li>
          <li>Optional: sub-sections using h3-h6 elements</li>
        </ul>
        <p>The topic is your choice!</p>
        <p>Need some filler text? Check out <a target="_blank" href="https://meettheipsums.com/">Meet the Ipsums</a>.</p>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/button.png" alt="HTML icon">
      <h2 class="section-header">Inputs and Buttons</h2>
      <p>So far, we've done an excellent job of displaying information to the user, but we haven't really asked them for their input. HTML also includes a set of elements for building forms.</p>
      <p>There are a lot to forms that we go into depth on in the full program, but we're going to blissfully ignore today.</p>
      <p>Instead we'll focus on two elements:</p>
      <ul>
        <li><span class="vocab">&lt;button&gt; &lt;/button&gt;</span> creates a button. It has a closing tag since there will be content (the button's text) that is displayed to the user.</li>
        <li><span class="vocab">&lt;input&gt;</span> creates an input field. Because an input is just an empty box and doesn't have any content, it <b>does not have a closing tag</b>. It can take an optional <code>type</code> attribute that helps validate user input in some browsers.</li>
      </ul>
      <p>Before we move on, let's talk briefly about <span class="vocab">attributes</span>. An attribute is a bit of extra data that the browser can use for a variety of reasons: to figure out what to do, how to process information, or how to display an element.</p>
      <p>In the case of the <b>input</b>, the <b>type</b> attribute tells the browser what type of data to expect: is it text? a number? a password? a date? something else? Here's what the <b>type</b> attribute looks like:</p>
      <img style="border: 1px solid black;" src="{{ site.url }}/assets/images/inputattribute.png" alt="Input HTML tag">
      <p>The whole thing is an opening tag! There is no closing tag, because we don't need to enclose any text that the user sees.</p>
      <p>Here's an example of several input types and a button:</p>
      <p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="turingtrycoding" data-slug-hash="XWWZEyj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inputs and Buttons">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/XWWZEyj">
  Inputs and Buttons</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Inputs and Buttons</h2>
        <p>Add at least four inputs and two buttons to your page.</p> 
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/camera.png" alt="Camera icon">
      <h2 class="section-header">Images</h2>
      <p>Similar to an input element, and image element also does not have a closing tag because an image has no text!</p>
      <p>However, an image element has two important attributes:</p>
      <ul>
        <li><span class="vocab">src</span>: the src (or source) attribute indicates what file the browser should display. Is it headshot.jpg? funny.gif?</li>
        <li><span class="vocab">alt</span>: alt (or alternative text) is what screen readers will read when they get to an image. On some browsers, this is the text that will display if the image address is broken for some reason. If you forget to add the alt text, your page will be inaccessible to those using screen readers. <b>Don't leave off your alt attribute</b>.</li>
      </ul>
      <img style="border: 1px solid black;" src="{{ site.url }}/assets/images/imgelement.png" alt="Image HTML element">
      <p>On Codepen, we can't use images from our computers 😭. Instead, we'll need to use images from the internet. Luckily, Codepen has the built-in assets tab that we can use to search royalty-free images:</p>
      <img src="{{ site.url }}/assets/images/addimage.gif" alt="Adding image via codepen">
      <div class="try-it">
        <h2>Try It: Images</h2>
        <p>Add at least three images to your page. Try to aim for adding one image per "section".</p> 
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/fence.png" alt="Fence icon">
      <h2 class="section-header">Sections</h2>
      <p>We're going to look at one more HTML element: the <span class="vocab">section</span>. A section in HTML is something you can use to package other elements together. Think of it as putting a fence around other elements. Let's look at the page structure below:</p>
      <img style="border: 1px solid black; width: 60%;" src="{{ site.url }}/assets/images/sections.png" alt="Sections of webpage">
      <p>It looks like there are two "groupings" here: a heading about pandas (with a paragraph and an image), and a heading about tigers (with a paragraph and an image). Wouldn't it be nice to make them look like they belong together?</p>
      <img style="border: 1px solid black; width: 60%;" src="{{ site.url }}/assets/images/sectionstyled.png" alt="Styled sections of webpage">
      <p>For now, we're going to hold off on styling (sorry!), but let's practice putting our content into sections. Look at the example below, focusing on just the HTML and how the section tags are wrapped around other content:</p>
      <p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html" data-user="turingtrycoding" data-slug-hash="oNNEPyQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="oNNEPyQ">
  <span>See the Pen <a href="https://codepen.io/turingtrycoding/pen/oNNEPyQ">
  oNNEPyQ</a> by Turing School of Software and Design (<a href="https://codepen.io/turingtrycoding">@turingtrycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      <div class="try-it">
        <h2>Try It: Sections</h2>
        <ol>
          <li>Look at your webpage. Can you find any logical groupings? Wrap each of those groupings in <b>section</b> tags.</li>
          <li>You won't be able to see any difference, because our section tags aren't styled! However, if you want to see that they're working, paste the following CSS into the CSS tab on your Codepen. We'll discuss CSS in more depth toward the end of the day.</li>
        </ol>
        <pre>section {
  background: yellow;
}

img {
  width: 50%;
}</pre>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/working.png" alt="Working sign">
      <h2 class="section-header">On the Job!</h2>
      <p>Let's start a new Codepen to practice putting all of our skills together.</p>
      <br>
      <div class="try-it">
        <p>Use what you know about HTML to create the follwing webpage (you can choose your own images). Add section tags for anything that belongs together.</p>
      <img style="border: 1px solid black; width: 60%;" src="{{ site.url }}/assets/images/compliment_skeleton.png" alt="Compliment skeleton website">
        <p>Lost? Stuck? Check out <a target="blank" href="https://codepen.io/turingtrycoding/pen/zYYRmYL">the completed code here</a>.</p>
      </div>
    </section>
  </div>
</div>
<script>
	$( ".spicy-click" ).click(function(e) {
	  $( e.target ).next( ".spicy-appear" ).slideToggle( "slow" );
	});
</script>
<script
src="https://code.jquery.com/jquery-3.2.1.min.js"
integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
crossorigin="anonymous"></script>
