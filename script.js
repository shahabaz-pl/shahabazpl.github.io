// Get the buttons by their IDs
var goToProjectBtn = document.getElementById("gotoproject");
var moreProjectBtn = document.getElementById("moreproject");

// Add click event listener to the "Go to Projects" button
goToProjectBtn.addEventListener("click", function() {
  // Scroll to the element with the id "projects"
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

// Add click event listener to the "More Projects" button
moreProjectBtn.addEventListener("click", function() {
  // Redirect to the "projects.html" page
  window.location.href = "projects.html";
});
