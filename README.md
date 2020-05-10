# Try Coding

This is the curriculum for all Try Coding days.

- Front-End (in-person)
- Back-End (in-person)
- Front-End (online)
- Back-End (online)
- Front-End Advanced (1-day)

## Contributing

This site is built with Jekyll. Find the docs [here](https://jekyllrb.com/docs/usage/).

### Setup

- Clone the repo `git clone git@github.com:turingschool/try-turing.git`
- run `bundle install`
- You can now begin to edit the website
- To start the server run `jekyll serve --incremental`
- Navigate to `localhost:4000` in the browser to see the site
- You can push changes to production by pushing the `gh-pages` branch to GitHub

The changes may take a minute or two to be recognized on production. Please make sure you review your changes on production.

### Structure of Site

All content files in the site can be written as either Markdown or HTML. Each curriculum is housed in its own directory at the root of the project.

```
root
|_ backend
|_ backend-online
|_ frontend
|_ frontend-online
|_ frontend-advanced
```

Inside of each curriculum directory, there should be an `index.md` file and a series of directories - one directory for each section of the curriculum. Each section should have its own `index.md` and and `assets` directory if necessary. Here's an example:

```
root
|_ backend-online
  |_ section1
    |_ assets
    |_ index.md
  |_ section1
    |_ assets
    |_ index.md
  |_ index.md
```

Each page, or type of page, has its own `sass` file for styling. That file lives in the `_sass` directory, and must be imported into `stylesheets/styles-2017121801.scss`.

#### Headers in Markdown Files

For each file, include a header with the following syntax:

```
---
title: Name of lesson
layout: lesson
---
```

The title will appear as the `h1` on that page and the value provided for layout will correspond to a template in the `_layouts` directory.

#### Available Styles

Try It Boxes:

```html
<div class="try-it-new">
  <h2>Try It: Title Here</h2>
  <p>Content here</p>
</div>
```

Help Me Buttons:

```html
<div class="help-container">
  <button class="help-click">🤚Help Me!</button>
    <div class="help-toggle">
      <p>Content here</p>
    </div>
</div>
```

Spicy Challenge Boxes:

```html
<div class="spicy-container">
  <p class="spicy-click">🌶 Click here for a Spicy Challenge 🌶</p>
  <div class="spicy-toggle">
    <p>Content here</p>
  </div>
</div>
```

## Style Guide

- Only use HTML if you need classes for styles or JavaScript
- Pad each heading, paragraph, and code snippet with one line of white space in markdown files
- Use `<a target="blank">` for external link rather than the Markdown `[]()` so use is not navigated away from curriculum site
- Don't use periods at the end of each item on an unordered list

GitHub uses a slightly different system for translating from Markdown than the engine we use for try.turing.io. Keep in mind:

- Put a space after your ``#``'s in headers
- Put a blank line between your headers and any content below
- Replace any `|` with `\|` unless you're really trying to do a table
