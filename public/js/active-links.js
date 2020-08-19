//active links in nav bar
$('.nav-links a:not(.home-logo-link)').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).attr('href');

  if (currentPath.includes(linkPath)) {
    $(link).toggleClass('active-link');
  }
});

//spicy challenge show/hide
var allSpicyTitles = document.querySelectorAll(".spicy-click");

allSpicyTitles.forEach(function(title) {

  title.addEventListener("click", function(e) {
    var content = e.target.nextSibling.nextSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

});

//help me! show/hide
var allPleasForHelp = document.querySelectorAll(".help-click");

allPleasForHelp.forEach(function(title) {

  title.addEventListener("click", function(e) {
    var content = e.target.nextSibling.nextSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

});

// toggle projects ebing displyaed on what-students-learn page
var beProjectsBtn = document.querySelector('#show-be-projects-btn');
var feProjectsBtn = document.querySelector('#show-fe-projects-btn');

var beProjects = document.querySelector('.be-project-section');
var feProjects = document.querySelector('.fe-project-section');

var isFEDisplayed = true;

beProjectsBtn.addEventListener("click", function() {
  beProjects.style.display = 'block';
  feProjects.style.display = 'none';
});

feProjectsBtn.addEventListener("click", function () {
  beProjects.style.display = 'none';
  feProjects.style.display = 'block';
});