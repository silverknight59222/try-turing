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

Each page, or type of page, has its own `sass` file for styling. That file lives in the `_sass` directory, and must be imported into `stylesheets/styles-2017121801.scss`.

## Style Guide
