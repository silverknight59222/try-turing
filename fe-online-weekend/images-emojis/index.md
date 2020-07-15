---
layout: lesson
---

# Images and Emojis

<a href="../">Back to Curriculum Index</a>

## Goals

- Deepen understanding of users experiences
- Imiplement strategies to increase accessibility for both web development as well as social media posts!

## Images

Anytime we display an image on a webpage, we are probably doing it to add some sort of value to the users experience: show them what a product looks like, invoke some emotion to draw them in, etc. If a user can't see that image, they are missing out on the experience _you_ want to give them, and that _they_ deserve.

Why might a user not be able to see the image?
- Blindness or low vision
- Slow internet connection
- Error with the source of the image

To remedy this, we can provide alternate text using the `alt` attribute on an image.

```html
<img src="some URL" alt="Light brown labrador puppy bouncing over a field of yellow flowers" />
```

If you have a meme on a site (or any image with text overlay), ensure that your alt text includes a description of the image _and_ the text.

## Emojis

This [blog post](https://dev.to/finallynero/accessible-emojis--1pjh) nicely lays out what we need to do to make an emoji accessible. The snippet below shows a completed example:

```html
<p>Coding is so fun! 
  <span role="img" aria-label="starry eyes">🤩</span>
</p>
```

1. Wrap the emoji in a `<span>` element so we can provide additional information to the browser
2. Tell the browser this is an image (`role="img"`)
3. Give a name for this specific emoji (`aria-label="starry eyes"`)

<div class="try-it-new">
  <h3>Try It: Incorporating Images</h3>
  <p>Add an image or two, and an emoji or two if you'd like! <a href="https://www.pexels.com/" target="blank">Pexels</a> is a great resource for stock images. The emoji keyboard can be pulled up on a Mac with <code class="try-it-code">ctrl + cmd + space`</code> and on Windows with <code class="try-it-code">Windows + .`</code>.</p>
  <p>Run the Lighthouse Audit to make sure you don't have any violations in regard to these additions. If you do, address them, then run the check again!</p>
</div>

## Best Practices Summary

In web development:
- Wrap emojis in a span and inclue `role` and `aria-label` attributes
- Provide `alt` text for images. If the image includes text overlay, that should be included in the `alt` text

As a social media user:
- [Limit emojis](https://twitter.com/aardrian/status/1159066496540319744?lang=en)
- Thread or include in original post the `alt` text of an image
- [Capitalize each word in your hashtags](https://twitter.com/LareneLg/status/1271677933149536256)

<br>
<a href="../">Back to Curriculum Index</a>
