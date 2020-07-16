---
layout: lesson
---

# ARIA

<a href="../">Back to Curriculum Index</a>

## Goals

- Explain what ARIA is and a general overview of it's purpose

## What is ARIA?

The _Web Accessibility Initiative_ has an [_Accessible Rich Internet Applications_ specification](https://www.w3.org/TR/wai-aria-1.1/) that was created by the World Wide Web Consortium (W3C). That's a mouthful! Essentially, it is a set of attributes that define the ways we can make the web accessible. 
  
ARIA has attributes that supplement HTML so that certain interactions and widgets in applications are communicated to assistive technologies properly. Let's look at a couple examples:

- Checkboxes, [dropdowns](https://www.youtube.com/watch?time_continue=25&v=Xr32OASZO_Q&feature=emb_logo)
- Modals
- Images pulled in with CSS
- Live Updates

## Examples

Although HTML has built-in checkboxse, it isn't uncommon that developer want to build their own so they can better control the styling with CSS. This presents an accessibility problem, because we no longer have the built-in support for communicating with screen readers. However, with a little more thought and work, it is possible.

Here is the code we might use to build out two checkboxes using the _native_ HTML elements. Because we used the input with a `type="checkbox` attribute, a screen reader will announce to the user whether the box is checked or not, which, is essential information.

```html
<label>Option 1
  <input type="checkbox">
</label>

<label>Option 2
  <input type="checkbox">
</label>
```

If we want more control over the styling, we may use `div`s. 

```html
<div>
  <img src="checkmark.svg" alt="checkmark">
  <p>Option 1</p>
</div>

<div>
  <img src="checkmark.svg" alt="checkmark">
  <p>Option 2</p>
</div>
```

But, the code above won't be very helpful for someone using a screen reader. There would be no clear way to communicate to the user which boxes are checked and which are not. And really, the user might not even have enough information to understand that the site is presenting an opportunity to interact. This short video demonstrates the experience a user would have: [(2:38 - 2:50)](https://www.youtube.com/watch?v=g9Qff0b-lHk&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=14&t=0s)

That's where ARIA comes into play.

```html
<div role="checkbox" aria-checked="true">
  <img src="checkmark.svg" alt="checkmark">
  <p>Option 1</p>
</div>

<div role="checkbox" aria-checked="true">
  <img src="checkmark.svg" alt="checkmark">
  <p>Option 2</p>
</div>
```

Let's observe the differences in the user experience in this video: [(3:34 - 3:42)](https://www.youtube.com/watch?v=g9Qff0b-lHk&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=14&t=0s)

<br>
<a href="../">Back to Curriculum Index</a>