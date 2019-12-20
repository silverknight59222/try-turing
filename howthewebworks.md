---
title: How the Internet Works
layout: page
course: "Try Coding"
courselanding: /
session: 2
---

<div id="wrapper">
  <div id="content-container">
    {% include title_banner.html %}
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/goals.svg" alt="Target icon">
      <h2 class="section-header">Goals</h2>
      <ul>
        <li>Diagram what happens when you type a web address into a browser</li>
        <li>Identify the key differences between frontend and backend engineering</li>
      </ul>
    </section>
    <hr>
    <section class="intro-section">
      <img class="section-image" src="{{ site.url }}/assets/images/internet.png" alt="Cloud image">
      <h2 class="section-header">How Does the Internet Work?</h2>
      <div class="intro-section-container">
        <p>Before we talk about coding, let's start by drawing a diagram of how the internet works. We'll use the scenario <b>"What happens when you type <code>google.com/calendar</code> into your browser?"</b> While creating the diagram, we'll label and discuss these terms:</p>
        <ul>
          <li>client</li>
          <li>DNS lookup</li>
          <li>domain name</li>
          <li>IP address</li>
          <li>HTTP request</li>
          <li>method and path</li>
          <li>server</li>
          <li>database</li>
          <li>HTML, CSS, JS</li>
          <li>HTTP response</li>
          <li>frontend</li>
          <li>backend</li>
        </ul>
      </div>
    </section>
    <hr>
    <section>
      <img class="section-image" src="{{ site.url }}/assets/images/frontback.svg" alt="Front and back of shirt">
      <h2 class="section-header">What is the Difference Between Frontend and Backend Programming?</h2>
      <p>When we talk about <span class="vocab">backend programming</span>, we're often thinking of the programming tasks involved in making this possible:</p>
      <ul>
        <li>Storing data and accessing it later</li>
        <li>Verifying that data is accurate</li>
        <li>Manipulating, analyzing, and/or calculating data</li>
        <li>Making sure data can be retrieved quickly and easily</li>
      </ul>
      <p><span class="vocab">Frontend programming</span>, being that it is closer to the user, is more concerned with:</p>
      <ul>
        <li>Processing large, complex data sets in a performant and efficient way</li>
        <li>Building applications that are accessible for the greatest number of users</li>
        <li>Developing unified visual systems within a product</li>
        <li>Programming digital interactions that enhance and streamline the experience for a user</li>
      </ul>
    </section>
    <hr>
    <section style="padding-top: 25px;">
      <a class="btn btn-dark" href="{{ site.url }}/backend">Try Backend Coding</a>
      <a class="btn btn-dark" href="{{ site.url }}/frontend">Try Frontend Coding</a>
    </section>
  </div>
</div>



