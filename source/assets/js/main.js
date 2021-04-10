(function () {
  // Blog Category Filter
  var category_select = document.getElementById("category_select");
  if (category_select) {
    // Get all posts
    var posts = Array.from(document.querySelectorAll(".post-summary"));

    category_select.addEventListener("input", function (e) {
      e.preventDefault();

      var value = e.target.value;

      if (value === "all") {
        for (var i = 0; i < posts.length; i++) {
          posts[i].classList.remove("hidden-post");
        }
      } else {
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].getAttribute("data-post-category") === value) {
            posts[i].classList.remove("hidden-post");
          } else {
            posts[i].classList.add("hidden-post");
          }
        }
      }
    });
  }
})();
