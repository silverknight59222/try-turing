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
