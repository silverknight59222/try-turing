---
layout: lesson
---

# Accessible Colors

<a href="../">Back to Curriculum Index</a>

## Goals

- Understand the ways that color combinations and schemes can impact your users
- Use tools to test for the various experiences users may have with your app
- Develop and implement an accessible color palette for your site

## Why Does Color Matter?

For users who can see color, it many times is associated with meaning. We associate red with an error, green with a success message, and various colors with specific emotions. If you're interested in learning more about color theory, a great place to start is by watching [this conference talk](http://confreaks.tv/videos/keeprubyweird2018-the-teenage-mutant-ninja-turtles-guide-to-color-theory).

While color can have a positive impact on a users experience, not all users will necessarily get that impact. Colorblind users may actually have a negative impact if the color scheme is used in a way that causes confusion. For these reasons, **we cannot rely on color to convey meaning**.

## Color Blindness

About 4% of the world has some form of color blindness. This means they have the inability to clearly distinguish between various color, and may see colors in a limited range of hues. This can cause difficulties in their daily life. As we build web applications, one thing we need to be cognizant of is making sure that those users still get the full experience on our app and don't run into any confusion due to our use of color, or reliance on color.

There are several types of color blindness. We can use tools like the [Colorblinding Chrome Extension](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa/related?hl=en) to view any site, including our own while developing it, to gain perspective on a user with any type of color blindness.

Using the chrome extension, let's take a moment to explore some examples and non-examples from [We Are Colorblind](https://wearecolorblind.com/examples/).

<div class="try-it-new">
  <h3>Try It: Colorblind Check</h3>
  <p>Install the extension and test out your 2 sites.</p>
  <p>Be ready to discuss: If you are not colorblind, did you miss out on any features of the site, or get confused about anything as a temporary colorblind user?</p>
</div>

## Contrast & Color Accessibility

Contrast is a measure of the difference in brightness between two colors. White text on a white background has a 1:1 ratio. Black text on a white background has a 21:1 ratio. The _minimum_ acceptable contrast is 4.5:1. This ratio should be upheld for:
- Small text
- Images of text
- Outlines on text inputs
- Checkboxes
- Icons
Large scale text and logotypes are exempt; large scale text need a contrast ratio of at least 3:1. [More info here!](https://webaim.org/articles/contrast/)

<div class="try-it-new">
  <h3>Try It: Check Color Ratios</h3>
  <p>Visit the <a target="blank" href="https://webaim.org/resources/contrastchecker/">WebAIM Contrast Checker</a>.</p>
  <p>Check the contrast ratio for any content on your page. If your ratio doesn't meet the criteria yet - that's ok. We'll have work time in the next section to change our palettes.</p>
</div>

## Color Palettes

Overview on colors-emotions, too much contrast, complementary, supplementary, etc.

- link some resources to generators
- link an article or two about good design

TRY IT: Take 10-15 minutes to find a palette, implement.
? Is there a site they can generate a palette and SHARE with everyone?? - https://colors.muz.li/ copy and paste into a google doc???

<br>
<a href="../">Back to Curriculum Index</a>
