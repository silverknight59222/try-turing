//active links in nav bar
$('.nav-links a:not(.home-logo-link)').each(function(idx, link) {
  var currentPath = window.location.pathname;
  var linkPath = $(link).attr('href');

  if (currentPath.includes(linkPath)) {
    $(link).toggleClass('active-link');
  }
});

//toggle expandable cards on pre-work pages
var expandBtns = document.querySelectorAll(".expander-btn");

expandBtns.forEach(function(btn) {

  btn.addEventListener("click", function(e) {
    var sectionContent = btn.parentElement.parentElement.parentElement.children[1];
    if (sectionContent.classList.contains("show")) {
      sectionContent.classList.remove("show");
      sectionContent.classList.add("hide");
      btn.children[0].style.transform = "rotate(90deg)";
    } else {
      sectionContent.classList.add("show");
      sectionContent.classList.remove("hide");
      btn.children[0].style.transform = "rotate(0deg)";
    }
  });

});

//mark pre-work section complete
var markCompleteBtns = document.querySelectorAll(".mark-complete-btn");

markCompleteBtns.forEach(function(btn) {

  btn.addEventListener("click", function(e) {
    var tag = btn.parentElement.parentElement.children[0].children[1].children[0]

    if (tag.classList.contains('to-do-tag')) {
      tag.classList.remove('to-do-tag');
      tag.classList.add('complete-tag');
      tag.innerText = "complete";
      btn.innerText = "Completed"
    } else {
      tag.classList.add('to-do-tag');
      tag.classList.remove('complete-tag');
      tag.innerText = "to do";
      btn.innerText = "Mark Complete"
    }
  });

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

// toggle projects bbing displayed on what-students-learn page
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
