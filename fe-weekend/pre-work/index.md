---
layout: lesson
---

# Front-End Try Coding: Pre-work

<a href="../">Back to Curriculum Index</a>

## Introduction

We are excited you will be joining us for an upcoming Try Coding workshop. If you've found yourself on this page and are not yet signed up for one, you can sign up [here](https://www.eventbrite.com/o/turing-school-of-software-amp-design-9895674202)!

Completing this pre-work will set you up for success in our virtual classroom - making sure that everyone feels comfortable with the tools we will use and a bit of foundational knowledge.

<span role="img" aria-label="clock">⏰</span> <strong>Time:</strong> Most participants share that this work took them between 25-35 minutes to complete.

<span role="img" aria-label="woman at computer">👩🏽‍💻</span> <strong>Materials:</strong> It is ideal that you work through this on a laptop or desktop computer. Everything can be done inside a browser with an internet connection.

<span role="img" aria-label="rocket">🚀</span> <strong>Goal:</strong> Work through the materials so you are prepared to engage at your workshop. Then, complete the submission form at the bottom of this page in order to get the zoom link for your scheduled workshop!
<br>
<br>

<!-- SET UP -->
<div class="expander expander-fe">
  <header>
    <h2>Set Up</h2>
    <div>
      <div class="setup fe-tag tag to-do-tag">To Do</div>
      <button class="expander-btn">
        <img
          src="../../assets/icons/arrow.svg"
          alt="expander arrow icon" />
      </button>
    </div>
  </header>
  <div class="hide">
    <p><a href="https://codepen.io/" target="blank">CodePen</a> provides an online platform that allows us to write code and see the results almost immediately - all inside of one browser tab! There are many other similar (and awesome) tools available; we feel this is the best choice for the Front-End Try Coding workshops.</p>
    <p><span role="img" aria-label="movie">🎬</span> Please watch this short screencast (no sound) for an introduction on how to navigate CodePen:</p>

    <iframe width="100%" height="550px" frameborder="0" scrolling="no" src="https://screencast-o-matic.com/embed?sc=cY6vqKsCTf&v=6&ff=1&title=0&controls=1" allowfullscreen="true"></iframe>

    <p><span role="img" aria-label="check mark">✅</span> Since we'll be using CodePen during the workshop, please create a free account with them at this time. Then, create a pen as shown in the video. You don't need to type any code in it just yet.</p>
    <button class="btn-dark mark-complete-btn">Mark Complete</button>
  </div>
</div>

<!-- Part 1: HTML, general syntax for h1 and p -->
<div class="expander expander-fe">
  <header>
    <h2>Learn: Part 1</h2>
    <div>
      <div class="part-one fe-tag tag to-do-tag">To Do</div>
      <button class="expander-btn">
        <img
          src="../../assets/icons/arrow.svg"
          alt="expander arrow icon" />
      </button>
    </div>
  </header>
  <div class="hide">
    <p>Of all of the major technologies used on the web, on either the Front-End or the Back-End, HTML, or Hyper Text Markup Language, is the oldest. <a href="http://info.cern.ch/" target="blank">In the beginning</a>, the web was just a bunch of HTML documents that you wrote by hand. They had these <em>cool</em> things called hyperlinks that would allow a user to click on a word on one page and be taken to another page.</p>
    <p>HTML is still an essential part of modern web applications. It holds the content and creates the structure of a webpage.</p>

    <h3>Tags, Content, Elements</h3>
    <p>HTML is made up of a series of <strong>elements</strong>. Each element is made up of at least one <strong>tag</strong>, and most have <strong>content</strong> between an opening and closing tag.</p>

    <p>Let’s assume we are starting with some text. We’ll call this content.</p>
    <img src="./assets/content.png" alt="the text of 'Hello, World!' in an orange color." />

    <p>To tell the browser that this is a paragraph, we'll <em><strong>mark up</strong></em> the content with HTML <strong>tags</strong>:</p>
    <img src="./assets/element.png" alt="Image of tags and content and elements"/>

    <p>We use the <code>< p></code> (the opening tag) to signal to the browser that everything that's about to follow is part of a paragraph and <code>< /p></code>  (the closing tag) to let the browser know that this paragraph is done. The entire line - opening tag, closing tag and any content in between - is referred to as an <strong>element</strong>. When a user visits our application, the browser loads up the HTML, reads it, and turns it into the user interface.</p>

    <p>Two commonly used tags are headings (h1-h6, h1 being the biggest, h6 being the smallest) and paragraph tags (p). The CodePen below demonstrates what many of those elements provides.</p>

    <p class="codepen" data-height="365" data-theme-id="light" data-default-tab="html,result" data-user="turing-trycoding" data-slug-hash="RwRMMJY" style="height: 365px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Headings and Paragraph">
    <span>See the Pen <a href="https://codepen.io/turing-trycoding/pen/RwRMMJY">
  Headings and Paragraph</a> by Try Coding (<a href="https://codepen.io/turing-trycoding">@turing-trycoding</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p><script async src="https://static.codepen.io/assets/embed/ei.js"></script>


    <br>

    <h3>You Try</h3>
    <p>In your CodePen, create at least 3 headings and at least 3 paragraphs. The content can be anything you are interested in!</p>
    <p>Observe the output in the browser. Is the content showing up in the order you expected? What do you notice about the size of the various heading tags?</p>
    <p><em><span role="img" aria-label="raised hand">🖐🏼</span> If you need help or want to feel confident in your work, <a href="https://codepen.io/turing-trycoding/pen/yLJKEGw" target="blank">here is example of the completed task</a>.</em></p>

    <button class="btn-dark mark-complete-btn">Mark Complete</button>
  </div>
</div>

<!-- Part 2: Links/Img/Buttons -->
<div class="expander expander-fe">
  <header>
    <h2>Learn: Part 2</h2>
    <div>
      <div class="part-two fe-tag tag to-do-tag">To Do</div>
      <button class="expander-btn">
        <img
          src="../../assets/icons/arrow.svg"
          alt="expander arrow icon" />
      </button>
    </div>
  </header>
  <div class="hide">
    <p>HTML offers a wider variety of elements that serve different purposes. In addition to headings and paragraphs, we will cover 3 more in this pre-work - <em>buttons</em>, <em>links</em>, and <em>images</em>. If you want to learn about others, check out <a href="https://www.w3schools.com/TAGS/default.ASP" target="blank">this resource!</a></p>

    <h3>Buttons</h3>
    <p>The <code>button</code> element has an opening and closing tag, and should have content. That content will appear inside of the button:</p>
    <img src="./assets/button-el.png" alt=""/>
    <br>

    <h3>Links</h3>
    <p>The <code>a</code> element creates a hyperlink. Here's an example of the syntax the browser expects:</p>
    <img src="./assets/a-el.png" alt=""/>
    <p>Any text inside of the opening and closing <code>a</code> tags will appear, by default, in a bright blue color with an underline and, when clicked, will take the user to the location indicated in the <code>href</code> attribute (which is short for hyper-reference).</p>
    <br>

    <h3>Images</h3>
    <p>The <code>img</code> element allows us to display an image on a site. Here's an example of the syntax the browser expects:</p>
    <img src="./assets/img-el.png" alt=""/>

    <p>The self-closing <code>img</code> tag above has two attributes - <code>src</code> and <code>alt</code>. These are intended to be used in conjunction with the <code>img</code> tag. <code>src</code> needs to tell the browser which image to display, and <code>alt</code> should provide text describing the image in the event the user isn't able to access the image.</p>

    <p>
      <strong>
        <em>How do I know what to put in the <code>src</code> attribute?</em>
      </strong>
      When working with CodePen, the easiest will be to use an image address, rather than a file on your computer. Find an image online, right click it, and select "Copy image address". Then, paste into the CodePen.
    </p>
    <br>

    <h3>You Try</h3>
    <p>In the same CodePen you were working in earlier, add some new elements to your page! You can add your new elements to any part of the HTML file.</p>
    <p><em><span role="img" aria-label="raised hand">🖐🏾</span> If you need help or want to feel confident in your work, <a href="https://codepen.io/turing-trycoding/pen/PozeOPQ?editors=1010" target="blank">here is a working solution</a>.</em></p>

    <button class="btn-dark mark-complete-btn">Mark Complete</button>
  </div>
</div>

<!-- Submission Form -->
<div class="expander expander-fe">
  <header>
    <h2>Submission</h2>
    <div>
      <div class="submission fe-tag tag to-do-tag">To Do</div>
      <button class="expander-btn">
        <img
          src="../../assets/icons/arrow.svg"
          alt="expander arrow icon" />
      </button>
    </div>
  </header>
  <div class="hide">
    <p>You did it <span role="img" aria-label="celebration cone">🎉</span> We hope you had some fun learning about HTML - this is a great foundation!</p>
    <p>Please complete the form below so we have a sense of where you are with the material so far and can customize the workshop to your needs.</p>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrJM-l7dhtfQnM-kXgarpmRrMs1y69eEfJ_pO1ajHGUhF2vg/viewform?embedded=true" width="100%" height="1076" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    <button class="btn-dark mark-complete-btn">Mark Complete</button>
  </div>
</div>
