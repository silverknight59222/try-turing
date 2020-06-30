---
layout: lesson
---

# Semantic HTML

<a href="../">Back to Curriculum Index</a>

## Goals

- Build an understanding of how our HTML impacts users that use a screen reader
- Learn some alternatives to the `div` element
- Start learning about WAI-ARIA

## Screen Readers

- Show video clip of someone going through a semantic page vs a not.
- List a couple of the popular ones, how to install and simulate

## Headings

- make sure we use h1 - h6 correctly

## Containers

- alternatives to `div`

TRY IT: Refactor your app - change any divs that make sense to be something else, to that something else.

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

After taking step 1 or 2, you should see a plain looking, Times New Roman using, site. Is your content still all available and in the same order?

<div class="try-it-new">
  <h3>Try It: Disable Your CSS</h3>
  <p>After taking step 1 or 2, you should see a plain looking, Times New Roman using, site. Is your content still all available and in the same order?</p>
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

## WAI-ARIA

- what is it? Docs?
- Roles for labels and inputs
- landmarks??

TRY IT: Add a role to your label and input and check Lighthouse.

<br>
<a href="../">Back to Curriculum Index</a>
