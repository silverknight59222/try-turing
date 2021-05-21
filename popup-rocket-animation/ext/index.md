---
layout: lesson
---

<a href="../">Back to Setup Page</a>

# Extensions

Up until now, we've only covered how to animate an item, starting at point A and ending at point B. What if we wanted our animation to go from point A to E, with different stops at B, C and D? CSS allows us to do that!

Instead of using `to { }` inside of our keyframes, we can use percentages. The percent will be a portion of the duration of the animation.

In the code snippet below, we have a keyframe that will animte over 4 seconds:

```css
@keyframes changeColor {
  25% { background: red; }
  50% { background: yellow; }
  75% { background: teal; }
  100% { background: purple; }
}
```

One second into the animation, the background will be red, at two seconds, yellow, etc. For this animation, the developer chose to break the changes into four equal parts, but any percentages could be used!

Explore a new version of the rolling ball animation by looking at the code in [this repl.it](https://repl.it/@turingschool/RollBall-Animation-Extension#style.css)!

## Level up your Rocket

Now that your explored how percentages work in animations, can you adjust your rocket animation so it feels a bit more realistic? The possibilities are ENDLESS and there are no real _right_ answers here - have some fun with it!

<a href="../wrap-up">Wrap Up</a>