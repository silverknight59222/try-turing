---
layout: lesson
---

# Tools for Accessibility

<a href="../">Back to Curriculum Index</a>

## Goals

- Learn about some of the tools available to assess accessibility
- Use a tool to assess accessibility real sites/apps

## Tools to Audit Accessibility

There are _many_ tools that exist to help developers check the accessibility of their sites. There probably isn't one tool that does it all, so we need to use a combination of tools, as well as do some manual testing.

Because of our limited time together this weekend, we won't go all in on every corner of this. We will dig into two tools pretty extensively and give an overview of others you can check out on your own after this weekend, if you are interested.

## Developer Tools

The Chrome Dev Tools are a set of tools for developers to edits pages on the fly and diagnose problems, all within the Chrome browser. Other browsers have their own set of tools, but for consistency, we will all use Chrome today.

The Dev Tools are very robust; today we will explore a small piece of what they allow us to do.

To open the Dev Tools:
- While in the browser, right-click and select "inspect" from the drop-down menu that appears. Or use the keyboard shortcuts: Mac: `opt + cmd + i`, PC: `ctrl + shft + j`
- From the horizontal menu at the top, select "Lighthouse"
- To change the location of the Dev Tools, click the three small dots at the top-right corner and select a different location

## Lighthouse

Available in your Dev Tools, Lighthouse can run an audit on your site and give you back a score (out of 100) as well as specific issues that are limiting on your site.

Let's run a Lighthouse audit on a few sites and see what we find.

<div class="try-it-new">
  <h3>Try It: Lighthouse</h3>
  <p>Run a Lighthouse audit in the Dev Tools on your site.</p>
  <ol>
    <li>What errors/warnings do you have? Share in the chat.</li>
    <li>Take a few minutes to address those issues in your code. Run the audit again to see if you made the necessary improvements.</li>
  </ol>
</div>

## Other Types of Tools:

- [Color Contrast Checkers](https://webaim.org/resources/contrastchecker/)
- [Color Blindness Simulators]()
- [W3C Checklist](http://romeo.elsevier.com/accessibility_checklist/)
- [axe Audit](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- [Dev Tools to check touch targets](https://a11yproject.com/posts/large-touch-targets/)
- [Readability Test](https://www.webfx.com/tools/read-able/)
- [VoiceOver](https://a11yproject.com/posts/getting-started-with-voiceover/) and other screen readers

<br>
<a href="../">Back to Curriculum Index</a>
