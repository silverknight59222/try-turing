<!DOCTYPE html>

<html>
  <head>
    {% include head.html %}
  </head>

  <body>
    <div class="container">
      <section class="sidebar">
        {% include header.html %}
      </section>
      <section class="content">
        <article>
          <h1 class="lesson-title">Turing School of Software and Design</h1>
          <h2 class="lesson-title">{{ page.title }}</h2>
          {{content}}
        </article>
        {% include footer.html %}
      </section>
    </div>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
  </body>
</html>
