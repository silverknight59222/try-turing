---
layout: lesson
---

# Semantic HTML

<a href="../">Back to Curriculum Index</a>

## Goals

- Build an understanding of how our HTML impacts users that use some assistive technologies
- Learn and implement best practices for headings
- Learn and implement alternatives to the `div` element, and why they are important

## Affordances

<img src="./assets/teapot.png" alt="Short, squatty, turquoise cast iron teapot with dragonfly carved into top" />

An afforance is a clue about what and object is and how it should be used. In the physical world, when we see a teapot or an ice cream scoop or a pair of headphones, we may have never seen that exact item before, but can use context to understand what it is and how one would use it.

In the digital world, when we see a form, a button, items on a page change when we hover over them, etc. we have context for what they mean and what we can do with them. If a user can't see a button on the page, we have to provide that information in a way that their assistive technology can communicate it to them.

## Website Navigation

### Screen Readers

Screen readers are software programs that allow blind or low vision users to read the text on a computer screen. It can be read either through a speech synthesizer or braille display. A user that uses a screen reader will use a keyboard or Braille input device to tab through a webpage.

- Show diagram of HTML to DOM to a11y tree
- Show video clip of someone going through a semantic page vs a not.

There is a long list of available screen readers. Some popular ones are [NVDA](https://www.nvaccess.org/), [JAWS](https://www.freedomscientific.com/products/software/jaws/) and [VoiceOver](https://www.apple.com/accessibility/mac/vision/) (comes with Mac).

### Motor & Dexterity

Users may have permanent, temporary, or situational motor and/or dexterity impairments. They might be using the keyboard, head or eye tracking software, [switch controls](https://axesslab.com/switches/#:~:text=A%20switch%20is%20an%20assistive,you%20design%20switch%20friendly%20interfaces.), voice dictations, etc.

We won't get into the nitty gritty of each of these, but what we need to know is: our code must be written in a way that these assistive technologies can do their job. We can't make any assumptions and have to provide information explicitly.

## Headings

Heading tags (for example `<h1>`) can help users get a sense of the structure and organization of a page. When used correctly, screen reader users can also quickly understand the structure of the page and navigate it efficiently. They can listen to a list of all the headings and skip to a heading of their choice. In 2017, [a survey was conducted](https://webaim.org/projects/screenreadersurvey7/#finding) where almost 70% of screen reader users who responded shared that they are most likely to use headings to navigate a length web page.

Best practices for headings:
- All pages should have an `<h1>` giving the title of the page
- Don't skip heading levels (for example, jumping from `<h1>` to an `<h4>`)
- Don't choose a heading level because of the size that the browser displays. Use CSS to control the size
- Don't use a **bold** paragraph instead of a heading

## Containers

Earlier, we learned about the `<div>` element. We talked about how it can be used to visually group other elements together.

Sometimes, we use container elements, like a `div` purely to control layout. Other times, we group elements together becauase the content is related. Consider the screenshots below:

<br />
<img src="./assets/amazon-footer.png" alt="Screenshot of amazon.com homepage footer with over 40 links. Links appear in white text on a dark blue background." />
<br />
<br />
<br />
<img src="./assets/linkedin-header.png" alt="Screenshot of linkedin.com user homepage, focusing on the nav bar. Nav bar includes a company icon, search bar, and icons/links/subtitles for home, my network, jobs, messaging, notifications, me, and work. Header is a dark blue color, and page below it has a white background." />
<br />

If those groups of links/icons live inside of a `<div>`, a screen reader user may not have the context for the purpose of said `<div>`. By using more semantic elements, we can communicate more to the screen reader, which will provide a better experience to the user.

Semantic container tags:
- `<main>` should wrap the main content of your page. With this, the user can "skip to main content"
- `<nav>` should wrap any sort of nav or menu bar
- `<footer>` should wrap any content in a container at the bottom of a page

<div class="try-it-new">
  <h3>Try It: Semantic Containers</h3>
  <p>Wrap a <code class="try-it-code">main</code> element around the main content of your page. If you have a menu or navigation bar, wrap it in a <code class="try-it-code">nav</code> element, same for footer</p>
  <p>Refactor your HTML so that any <code class="try-it-code">div</code> elements that make sense to be something else are changed.</p>
  <p>Check your live site in the browser. In theory, you should see no change!</p>
</div>

## Manual Testing

Automated tests might not be able to do it all. It's important to use a combination of the automated tests available, as well as doing some manual testing. Let's talk about two things we can do for manual testing.

### Disable CSS

The order of the content on your site should not just _look_ ordered because of the way you used CSS. If someone isn't able to see the site or, for some reason, your CSS file doesn't load, any user should still be able to access the content on your site.

To check on this, you can temporarily disable CSS. There are two ways to do this:
1. Comment out the `link` element in your HTML that links to the CSS file
2. On a live site where you can't comment out the `link` element, you can take similar action in the Dev Tools.
  - In the `Sources` pane, find the CSS file
  - Highlight everything in that file
  - Click the delete key on your keyboard

<div class="try-it-new">
  <h3>Try It: Disable Your CSS</h3>
  <p>After taking step 1 or 2 listed above, you should see a plain-looking, Times-New-Roman-using site. Is your content still all available and in the same order?</p>
</div>

### Validate Markup

Another thing we can check manually, is that our markup, or HTML, doesn't have any violations. W3C (World Wide Web Consortium) provides a [free markup validation service](https://validator.w3.org/).

For our purposes, we can use this 1 of 2 ways:
1. Provide the link for our live repl site (under Validate by URI)
2. Copy and paste all the code from our HTML file (under Validate by Direct Input)

While violations caught by this may have a lot of cross-over with Lighthouse, it can never hurt to check with as many reputable testing options as possible.

<div class="try-it-new">
  <h3>Try It: Validate Your Markup</h3>
  <p>Run your HTML through the <a href="https://validator.w3.org/#validate_by_input">W3C Markup Validation Service</a>. If you have any violations, share them in the chat and we can problem solve together!</p>
</div>

<br>
<a href="../">Back to Curriculum Index</a>
