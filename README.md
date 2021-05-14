# Try Coding

This is the curriculum for all Try Coding workshops. Some are archived and/or not currently available through the site.

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

The site has 3 main pages:
- landing page (`/index.html`)
- Workshop Curriculum Index (`/workshop-curriculm/index.html`)
- What Students Learn and Build at Turing (`/what-students-learn/index.html`)

All content files (which are mainly lessons) in the site can be written as either Markdown or HTML. Each curriculum is housed in its own directory at the root of the project.

```
root
|_ be-weekend
|_ be-weekday
|_ fe-weekend
|_ popup-[name-of-event]

etc...
```

Inside of each curriculum directory, there should be an `index.md` file, an assets directory, and a series of directories - one directory for each section of the curriculum. Each section should have its own `index.md. Many will also have an archived directory with former versions of the workshop. Here's an example:

```
root
|_ backend-online
    |_ archive
    |_ assets
    |_ section1
      |_ index.md
    |_ section2
      |_ index.md
  |_ index.md
```

#### Styling 

Each page, or type of page (for example, the lesson page), has its own `sass` file for styling. That file lives in the `_sass` directory, and must be imported into `stylesheets/styles-2017121801.scss`.

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
  <button class="help-click"><span role="img" aria-label="raised hand">🤚</span>Help Me!</button>
    <div class="help-toggle">
      <p>Content here</p>
    </div>
</div>
```

Spicy Challenge Boxes:

```html
<div class="spicy-container">
  <p class="spicy-click">
    <span role="img" aria-label="spicy pepper">🌶</span>Click here for a Spicy Challenge<span role="img" aria-label="spicy pepper">🌶</span>
  </p>
  <div class="spicy-toggle">
    <p>Content here</p>
  </div>
</div>
```

## Style Guide

- Default to using markdown, but take advantage of HTML when you need to (when you need to use CSS or JavaScript, make something accessible, include blank target for link, etc.)
- Pad each heading, paragraph, and code snippet with one line of white space in markdown files
- Use `<a target="blank">` for external link rather than the Markdown `[]()` so use is not navigated away from curriculum site (please don't include the underscore before blank as it throws off syntax highlighting in many text editors, when in markdown files)
- Don't use periods at the end of each item on an unordered list
- For links within the site, default to referencing `{{ site.url }}` rather than the live URL
- We use the Oxford comma

GitHub uses a slightly different system for translating from Markdown than the engine we use for try.turing.io. Keep in mind:

- Use a space after your ``#``'s in headers
- Use a blank line between your headers and any content below
- Replace any `|` with `\|` unless you're really trying to create a table
