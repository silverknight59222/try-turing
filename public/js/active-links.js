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
var bePreWorkDefault = {
  "setup": false,
  "part-one": false,
  "part-two": false,
  "submission": false
}

var bePrework = JSON.parse(localStorage.getItem("be-prework")) || bePreWorkDefault;
localStorage.setItem("be-prework", JSON.stringify(bePrework));


var fePreWorkDefault = {
  "setup": false,
  "part-one": false,
  "part-two": false,
  "submission": false
}

var fePrework = JSON.parse(localStorage.getItem("fe-prework")) || fePreWorkDefault;
localStorage.setItem("fe-prework", JSON.stringify(fePrework));


function checkCompleteSections() {
  var tags = document.querySelectorAll(".tag");

  tags.forEach(function(tag) {
    if (tag.classList.contains("be-tag")) {
      if (bePrework[tag.classList[0]] === true) {
        tag.classList.remove("to-do-tag");
        tag.classList.add("complete-tag");
        tag.innerText = "complete";
      }
    } else {
      if (fePrework[tag.classList[0]] === true) {
        tag.classList.remove("to-do-tag");
        tag.classList.add("complete-tag");
        tag.innerText = "complete";
      }
    }
  });
}

checkCompleteSections();

var markCompleteBtns = document.querySelectorAll(".mark-complete-btn");

markCompleteBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    var tag = btn.parentElement.parentElement.children[0].children[1].children[0]
    var section = tag.classList[0];
    var backEnd = tag.classList.contains("be-tag");

    if (tag.classList.contains('to-do-tag')) {
      tag.classList.remove('to-do-tag');
      tag.classList.add('complete-tag');
      tag.innerText = "complete";
      btn.innerText = "Completed";
      upDateLocalStorage(backEnd, section, true);
    } else {
      tag.classList.add('to-do-tag');
      tag.classList.remove('complete-tag');
      tag.innerText = "to do";
      btn.innerText = "Mark Complete"
      upDateLocalStorage(backEnd, section, false);
    }
  });
});

function upDateLocalStorage(backEnd, section, complete) {
  if (backEnd) {
    bePrework[section] = complete;
    localStorage.setItem("be-prework", JSON.stringify(bePrework));
  } else {
    fePrework[section] = complete;
    localStorage.setItem("fe-prework", JSON.stringify(fePrework));

  }
}

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
